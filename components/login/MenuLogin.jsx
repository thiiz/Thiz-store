import style from './login.module.css'
import { GrClose } from 'react-icons/gr'
import {MdKeyboardBackspace } from 'react-icons/md'
import Login from './Login'
import Register from './Register'
import { useRouter } from 'next/router'

export default function MenuLogin({ login, setLogin, setToggleLoginMenu }) {
	const { pathname, push } = useRouter()

	return (
		<div className={`${style.container} ${login ? style.containerLogin : style.containerRegister}`}>
			{pathname === "/checkout" ? <button onClick={() => push('/') && setToggleLoginMenu(false)} className={`${style.returnLogin} ${style.topBtn}`}><MdKeyboardBackspace /></button>
				:
				<button onClick={() => setToggleLoginMenu(false)} className={`${style.closeLogin} ${style.topBtn}`}><GrClose /></button>
			}
			{
				login
					? <Login login={login} setLogin={setLogin} setToggleLoginMenu={setToggleLoginMenu} />
					: <Register setLogin={setLogin} />
			}
		</div >
	)
}