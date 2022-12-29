import style from './index.module.css'
import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { getData, postData } from '../../utils/fetchData'
import { setCookie } from 'nookies'
import { useNotify } from '../../contexts/NotifyContext';
import { useAuth } from '../../contexts/AuthContext'
import ShowPass from '../showpass/ShowPass'

export default function Login({ setSwitchModal, setToggleLoginModal }) {

	const { setAuth } = useAuth()
	const [showPass, setShowPass] = useState(false)
	const [rememberUser, setRememberUser] = useState(true)
	const { notifyPromise, notifyPromiseSuccess, notifyPromiseError } = useNotify()
	const { register, handleSubmit } = useForm()

	const initialState = { email: '', password: '' }
	const [userData, setUserData] = useState(initialState)
	const { email, password } = userData

	const [btn, setBtn] = useState(true)

	const handleChangeInput = e => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
		return
	}

	async function handler() {
		notifyPromise()
		const res = await postData('auth/login', userData)
		if (res.err) return loginErr()
		if (rememberUser) {
			setCookie(null, 'refreshtoken', res.refresh_token, {
				maxAge: 86400 * 7, // 7 days
				path: '/api/auth/accessToken',
			})
			localStorage.setItem('firstLogin', true)
		}
		getData('auth/accessToken').then(res => {
			setAuth({ token: res.access_token, user: res.user })
		})

		if (res.msg) return notifyPromiseSuccess({ msg: res.msg }), setToggleLoginModal(false)
	}

	const loginErr = () => {
		setBtn(false)
		notifyPromiseError({ msg: "Endereço de email ou senha incorretos." })
		setUserData({ ...userData, ["password"]: "" })
	}

	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setSwitchModal("register")} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				<form className={style.form} onSubmit={handleSubmit(handler)} >
					<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
						<MdEmail className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
						<input {...register('email', {
							required: true
						})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={`${style.input} ${email !== '' ? style.validInput : ''}`} type="email" name="email" value={email} autoComplete="false" required />
						<span className={style.placeHolder}>Email</span>
					</label>
					<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
						<input {...register('password', {
							required: true
						})} onFocus={() => !btn ? setBtn(true) : ''} onChange={handleChangeInput} className={`${style.input} ${password !== '' ? style.validInput : ''}`} type={showPass ? "text" : "password"} name="password" value={password} autoComplete="false" required />
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
					<span className={style.labelTerms}>Ao fazer login você concorda com a nossa <a className={style.link} href="#">Política de Privacidade</a> e os <a className={style.link} href="#">Termos de uso</a>.</span>
					{btn ?
						<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>iniciar sessão</button>
						: <button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>iniciar sessão</button>}
				</form>
			</div>
		</>
	)
}