import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import style from './login.module.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { postData } from '../../utils/fetchData'
import { setCookie, parseCookies } from 'nookies'

export default function Login({ login, setLogin }) {
	const { register, handleSubmit } = useForm()
	const [registred, setRegistred] = useState(false)
	const [msg, setMsg] = useState("")



	useEffect(() => {
		if (login === "registred") {
			setMsg("Por favor confirme o email que enviamos.")
			setRegistred(true)
			setLogin(true)
		}
	}, [login])


	const initialState = { email: '', password: '' }
	const [userData, setUserData] = useState(initialState)
	const { email, password } = userData

	const [error, setError] = useState("")
	const [errorAll, setErrorAll] = useState("")

	const [btn, setBtn] = useState(true)

	const handleChangeInput = e => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
	}

	async function handler(data) {
		setBtn(false)

		const res = await postData('auth/login', userData)
		if (res.err === "This user does not exist.") return setError("Endereço de email não está cadastrado.")
		if (res.err === "Incorrect password.") return setError("Endereço de email ou senha incorretos.")
		console.log(res.msg)
		setCookie(null, 'refreshToken', res.refresh_token, {
			maxAge: 86400 * 7,
			path: '/api/auth/accessToken',
		})
		localStorage.setItem('firstLogin', true)
		if(res.msg === "Login Success!") return setMsg("Logado com sucesso!"), setRegistred(true)
	}

	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setLogin(false)} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				{registred ? <p className={style.success}>{msg}</p> : ''}
				{error === "Endereço de email não está cadastrado." || error === "Endereço de email ou senha incorretos." ?
					<p className={style.error}>{error}</p> : ''}
				<form className={style.form} method="post" onSubmit={handleSubmit(handler)} onClick={() => setRegistred(false) & setError("")}>
					<label className={`${style.label} ${style.labelNormal}`}>
						<MdEmail className={`${style.icon} ${style.iconNormal}`} />
						<input {...register('email')} onChange={handleChangeInput} className={style.input} type="email" name="email" value={email} placeholder='Email' autoComplete="false" />
					</label>
					<label className={`${style.label} ${style.labelNormal}`}>
						<RiLockFill className={`${style.icon} ${style.iconNormal}`} />
						<input {...register('password')} onChange={handleChangeInput} className={style.input} type="password" name="password" value={password} placeholder='Senha' autoComplete="false" />
					</label>
					<div className={style.containerRecover}>
						<button type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
					</div>
					<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>iniciar sessão</button>
				</form>
			</div>
		</>
	)
}