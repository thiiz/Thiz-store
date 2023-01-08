import style from './index.module.css'
import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import { memo, useState } from 'react'
import { getData, postData } from '../../utils/fetchData'
import { setCookie } from 'nookies'
import { useAuth } from '../../contexts/AuthContext'
import ShowPass from '../showpass/ShowPass'
import { useNotify } from '../../contexts/NotifyContext'
import { validateEmail } from '../../utils/validateEmail'

function Login({ setSwitchModal, setToggleLoginModal }) {
	const { setAuth } = useAuth()
	const [showPass, setShowPass] = useState(false)
	const [rememberUser, setRememberUser] = useState(true)
	const { notifyPromise, notifyPromiseSuccess, notifyPromiseError } = useNotify()

	const { register, handleSubmit, watch, setValue, setFocus, setError, clearErrors, resetField, formState } = useForm({
		mode: 'onSubmit',
		shouldFocusError: true,
		defaultValues: { email: '', password: '' },
	})
	const { errors, isSubmitting } = formState

	const handleChangeInput = e => {
		const { name, value } = e.target
		setValue(name, value)
		if (errors.email || errors.password) clearErrors()
	}

	const onSubmit = async (data) => {
		if (!validateEmail(data.email)) {
			resetField('password')
			setError('email', { type: 'custom', message: "Endereço de email inválido" })
			setFocus('email')
			return
		}
		notifyPromise()
		const res = await postData('auth/login', data)
		if (res.err) {
			resetField('password')
			setError('email', { type: 'custom' })
			setError('password', { type: 'custom' })
			notifyPromiseError({ msg: "Endereço de email ou senha incorretos" })
			return
		}
		if (rememberUser) {
			const oneDay = 86400
			setCookie(null, 'refreshtoken', res.refresh_token, {
				maxAge: oneDay * 7, // 7 days
				path: '/api/auth/accessToken',
			})
			localStorage.setItem('firstLogin', true)
		}
		getData('auth/accessToken').then(res => {
			setAuth({ token: res.access_token, user: res.user })
		})

		if (res.msg) {
			setToggleLoginModal(false)
			return notifyPromiseSuccess({ msg: res.msg })
		}
	}

	return (
		<div className={style.formContainer}>
			<form
				className={style.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<label
					className={style.inputGroup}
					style={errors.email ? { borderColor: "#ff0000" } : {}}
				>
					<MdEmail className={style.icon} style={errors.email ? { color: "#ff0000" } : {}} />
					<input
						{...register('email', { required: true })}
						onChange={handleChangeInput}
						className={`${style.input} ${errors.email ? style.inputError : style.inputNormal}`}
						type="text"
						name="email"
						autoComplete='email'
						autoFocus
						disabled={isSubmitting}
					/>
					<label className={`${style.placeHolder}  ${watch('email') !== '' ? style.topPlaceholder : ''}`} style={errors.email ? { color: "#ff0000" } : {}}>
						{errors.email?.message || "Email"}
					</label>
				</label>

				<label
					className={style.inputGroup}
					style={errors.password ? { borderColor: "#ff0000" } : {}}
				>
					<RiLockFill className={style.icon} style={errors.password ? { color: "#ff0000" } : {}} />
					<input {...register('password', { required: true })}
						onChange={handleChangeInput}
						className={`${style.input} ${errors.password ? style.inputError : style.inputNormal}`}
						type={showPass ? "text" : "password"}
						name="password"
						autoComplete='current-password'
						disabled={isSubmitting}
					/>
					<label className={`${style.placeHolder}  ${watch('password') !== '' ? style.topPlaceholder : ''}`} style={errors.password ? { color: "#ff0000" } : {}}>
						{errors.password?.message || "Senha"}
					</label>
					<ShowPass showPass={showPass} setShowPass={setShowPass} />
				</label>

				<div className={style.containerCheckBoxAndRecover}>
					<label className={style.containerRemember}>
						<input type="checkbox" id={style.remember} checked={rememberUser} onChange={() => setRememberUser(rememberUser => !rememberUser)} />
						<span className={style.labelRemeber}>Mantenha-me conectado</span>
					</label>
					<div className={style.containerRecover}>
						<button onClick={() => setSwitchModal("ForgotPass")} type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
					</div>
				</div>

				<div className={style.containerTerms}>
					<span>Ao fazer login você concorda com a nossa </span>
					<a className={style.link} href="#">Política de Privacidade</a>
					<span> e os </span>
					<a className={style.link} href="#">Termos de uso</a>
					<span>.</span>
				</div>

				{!errors.email && !errors.password ?
					<button type='submit' className={`${style.btn} ${isSubmitting ? style.btnLoading : ''}`} disabled={isSubmitting}>
						<span className={style.btnText}>iniciar sessão</span>
					</button>
					:
					<button type='button' className={`${style.btn} ${style.btnError}`} disabled={true}>
						<span className={style.btnText}>iniciar sessão</span>
					</button>
				}
			</form>
			<div className={style.switchContainer}>
				<span className={style.or}>Não tem uma conta?</span>
				<button onClick={() => setSwitchModal("register")} type='button' className={style.switchBtn}>Criar uma conta</button>
			</div>
		</div >
	)
}

export default Login