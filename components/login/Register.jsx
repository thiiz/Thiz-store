import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { ImUser } from 'react-icons/im'
import { useForm } from 'react-hook-form'
import style from './login.module.css'
import valid from './valid'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Register({ setLogin }) {
	const { register, handleSubmit } = useForm()
	const [error, setError] = useState("")
	const [errorAll, setErrorAll] = useState("")
	const [errorName, setErrorName] = useState(false)
	const [errorEmail, setErrorEmail] = useState(false)
	const [errorPassword, setErrorPassword] = useState(false)
	const [errorCf, setErrorCf] = useState(false)
	const [errorTerms, setErrorTerms] = useState(false)

	function handler(data) {
		const errMsg = valid(data.name, data.email, data.password, data.cf_password, data.terms)
		if (errMsg) { setError(errMsg) }

		if (errMsg === "all") return setErrorAll("Por favor preencha todos os campos")
		if (errMsg === "O nome de usúario é muito curto.") return setErrorName(true)
		if (errMsg === "Endereço de email inválido.") return setErrorEmail(true)
		if (errMsg === "A senha deve ter no minímo 6 caracteres.") return setErrorPassword(true)
		if (errMsg === "As senhas devem ser iguais.") return setErrorCf(true)
		if (errMsg === "Você deve aceitar os termos para criar sua conta.") return setErrorTerms(true)
		
		return setLogin(true)
	}

	return (
		<>
			<div className={style.loginTitle}>Criar conta</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Já tem uma conta? <button onClick={() => setLogin(true)} className={style.register}><strong>Fazer login.</strong></button></div>
				{errorAll === "Por favor preencha todos os campos" ?
					<p className={style.error}>{errorAll}</p> : ''}
				<form className={style.form} onSubmit={handleSubmit(handler)} onFocus={() =>
					errorAll ? setErrorAll("") : errorName ?
						setErrorName(false) : errorEmail ?
							setErrorEmail(false) : errorPassword ?
								setErrorPassword(false) : errorCf ?
									setErrorCf(false) : errorTerms ?
										setErrorTerms(false) : ''}>
					{errorName ? <p className={style.error}>{error}</p> : ''}
					<label className={`${style.label} ${!errorName ? style.labelNormal : style.labelError}`}>
						<ImUser className={`${style.icon} ${!errorName ? style.iconNormal : style.iconError}`} />
						<input {...register('name')} className={style.input} type="text" name="name" placeholder='Usúario' autoComplete="false" required />
					</label>
					{errorEmail ? <p className={style.error}>{error}</p> : ''}
					<label className={`${style.label} ${!errorEmail ? style.labelNormal : style.labelError}`}>
						<MdEmail className={`${style.icon} ${!errorEmail ? style.iconNormal : style.iconError}`} />
						<input {...register('email')} className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" required />
					</label>
					{errorPassword ? <p className={style.error}>{error}</p> : ''}
					<label className={`${style.label} ${!errorPassword ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorPassword ? style.iconNormal : style.iconError}`} />
						<input {...register('password')} className={style.input} type="password" name="password" placeholder='Senha' autoComplete="false" required />
					</label>
					{errorCf ? <p className={style.error}>{error}</p> : ''}
					<label className={`${style.label} ${!errorCf ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorCf ? style.iconNormal : style.iconError}`} />
						<input {...register('cf_password')} className={style.input} type="password" name="cf_password" placeholder='Confirmar senha' autoComplete="false" required />
					</label>
					{errorTerms ? <p className={style.error}>{error}</p> : ''}
					<div id="politica-termos">
						<input {...register('terms')} className={errorTerms ? style.termsError : ''} type="checkbox" id={style.terms} name="terms" value="ok" required />
						<label className={`${style.labelTerms} ${style.labelTermsError}`}>Ao se cadastrar você concorda com a nossa <a className={style.link} href="#">Política de Privacidade</a> e os <a className={style.link} href="#">Termos de uso</a>.</label>
					</div>
					<button type='submit' className={style.btn} disabled={false}>criar conta</button>
				</form>
			</div>
		</>
	)
}