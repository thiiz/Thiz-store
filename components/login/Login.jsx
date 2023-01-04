import style from './index.module.css'
import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { getData, postData } from '../../utils/fetchData'
import { setCookie } from 'nookies'
import { useAuth } from '../../contexts/AuthContext'
import ShowPass from '../showpass/ShowPass'
import { useNotify } from '../../contexts/NotifyContext'
import { validateEmail } from '../../utils/validateEmail'

export default function Login({ setSwitchModal, setToggleLoginModal }) {

	const { setAuth } = useAuth()
	const [showPass, setShowPass] = useState(false)
	const [rememberUser, setRememberUser] = useState(true)
	const { notifyPromise, notifyPromiseSuccess, notifyPromiseError } = useNotify()

	const { register, handleSubmit, setError, clearErrors, formState } = useForm()
	const { errors, isSubmitting } = formState
	const initialState = { email: '', password: '' }
	const [userData, setUserData] = useState(initialState)
	const { email, password } = userData

	const handleChangeInput = e => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
		return
	}

	async function handler() {
		notifyPromise()
		if (!validateEmail(email)) {
			setError('email', { type: 'custom' })
			setUserData({ ...userData, ["email"]: "" })
			notifyPromiseError({ msg: "Endereço de email inválido." })
			return
		}
		const res = await postData('auth/login', userData)
		if (res.err) {
			setError('email', { type: 'custom' })
			setError('password', { type: 'custom' })
			setUserData({ ...userData, ["password"]: "" })
			notifyPromiseError({ msg: "Endereço de email ou senha incorretos." })
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
		<>
			<div className={style.loginTitle}><span>Iniciar sessão</span></div>
			<div className={style.formContainer}>
				<div className={style.newUser}>
					<span>Novo usuário? </span>
					<button onClick={() => setSwitchModal("register")} className={style.register}>
						<span>
							<strong>Cadastre-se aqui.</strong>
						</span>
					</button>
				</div>
				<form className={style.form} onSubmit={handleSubmit(handler)} onFocus={() => clearErrors()}>

					<label className={`${style.label} ${!errors.email ? style.labelNormal : style.labelError}`}>
						<MdEmail className={`${style.icon} ${!errors.email ? style.iconNormal : style.iconError}`} />
						<input
							{...register('email', { required: true })}
							onChange={handleChangeInput}
							className={`${style.input} ${email !== '' ? style.validInput : ''}`}
							type="email"
							name="email"
							value={email}
							autoComplete="false" />
						<span className={style.placeHolder}>Email</span>
					</label>

					<label className={`${style.label} ${!errors.password ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errors.password ? style.iconNormal : style.iconError}`} />
						<input {...register('password', { required: true })}
							onChange={handleChangeInput}
							className={`${style.input} ${password !== '' ? style.validInput : ''}`}
							type={showPass ? "text" : "password"}
							name="password"
							value={password}
							autoComplete="false" />
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
						<span className={style.placeHolder}>Senha</span>
					</label>

					<div className={style.containerCheckBoxAndRecover}>
						<label className={style.containerRemember}>
							<input type="checkbox" id={style.terms} checked={rememberUser} onChange={() => setRememberUser(rememberUser => !rememberUser)} />
							<span className={style.labelRemeber}>Mantenha-me conectado</span>
						</label>
						<div className={style.containerRecover}>
							<button onClick={() => setSwitchModal("ForgotPass")} type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
						</div>
					</div>

					<div className={style.labelTerms}>
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
							<span>iniciar sessão</span>
						</button>
					}
				</form>
			</div>
		</>
	)
}