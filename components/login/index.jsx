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
	const loginHeightVariant = {
		open: { height: "34.2rem", transition: { ease: "easeInOut", duration: .2, delay: .1 } },
		closed: { height: 0, transition: { duration: 0 } },
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
		if (switchModal === "login") return (
			<>
				<div className={style.loginTitle}><span>Iniciar sessão</span></div>
				<Login setSwitchModal={setSwitchModal} setToggleLoginModal={setToggleLoginModal} />
			</>
		)
		if (switchModal === "register") return (
			<>
				<div className={style.loginTitle}>Criar conta</div>
				<Register setSwitchModal={setSwitchModal} />
			</>
		)
		if (switchModal === "ForgotPass") return (
			<>
				<button style={{ transform: `translate(0, -7px)` }} onClick={() => setSwitchModal("login")} className={`${style.returnLogin} ${style.topBtn} `}>
					<MdKeyboardBackspace />
				</button>
				<ForgotPass setSwitchModal={setSwitchModal} recoverData={recoverData} setRecoverData={setRecoverData} />
			</>
		)
		if (switchModal === "verifyRecoverCode") return <InputCode setSwitchModal={setSwitchModal} recoverData={recoverData} setRecoverData={setRecoverData} />
		if (switchModal === "changePass") return (
			<>
				<button style={{ transform: `translate(0, -7px)` }} onClick={() => setSwitchModal("verifyRecoverCode")} className={`${style.returnLogin} ${style.topBtn} `}><MdKeyboardBackspace /></button>
				<div className={style.loginTitle}>Alterar senha</div>
				<ChangePass setSwitchModal={setSwitchModal} recoverData={recoverData} />
			</>
		)
		return ''
	}

	return (
		<>
			{Object.keys(auth).length === 0 &&
				<motion.div
					animate={toggleLoginModal ? "open" : "closed"}
					variants={loginVariant} style={toggleLoginModal ? { zIndex: 16 } : ''}
					transition={{ duration: 0 }}
					className={style.container}
					onKeyDown={(e) => e.key === "Escape" && setToggleLoginModal(false)}
				>
					<motion.div
						className="backdrop"
						animate={toggleLoginModal ? "visible" : "hidden"}
						variants={backgroundVariant}
						transition={{ delay: 2, ease: "backInOut" }}
						onClick={() => pathname !== "/pagamento" && setToggleLoginModal(false)}
					>
					</motion.div >
					<motion.div
						className={`${style.containerMenu} ${styleContainer()}`}
						animate={toggleLoginModal ? "open" : "closed"}
						variants={loginHeightVariant}

					>
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
					</motion.div>
				</motion.div >}
		</>
	)
}
