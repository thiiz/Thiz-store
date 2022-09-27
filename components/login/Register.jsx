import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { ImUser } from 'react-icons/im'
import style from './login.module.css'
export default function Register({setLogin}) {
	const handler = (e) => {
		e.preventDefault();
		console.log('The Register was clicked.');
	}
	return (
		<>
			<div className={style.loginTitle}>Criar conta</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Já tem uma conta? <button onClick={() => setLogin(true)} className={style.register}><strong>Fazer login.</strong></button></div>
				<form className={style.form}>
					<label className={style.label}>
						<ImUser className={style.icon} />
						<input className={style.input} type="text" name="user" placeholder='Usúario' autoComplete="false" />
					</label>
					<label className={style.label}>
						<MdEmail className={style.icon} />
						<input className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" />
					</label>
					<label className={style.label}>
						<RiLockFill className={style.icon} />
						<input className={style.input} type="password" name="password" placeholder='Senha' autoComplete="false" />
					</label>
					<label className={style.label}>
						<RiLockFill className={style.icon} />
						<input className={style.input} type="password" name="Confirm-password" placeholder='Confirmar senha' autoComplete="false" />
					</label>
					<div id="politica-termos">
                        <input type="checkbox" id={style.termos} name="termos" value="ok" required/>
                        <label className={style.labelTermos}>Ao se cadastrar você concorda com a nossa <a className={style.link} href="#">Política de Privacidade</a> e os <a className={style.link} href="#">Termos de uso</a>.</label>
                    </div>
					<button type='submit' onClick={e => handler(e)} className={style.btn} disabled={false}>criar conta</button>
				</form>
			</div>
		</>
	)
}