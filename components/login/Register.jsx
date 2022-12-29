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
	const { notifyRegistred } = useNotify()
	const { register, handleSubmit } = useForm()
	const [error, setError] = useState("")
	const [errorAll, setErrorAll] = useState("")
	const [errorName, setErrorName] = useState(false)
	const [errorSecondName, setErrorSecondName] = useState(false)
	const [errorEmail, setErrorEmail] = useState(false)
	const [errorPassword, setErrorPassword] = useState(false)
	const [errorCf, setErrorCf] = useState(false)
	const [errorTerms, setErrorTerms] = useState(false)

	const [btn, setBtn] = useState(true)

	const handleChangeInput = e => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
	}

	const resetForm = () => {
		if (errorAll) return setErrorAll("")
		if (errorName) return setErrorName(false)
		if (errorSecondName) return setErrorSecondName(false)
		if (errorEmail) return setErrorEmail(false)
		if (errorPassword) return setErrorPassword(false)
		if (errorCf) return setErrorCf(false)
		if (errorTerms) return setErrorTerms(false)
	}

	async function handler(data) {
		setBtn(false)
		const errMsg = valid(data.name, data.secondName, data.email, data.password, data.cf_password, data.terms)
		if (errMsg) { setError(errMsg) }
		if (errMsg === "all") return setErrorAll("Por favor preencha todos os campos")
		if (errMsg === "O seu primeiro nome é muito curto.") { return setErrorName(true) }
		if (errMsg === "O seu segundo nome é muito curto.") { return setErrorSecondName(true) }
		if (errMsg === "Endereço de email inválido.") { return setErrorEmail(true) }
		if (errMsg === "A senha deve ter no minímo 6 caracteres.") { return setErrorPassword(true) }
		if (errMsg === "As senhas devem ser iguais.") { return setErrorCf(true) }
		if (data.terms !== "ok") { return setErrorTerms(true) }
		const res = await postData('auth/register', userData)
		if (res.err === "This email already exists.") return setErrorAll("Este endereço de email está indisponível.")
		if (res.err) return setErrorAll("Falha ao se cadastrar, por favor tente mais tarde")
		notifyRegistred()
		return setSwitchModal("login")
	}

	return (
		<>
			<div className={style.loginTitle}>Criar conta</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Já tem uma conta? <button onClick={() => setSwitchModal("login")} className={style.register}><strong>Fazer login.</strong></button></div>
				{errorAll === "Por favor preencha todos os campos" || errorAll === "Falha ao se cadastrar, por favor tente mais tarde" ?
					<p className={style.error}>{errorAll}</p> : ''}
				<form className={style.form} onSubmit={handleSubmit(handler)} onClick={() => resetForm()}
					onFocus={() => !btn && setBtn(true)}
				>
					{errorName && <p className={style.error}>{error}</p>}
					{errorSecondName && <p className={style.error}>{error}</p>}
					<div className={style.nameInput}>
						<label className={`${style.label} ${!errorName ? style.labelNormal : style.labelError}`}>
							<ImUser className={`${style.icon} ${style.iconUser} ${!errorName ? style.iconNormal : style.iconError}`} />
							<input {...register('name', {
								required: " "
							})} onChange={handleChangeInput} className={`${style.input} ${name !== '' ? style.validInput : ''}`} type="text" name="name" autoComplete="false" required />
							<span className={style.placeHolder}>Nome</span>
						</label>
						<label className={`${style.label} ${!errorSecondName ? style.labelNormal : style.labelError}`}>
							<ImUserPlus className={`${style.icon} ${style.iconUser} ${!errorSecondName ? style.iconNormal : style.iconError}`} />
							<input {...register('secondName', {
								required: " "
							})} onChange={handleChangeInput} className={`${style.input} ${secondName !== '' ? style.validInput : ''}`} type="text" name="secondName" autoComplete="false" required />
							<span className={style.placeHolder}>Sobrenome</span>
						</label>
					</div>

					{errorEmail && <p className={style.error}>{error}</p> || errorAll === "Este endereço de email está indisponível." && <p className={style.error}>{errorAll}</p>}
					<label className={`${style.label} ${errorEmail || errorAll === "Este endereço de email está indisponível." ? style.labelError : style.labelNormal}`}>
						<MdEmail className={`${style.icon} ${errorEmail || errorAll === "Este endereço de email está indisponível." ? style.iconError : style.iconNormal}`} />
						<input {...register('email', {
							required: " "
						})} onChange={handleChangeInput} className={`${style.input} ${email !== '' ? style.validInput : ''}`} type="email" name="email" autoComplete="false" required />
						<span className={style.placeHolder}>Email</span>
					</label>
					{errorPassword && <p className={style.error}>{error}</p>}
					<label className={`${style.label} ${!errorPassword ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorPassword ? style.iconNormal : style.iconError}`} />
						<input {...register('password', {
							required: " "
						})} onChange={handleChangeInput} className={`${style.input} ${password !== '' ? style.validInput : ''}`} type={showPass ? "text" : "password"} name="password" autoComplete="false" required />
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
						<span className={style.placeHolder}>Senha</span>
					</label>
					{errorCf && <p className={style.error}>{error}</p>}
					<label className={`${style.label} ${!errorCf ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorCf ? style.iconNormal : style.iconError}`} />
						<input {...register('cf_password', {
							required: " "
						})} onChange={handleChangeInput} className={`${style.input} ${cf_password !== '' ? style.validInput : ''}`} type="password" name="cf_password" autoComplete="false" required />
						<span className={style.placeHolder}>Confirmar senha</span>
					</label>
					{errorTerms && <p className={style.error}>Você deve aceitar nossa política de privacidade e os termos de uso para continuar.</p>}
					<label id={style.politicaTermos}>
						<input {...register('terms', {
						})} className={errorTerms ? style.termsError : ''} type="checkbox" id={style.terms} name="terms" value="ok" />
						<span className={`${style.labelTerms} ${style.labelTermsError}`}>Ao se cadastrar você concorda com a nossa <a className={style.link} href="#">Política de Privacidade</a> e os <a className={style.link} href="#">Termos de uso</a>.</span>
					</label>
					{btn ?
						<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>criar conta</button>
						:
						<button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>criar conta</button>
					}
				</form>
			</div>
		</>
	)
}