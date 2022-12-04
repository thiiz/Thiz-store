import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { ImUser, ImUserPlus } from 'react-icons/im'
import { useForm } from 'react-hook-form'
import style from './login.module.css'
import valid from './valid'
import { postData } from '../../utils/fetchData'
import { useState } from 'react'
import ShowPass from '../showpass/ShowPass'
import { useNotify } from '../../contexts/NotifyContext'


export default function Register({ setLogin }) {
	const initialState = { name: '', email: '', password: '', cf_password: '' }
	const [userData, setUserData] = useState(initialState)
	const { name, email, password, cf_password } = userData
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


	async function handler(data) {
		const errMsg = valid(data.name, data.secondName, data.email, data.password, data.cf_password, data.terms)
		if (errMsg) { setError(errMsg) }
		setBtn(false)
		if (errMsg === "all") return setErrorAll("Por favor preencha todos os campos")
		if (errMsg === "O seu primeiro nome é muito curto.") { return setErrorName(true) }
		if (errMsg === "O seu segundo nome é muito curto.") { return setErrorSecondName(true) }
		if (errMsg === "Endereço de email inválido.") { return setErrorEmail(true) }
		if (errMsg === "A senha deve ter no minímo 6 caracteres.") { return setErrorPassword(true) }
		if (errMsg === "As senhas devem ser iguais.") { return setErrorCf(true) }
		if (data.terms !== "ok") { return setErrorTerms(true) }
		const res = await postData('auth/register', userData)
		if (res.err === "This email already exists.") return setErrorAll("Este endereço email já está em uso.")
		if (res.err) return setErrorAll("Falha ao se cadastrar, por favor tente mais tarde")
		notifyRegistred()
		return setLogin(true)
	}

	return (
		<>
			<div className={style.loginTitle}>Criar conta</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Já tem uma conta? <button onClick={() => setLogin(true)} className={style.register}><strong>Fazer login.</strong></button></div>
				{errorAll === "Por favor preencha todos os campos" || errorAll === "Falha ao se cadastrar, por favor tente mais tarde" ?
					<p className={style.error}>{errorAll}</p> : ''}
				<form className={style.form} onSubmit={handleSubmit(handler)} onClick={() =>
					errorAll ? setErrorAll("") : errorName ?
						setErrorName(false) : errorEmail ?
							setErrorEmail(false) : errorSecondName ?
								setErrorSecondName(false) : errorPassword ?
									setErrorPassword(false) : errorCf ?
										setErrorCf(false) : errorTerms ?
											setErrorTerms(false) : ''}>
					{errorName && <p className={style.error}>{error}</p>}
					{errorSecondName && <p className={style.error}>{error}</p>}
					<div className={style.nameInput}>
						<label className={`${style.label} ${!errorName ? style.labelNormal : style.labelError}`}>
							<ImUser className={`${style.icon} ${style.iconUser} ${!errorName ? style.iconNormal : style.iconError}`} />
							<input {...register('name', {
								required: " "
							})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="text" name="name" placeholder='Nome' autoComplete="false" required />
						</label>
						<label className={`${style.label} ${!errorSecondName ? style.labelNormal : style.labelError}`}>
							<ImUserPlus className={`${style.icon} ${style.iconUser} ${!errorSecondName ? style.iconNormal : style.iconError}`} />
							<input {...register('secondName', {
								required: " "
							})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="text" name="secondName" placeholder='Sobrenome' autoComplete="false" required />
						</label>
					</div>

					{errorEmail && <p className={style.error}>{error}</p> || errorAll === "Este endereço email já está em uso." && <p className={style.error}>{errorAll}</p>}
					<label className={`${style.label} ${errorEmail || errorAll === "Este endereço email já está em uso." ? style.labelError : style.labelNormal}`}>
						<MdEmail className={`${style.icon} ${errorEmail || errorAll === "Este endereço email já está em uso." ? style.iconError : style.iconNormal}`} />
						<input {...register('email', {
							required: " "
						})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" required />
					</label>
					{errorPassword && <p className={style.error}>{error}</p>}
					<label className={`${style.label} ${!errorPassword ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorPassword ? style.iconNormal : style.iconError}`} />
						<input {...register('password', {
							required: " "
						})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type={showPass ? "text" : "password"} name="password" placeholder='Senha' autoComplete="false" required />
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
					</label>
					{errorCf && <p className={style.error}>{error}</p>}
					<label className={`${style.label} ${!errorCf ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorCf ? style.iconNormal : style.iconError}`} />
						<input {...register('cf_password', {
							required: " "
						})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="password" name="cf_password" placeholder='Confirmar senha' autoComplete="false" required />
					</label>
					{errorTerms && <p className={style.error}>{error}</p>}
					<div id={style.politicaTermos}>
						<input {...register('terms', {
							required: " "
						})} onFocus={() => !btn ? setBtn(true) : ''} className={errorTerms ? style.termsError : ''} type="checkbox" id={style.terms} name="terms" value="ok" required />
						<label className={`${style.labelTerms} ${style.labelTermsError}`}>Ao se cadastrar você concorda com a nossa <a className={style.link} href="#">Política de Privacidade</a> e os <a className={style.link} href="#">Termos de uso</a>.</label>
					</div>
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