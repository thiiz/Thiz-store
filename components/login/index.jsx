import style from './index.module.css'
import { GrClose } from 'react-icons/gr'
import { MdKeyboardBackspace } from 'react-icons/md'
import Login from './Login'
import Register from './Register'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useToggleLoginModal } from '../../contexts/LoginModalContext'
import { useBackgroundVariant } from '../../lib/useBackgroundVariant'
import { useAuth } from '../../contexts/AuthContext'
import ForgotPass from './forgot-pass/ForgotPass'
import InputCode from './forgot-pass/InputCode'
import ChangePass from './forgot-pass/ChangePass'

export default function ModalLogin() {
	const { pathname, query, push } = useRouter()
	const { toggleLoginModal, setToggleLoginModal } = useToggleLoginModal()
	const [switchModal, setSwitchModal] = useState("login")
	const [recoverData, setRecoverData] = useState({ email: '', code: '' })
	const backgroundVariant = useBackgroundVariant()
	const { auth } = useAuth()
	
	useEffect(() => {
		if (query.redirect)
			return window.history.replaceState(null, '', '/')
	}, [query]);

	const loginVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-400%" },
	}
	const styleContainer = () => {
		if (switchModal === "login") return style.containerLogin
		if (switchModal === "register") return style.containerRegister
		if (switchModal === "ForgotPass") return style.containerForgotPass
		if (switchModal === "verifyRecoverCode") return style.containerVerifyRecoverCode
		if (switchModal === "changePass") return style.changePass
		return ''
	}


	const Content = () => {
		if (switchModal === "login") return <Login setSwitchModal={setSwitchModal} setToggleLoginModal={setToggleLoginModal} />
		if (switchModal === "register") return <Register setSwitchModal={setSwitchModal} />
		if (switchModal === "ForgotPass") return <ForgotPass setSwitchModal={setSwitchModal} recoverData={recoverData} setRecoverData={setRecoverData} />
		if (switchModal === "verifyRecoverCode") return <InputCode setSwitchModal={setSwitchModal} recoverData={recoverData} setRecoverData={setRecoverData} />
		if (switchModal === "changePass") return <ChangePass setSwitchModal={setSwitchModal} recoverData={recoverData} />
		return ''
	}

	return (
		<>
			{Object.keys(auth).length === 0 &&
				<motion.div
					animate={toggleLoginModal ? "open" : "closed"}
					variants={loginVariant} style={toggleLoginModal ? { zIndex: 16 } : ''}
					className={style.container}
					transition={{ ease: "easeOut", duration: 0.25 }}>
					<motion.div className={style.background} animate={toggleLoginModal ? "visible" : "hidden"} variants={backgroundVariant} transition={{ ease: "easeOut", duration: 0.3 }}>

						{pathname !== "/pagamento" && <div onClick={() => setToggleLoginModal(false)} className={style.focusOut}></div>}

						<div className={`${style.containerMenu} ${styleContainer()}`}>
							{pathname === "/pagamento" ?
								<button
									onClick={() => push('/') && setToggleLoginModal(false)}
									className={`${style.returnLogin} ${style.topBtn} `}
								>
									<MdKeyboardBackspace />
								</button>
								:
								<button onClick={() => setToggleLoginModal(false)} className={`${style.closeLogin} ${style.topBtn} `}><GrClose /></button>
							}
							<Content />
						</div >
					</motion.div>
				</motion.div >}
		</>
	)
}
