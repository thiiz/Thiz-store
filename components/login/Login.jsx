import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import style from './login.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { getData, postData } from '../../utils/fetchData'
import { setCookie } from 'nookies'
import { useNotify } from '../../contexts/NotifyContext';
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/router'
import ShowPass from '../showpass/ShowPass'

export default function Login({ login, setLogin, setToggleLoginMenu }) {
	const { query, push } = useRouter()
	const { setAuth } = useAuth()
	const [showPass, setShowPass] = useState(false)
	const { notifyLoginPromise, notifyLoginSuccess, notifyLoginError, dismiss } = useNotify()
	const { register, handleSubmit, setValue } = useForm()

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
		if (res.err) return notifyLoginError({ msg: "Endereço de email ou senha incorretos." }, setValue("password", 'aaaaaaaa'), setBtn(false))
		setCookie(null, 'refreshtoken', res.refresh_token, {
			maxAge: 86400 * 7, // 7 days
			path: '/api/auth/accessToken',
		})
		localStorage.setItem('firstLogin', true)
		dismiss({ id: "registred" })
		if (query.redirect) {
			push(`/${query.redirect}`)
		}
		getData('auth/accessToken').then(res => {
			setAuth({ token: res.access_token, user: res.user })
		})
		if (res.msg === "Login Success!") return notifyLoginSuccess({ msg: "Logado com sucesso!" }), setToggleLoginMenu(false)
	}

	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setLogin(false)} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				<form className={style.form} method="post" onSubmit={handleSubmit(handler)}>

					<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
						<MdEmail className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
						<input {...register('email', {
							required: true
						})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type="email" name="email" value={email} placeholder='Email' autoComplete="false" required />
					</label>
					<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
						<input {...register('password', {
							required: true
						})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={style.input} type={showPass ? "text" : "password"} name="password" value={password} placeholder='Senha' autoComplete="false" required />
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
					</label>
					<div className={style.containerCheckBoxAndRecover}>
						<label className={style.containerRemember}>
							<input type="checkbox" />
							<span className={style.labelRemeber}>Mantenha-me conectado</span>
						</label>
						<div className={style.containerRecover}>
							<button type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
						</div>
					</div>
					<span style={{ alignSelf: "center" }} className={style.labelTerms}>Ao fazer login você concorda com a nossa <a className={style.link} href="#">Política de Privacidade</a> e os <a className={style.link} href="#">Termos de uso</a>.</span>
					{btn ?
						<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>iniciar sessão</button>
						: <button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>iniciar sessão</button>}
				</form>
			</div>
		</>
	)
}