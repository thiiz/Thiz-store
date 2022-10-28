import style from './LoginModal.module.css'
import { motion } from "framer-motion"
import { useEffect } from 'react'
export default function LoginModal({ isLoginModal, setIsLoginModal, scrollDirection }) {
	const dropdownVariant = {
		open: { opacity: 1, height: "119px" },
		closed: { opacity: 0, height: 0 },
	}
	
	useEffect(() => {
		if (isLoginModal) {
			setIsLoginModal = () => false
		}
	}, [scrollDirection])
	return (
		<motion.div className={style.container} animate={isLoginModal ? "open" : "closed"} variants={dropdownVariant}>

		</motion.div>
	)
}