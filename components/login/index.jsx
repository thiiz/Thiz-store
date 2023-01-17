import { Container, ContainerModal, } from './styleIndex'
import { CloseButton } from './styles/styleHeaderBtns'
import { GrClose } from 'react-icons/gr'
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
		closed: { height: 0, transition: { ease: "easeInOut", duration: .2, delay: .1 } },
	}


	const Content = () => {
		if (switchModal === "login") return <Login setSwitchModal={setSwitchModal} setToggleLoginModal={setToggleLoginModal} />
		if (switchModal === "register") return <Register setSwitchModal={setSwitchModal} />
		if (switchModal === "forgotPass") return <ForgotPass setSwitchModal={setSwitchModal} recoverData={recoverData} setRecoverData={setRecoverData} />
		if (switchModal === "verifyRecoverCode") return <InputCode setSwitchModal={setSwitchModal} recoverData={recoverData} setRecoverData={setRecoverData} />
		if (switchModal === "changePass") return <ChangePass setSwitchModal={setSwitchModal} recoverData={recoverData} />
	}

	return (
		<>
			{Object.keys(auth).length === 0 &&
				<Container
					$toggleLoginModal={toggleLoginModal}
					animate={toggleLoginModal ? "open" : "closed"}
					variants={loginVariant}
					transition={{ duration: 0 }}
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
					<ContainerModal
						animate={toggleLoginModal ? "open" : "closed"}
						variants={loginHeightVariant}
						$switchModal={switchModal}
					>
						<CloseButton onClick={() => setToggleLoginModal(false)}>
							<GrClose />
						</CloseButton>
						<Content />
					</ContainerModal>
				</Container>
			}
		</>
	)
}
