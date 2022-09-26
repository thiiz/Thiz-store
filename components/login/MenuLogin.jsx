import style from './login.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { FcGoogle } from 'react-icons/fc'

export default function MenuLogin({ setToggleLogin }) {
	const handler = (e) => {
		e.preventDefault();
		console.log('The link was clicked.');
	}
	return (
		<div className={style.container}>
			<div className={style.loginTitle}>Bem-vindo(a)!</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button className={style.register}><strong>Cadastre-se aqui</strong></button></div>
				<button onClick={() => setToggleLogin(false)} className={style.closeLogin}><GrClose /></button>
				<form className={style.form}>
					<label className={style.label}>
						<AiOutlineMail className={style.icon} />
						<input className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" />
					</label>
					<label className={style.label}>
						<RiLockPasswordLine className={style.icon} />
						<input className={style.input} type="password" name="current-password" placeholder='Senha' autoComplete="false" />
					</label>
					<div className={style.containerRecover}>
						<button type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
					</div>
					<button type='submit' onClick={e => handler(e)} className={style.btn}>iniciar sessão</button>
				</form>
				<div className={style.containerGoogleLogin}>
					<button type="button" className={style.googleLogin}><FcGoogle className={style.googleIcon} /><span>Login via Google</span></button>
				</div>
			</div>
		</div>
	)
}