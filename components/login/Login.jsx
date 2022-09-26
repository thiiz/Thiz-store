import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import style from './login.module.css'
export default function Login({ setLogin }) {
	const handler = (e) => {
		e.preventDefault();
		console.log('The Login was clicked.');
	}
	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setLogin(false)} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				<form className={style.form}>
					<label className={style.label}>
						<MdEmail className={style.icon} />
						<input className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" />
					</label>
					<label className={style.label}>
						<RiLockFill className={style.icon} />
						<input className={style.input} type="password" name="password" placeholder='Senha' autoComplete="false" />
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
		</>
	)
}