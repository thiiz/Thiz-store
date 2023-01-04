import style from './index.module.css'
import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { ImUser, ImUserPlus } from 'react-icons/im'
import { useForm } from 'react-hook-form'
import valid from './valid'
import { postData } from '../../utils/fetchData'
import { useState } from 'react'
import ShowPass from '../showpass/ShowPass'
import { useNotify } from '../../contexts/NotifyContext'

export default function Register({ setSwitchModal }) {
	const initialState = { name: '', secondName: '', email: '', password: '', cf_password: '' }
	const [userData, setUserData] = useState(initialState)
	const { name, secondName, email, password, cf_password } = userData
	const [showPass, setShowPass] = useState(false)
	const { register, formState, handleSubmit, clearErrors, setError } = useForm()
	const { errors, isSubmitting, } = formState
	const { notifySuccess, notifyError } = useNotify()

	const handleChangeInput = e => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
	}

	async function handler(data) {
		const errMsg = valid(data.name, data.secondName, data.email, data.password, data.cf_password, data.terms)
		if (errMsg) {
			if (errMsg === "all") return notifyError({ msg: "Por favor preencha todos os campos" })
			if (errMsg === "O seu primeiro nome é muito curto.") return setError('name', { type: 'custom', message: errMsg })
			if (errMsg === "O seu segundo nome é muito curto.") return setError('secondName', { type: 'custom', message: errMsg })
			if (errMsg === "Endereço de email inválido.") return setError('email', { type: 'custom', message: errMsg })
			if (errMsg === "A senha deve ter no minímo 6 caracteres.") return setError('password', { type: 'custom', message: errMsg })
			if (errMsg === "As senhas devem ser iguais.") return setError('cf_password', { type: 'custom', message: errMsg })
		}
		if (data.terms !== "ok")
			return setError('terms', { type: 'custom', message: "Você deve aceitar nossa política de privacidade e os termos de uso para continuar" })

		const res = await postData('auth/register', userData)

		if (res.err) {
			if (res.err === 'Endereço de email indisponível.') return setError('email', { type: 'custom', message: res.err })
			if (res.err) return notifyError({ msg: "Falha ao se cadastrar, por favor tente mais tarde" })
		}
		setSwitchModal("login")
		return notifySuccess({ msg: res.msg })
	}

	return (
		<>
			<div className={style.loginTitle}>Criar conta</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Já tem uma conta? <button onClick={() => setSwitchModal("login")} className={style.register}><strong>Fazer login.</strong></button></div>
				<form className={style.form} onSubmit={handleSubmit(handler)}>
					{errors.name && <p className={style.error}>{errors.name.message}</p> || errors.secondName && <p className={style.error}>{errors.secondName.message}</p>}
					<div className={style.nameInput}>
						<label className={`${style.label} ${!errors.name ? style.labelNormal : style.labelError}`} onFocus={() => clearErrors("name")}>
							<ImUser className={`${style.icon} ${style.iconUser} ${!errors.name ? style.iconNormal : style.iconError}`} />
							<input {...register('name', {
								required: ''
							})} onChange={handleChangeInput} className={`${style.input} ${name !== '' ? style.validInput : ''}`} type="text" name="name" autoComplete="false" />
							<span className={style.placeHolder}>Nome</span>
						</label>
						<label className={`${style.label} ${!errors.secondName ? style.labelNormal : style.labelError}`} onFocus={() => clearErrors("secondName")}>
							<ImUserPlus className={`${style.icon} ${style.iconUser} ${!errors.secondName ? style.iconNormal : style.iconError}`} />
							<input {...register('secondName', {
								required: ''
							})} onChange={handleChangeInput} className={`${style.input} ${secondName !== '' ? style.validInput : ''}`} type="text" name="secondName" autoComplete="false" />
							<span className={style.placeHolder}>Sobrenome</span>
						</label>
					</div>

					{errors.email && <p className={style.error}>{errors.email.message}</p>}
					<label className={`${style.label} ${!errors.email ? style.labelNormal : style.labelError}`} onFocus={() => clearErrors("email")}>
						<MdEmail className={`${style.icon} ${!errors.email ? style.iconNormal : style.iconError}`} />
						<input {...register('email', {
							required: ''
						})} onChange={handleChangeInput} className={`${style.input} ${email !== '' ? style.validInput : ''}`} type="email" name="email" autoComplete="false" />
						<span className={style.placeHolder}>Email</span>
					</label>

					{errors.password && <p className={style.error}>{errors.password.message}</p>}
					<label className={`${style.label} ${!errors.password ? style.labelNormal : style.labelError}`} onFocus={() => clearErrors("password")}>
						<RiLockFill className={`${style.icon} ${!errors.password ? style.iconNormal : style.iconError}`} />
						<input {...register('password', {
							required: ''
						})} onChange={handleChangeInput}
							className={`${style.input} ${password !== '' ? style.validInput : ''}`}
							type={showPass ? "text" : "password"}
							name="password"
							autoComplete="off" />
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
						<span className={style.placeHolder}>Senha</span>
					</label>

					{errors.cf_password && <p className={style.error}>{errors.cf_password.message}</p>}
					<label className={`${style.label} ${!errors.cf_password ? style.labelNormal : style.labelError}`} onFocus={() => clearErrors("cf_password")}>
						<RiLockFill className={`${style.icon} ${!errors.cf_password ? style.iconNormal : style.iconError}`} />
						<input {...register('cf_password', {
							required: ''
						})} onChange={handleChangeInput} className={`${style.input} ${cf_password !== '' ? style.validInput : ''}`} type="password" name="cf_password" autoComplete="false" />
						<span className={style.placeHolder}>Confirmar senha</span>
					</label>

					{errors.terms && <p className={style.error}>{errors.terms.message}</p>}
					<label id={style.politicaTermos} onFocus={() => clearErrors("terms")}>
						<input {...register('terms')} className={!errors.terms ? '' : style.termsError} type="checkbox" id={style.terms} name="terms" value="ok" />
						<div className={`${style.labelTerms} ${style.labelTermsError}`}>
							<span>Ao se cadastrar você concorda com a nossa </span>
							<a className={style.link} href="#">Política de Privacidade</a>
							<span> e os </span>
							<a className={style.link} href="#">Termos de uso</a>
							<span>.</span>
						</div>
					</label>

					{!errors.name && !errors.secondName && !errors.email && !errors.password && !errors.cf_password && !errors.terms ?
						<button type='submit' className={`${style.btn} ${isSubmitting ? style.btnLoading : ''}`} disabled={isSubmitting}>
							<span className={style.btnText}>criar conta</span>
						</button>
						:
						<button type='button' className={`${style.btn} ${style.btnError}`} disabled={true}>criar conta</button>
					}
				</form>
			</div>
		</>
	)
}