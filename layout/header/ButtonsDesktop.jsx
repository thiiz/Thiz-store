import style from './Header.module.css'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { motion } from 'framer-motion'
import LoginModal from './LoginModal'
import { useContextModalLogin } from '../../contexts/ModalLoginContext'
import { useEffect, useRef } from 'react'
import { useDesktopSize } from '../../lib/useAnimate'
import { useIsSmall } from '../../lib/MediaQuery'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useAuth } from '../../contexts/AuthContext'
import ButtonCart from './ButtonCart'

export default function ButtonsDesktop() {
	const { isLoginModal, setIsLoginModal } = useContextModalLogin()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth } = useAuth()
	const refLogin = useRef();
	const desktopVariant = useDesktopSize()
	const small = useIsSmall()
	const scrollDirection = useScrollDirection()
	useEffect(() => {
		function handleClickOutside(event) {
			if (!isLoginModal) {
				return;
			}
			if (
				event.target &&
				refLogin.current &&
				refLogin.current.contains(event.target)
			) {
				return;
			}
			// if we are outside
			setIsLoginModal(false);
		};
		// anytime user clics anywhere on the dom, that click event will bubble up into our body element
		// without { capture: true } it might not work
		document.addEventListener("click", handleClickOutside, { capture: true });
		return () => {
			document.removeEventListener("click", handleClickOutside, { capture: true });
		};
	}, [isLoginModal])
	return (
		<section className={style.btnInfoContainer}>
			<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} className={`${style.btn} ${style.btnInfo}`} type='button'>
				<MdHeadsetMic />
			</motion.button>
			<ButtonCart />
			<div ref={refLogin} className={style.userContainer}>
				{Object.keys(auth).length === 0 ?
					<motion.button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
						<FaUserCircle />
					</motion.button>
					:
					<motion.button onClick={() => setIsLoginModal(isLoginModal => !isLoginModal)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
						<FaUserCircle />
						{scrollDirection !== "down" && <p className={style.loginText}>{auth.user.name}</p>}
					</motion.button>}
				{isLoginModal &&
					<div className={style.containerLoginModal}>
						<LoginModal isLoginModal={isLoginModal} scrollDirection={scrollDirection} />
					</div>
				}
			</div>
		</section >
	)
}