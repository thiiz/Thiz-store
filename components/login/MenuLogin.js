import style from './login.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
export default function MenuLogin() {
	const handler = (e) => {
		e.preventDefault();
		console.log('The link was clicked.');
	}
	return (
		<>
			<form className={style.form}>
				<label className={style.label}>
					<AiOutlineMail className={style.icon} />
					<input className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" />
				</label>
				<label className={style.label}>
					<RiLockPasswordLine className={style.icon} />
					<input className={style.input} type="password" name="current-password" placeholder='Senha' autoComplete="false" />
				</label>
				<button onClick={e => handler(e)} className={style.btn}>LOGIN</button>
			</form>
		</>
	)
}