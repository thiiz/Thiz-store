import style from './login.module.css'
import { GrClose } from 'react-icons/gr'
import {MdKeyboardBackspace } from 'react-icons/md'
import Login from './Login'
import Register from './Register'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { useLoginMenu } from '../../contexts/LoginMenuContext'

function MenuLogin({ login, setLogin, }) {
	const { pathname, push } = useRouter()
	const { setToggleLoginMenu } = useLoginMenu()

	return (
		<div className={`${style.container} ${login ? style.containerLogin : style.containerRegister}`}>
			{pathname === "/pagamento" ? <button onClick={() => push('/') && setToggleLoginMenu(false)} className={`${style.returnLogin} ${style.topBtn}`}><MdKeyboardBackspace /></button>
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
export default memo(MenuLogin)