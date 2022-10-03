import style from './login.module.css'
import { GrClose } from 'react-icons/gr'
import Login from './Login'
import Register from './Register'

export default function MenuLogin({ login, setLogin, setToggleLoginMenu }) {
	
	return (

		<div className={`${style.container} ${login ? style.containerLogin : style.containerRegister}`}>
			<button onClick={() => setToggleLoginMenu(false)} className={style.closeLogin}><GrClose /></button>
			{login
				? <Login login={login} setLogin={setLogin} setToggleLoginMenu={setToggleLoginMenu} />
				: <Register setLogin={setLogin} />
			}
		</div>
	)
}