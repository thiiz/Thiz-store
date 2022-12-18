import style from './login.module.css'
import { GrClose } from 'react-icons/gr'
import { MdKeyboardBackspace } from 'react-icons/md'
import Login from './Login'
import Register from './Register'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useBackgroundVariant } from '../../lib/useBackgroundVariant'
import { useAuth } from '../../contexts/AuthContext'

function MenuLogin() {
	const { pathname, push } = useRouter()
	const { toggleLoginMenu, setToggleLoginMenu } = useLoginMenu()
	const [login, setLogin] = useState("login")
	const backgroundVariant = useBackgroundVariant()
	const { auth } = useAuth()

	const loginVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-400%" },
	}

	return (
		<>
			{Object.keys(auth).length === 0 &&
				<motion.div animate={toggleLoginMenu ? "open" : "closed"} variants={loginVariant} style={toggleLoginMenu ? { zIndex: 16 } : ''} className={style.container} transition={{ ease: "easeOut", duration: 0.25 }}>
					<motion.div className={style.background} animate={toggleLoginMenu ? "visible" : "hidden"} variants={backgroundVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
						{pathname !== "/pagamento" && <div onClick={() => setToggleLoginMenu(false)} className={style.focusOut}></div>}
						<div className={`${style.containerMenu} ${login === "login" ? style.containerLogin : style.containerRegister}`}>
							{pathname === "/pagamento" ? <button onClick={() => push('/') && setToggleLoginMenu(false)} className={`${style.returnLogin} ${style.topBtn}`}><MdKeyboardBackspace /></button>
								:
								<button onClick={() => setToggleLoginMenu(false)} className={`${style.closeLogin} ${style.topBtn}`}><GrClose /></button>
							}
							{
								login === "login"
									? <Login setLogin={setLogin} setToggleLoginMenu={setToggleLoginMenu} />
									: <Register setLogin={setLogin} />
							}
						</div >
					</motion.div>
				</motion.div>}
		</>
	)
}
export default MenuLogin