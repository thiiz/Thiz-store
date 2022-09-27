import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { useState } from 'react'
import style from './login.module.css'
import { useSession} from 'next-auth/react'
import { useEffect } from 'react'


export default function Login({ setLogin, setAccount }) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const session = useSession()
	useEffect(() => {
		setAccount(session)
	}, [session])

	const handle = (e) => {
		e.preventDefault();
		console.log({ email, password });
	}
	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setLogin(false)} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				<form className={style.form} method="post" onSubmit={handle}>
					<label className={style.label}>
						<MdEmail className={style.icon} />
						<input value={email} onChange={(e) => setEmail(e.target.value)} className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" />
					</label>
					<label className={style.label}>
						<RiLockFill className={style.icon} />
						<input value={password} onChange={(e) => setPassword(e.target.value)} className={style.input} type="password" name="password" placeholder='Senha' autoComplete="false" />
					</label>
					<div className={style.containerRecover}>
						<button type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
					</div>
					<button type='submit' className={style.btn}>iniciar sessão</button>
				</form>
			</div>
		</>
	)
}