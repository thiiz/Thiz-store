import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import style from './login.module.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { postData } from '../../utils/fetchData'
import { setCookie, parseCookies } from 'nookies'
import { useNotify } from '../../contexts/NotifyContext';

export default function Login({ login, setLogin }) {
	const { notifyRegistred, notifyLoginPromise, notifyLoginSuccess, notifyLoginError } = useNotify()
	const { register, handleSubmit } = useForm()
	const [msg, setMsg] = useState("Endereço email ou senha incorretos.")



	useEffect(() => {
		if (login === "registred") {
			setLogin(true)
			notifyRegistred()
		}
	}, [login])


	const initialState = { email: '', password: '' }
	const [userData, setUserData] = useState(initialState)
	const { email, password } = userData

	const [btn, setBtn] = useState(true)

	const handleChangeInput = e => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
	}

	async function handler(data) {
		setBtn(false)
		notifyLoginPromise()
		const res = await postData('auth/login', userData)
		if (res.err === "This user does not exist." || res.err === "Incorrect password.") return notifyLoginError({ msg: "Endereço de email ou senha incorretos." })
		setCookie(null, 'refreshToken', res.refresh_token, {
			maxAge: 86400 * 7,
			path: '/api/auth/accessToken',
		})
		localStorage.setItem('firstLogin', true)
		if (res.msg === "Login Success!") return notifyLoginSuccess({ msg: "Logado com sucesso!" })
	}

	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setLogin(false)} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				<form className={style.form} method="post" onSubmit={handleSubmit(handler)}>
					<label className={`${style.label} ${style.labelNormal}`}>
						<MdEmail className={`${style.icon} ${style.iconNormal}`} />
						<input {...register('email')} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="email" name="email" value={email} placeholder='Email' autoComplete="false" />
					</label>
					<label className={`${style.label} ${style.labelNormal}`}>
						<RiLockFill className={`${style.icon} ${style.iconNormal}`} />
						<input {...register('password')} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="password" name="password" value={password} placeholder='Senha' autoComplete="false" />
					</label>
					<div className={style.containerRecover}>
						<button type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
					</div>
					{btn ?
						<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>iniciar sessão</button>
						: <button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>iniciar sessão</button>}
				</form>
			</div>
		</>
	)
}