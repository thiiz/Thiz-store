import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import style from './login.module.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { postData } from '../../utils/fetchData'
import { setCookie } from 'nookies'
import { useNotify } from '../../contexts/NotifyContext';
import { useUser } from '../../contexts/GlobalState'

export default function Login({ login, setLogin, setToggleLogin }) {

	const { setData } = useUser()
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

	async function handler() {
		notifyLoginPromise()
		const res = await postData('auth/login', userData)
		if (res.err === "This user does not exist." || res.err === "Incorrect password.") return notifyLoginError({ msg: "Endereço de email ou senha incorretos." }, setBtn(false))
		setCookie(null, 'refreshtoken', res.refresh_token, {
			maxAge: 86400, // 24h
			path: '/api/auth/accessToken',
		})
		localStorage.setItem('firstLogin', true)
		if (res.msg === "Login Success!") return notifyLoginSuccess({ msg: "Logado com sucesso!" },  setData({token: res.refresh_token, user: res.user}), setToggleLogin(false))
	}

	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setLogin(false)} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				<form className={style.form} method="post" onSubmit={handleSubmit(handler)}>
					<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
						<MdEmail className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
						<input {...register('email')} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="email" name="email" value={email} placeholder='Email' autoComplete="false" required />
					</label>
					<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
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