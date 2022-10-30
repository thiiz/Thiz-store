import style from "./Header.module.css"
import { motion } from 'framer-motion'
import { useIsSmall } from "../../lib/MediaQuery"
import { useScrollDirection } from "../../lib/useScrollDirection"
import { useDesktopSize } from '../../lib/useAnimate'
import { FaUserCircle } from "react-icons/fa"
import { useAuth } from "../../contexts/AuthContext"
import { useContextModalLogin } from "../../contexts/ModalLoginContext"
export default function ButtonLogin({scrollDirection}) {
	const { auth } = useAuth()
	const small = useIsSmall()
	const { setIsLoginModal } = useContextModalLogin()
	const desktopVariant = useDesktopSize()
	return (
		<motion.button onClick={() => setIsLoginModal(isLoginModal => !isLoginModal)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
			<FaUserCircle />
			{scrollDirection === "up" && <p className={style.loginText}>{auth.user.name}</p>}
		</motion.button>
	)
}