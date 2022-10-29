import style from './Header.module.css'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { motion } from 'framer-motion'
import LoginModal from './LoginModal'
import { useBackgroundVariant } from '../../lib/useBackgroundVariant'
import { useContextModalLogin } from '../../contexts/ModalLoginContext'
import { useEffect, useRef } from 'react'

export default function HeaderDesktop({ desktopVariant, small, scrollDirection, setToggleLoginMenu, setOpenCart, auth, cart }) {
	const { isLoginModal, setIsLoginModal } = useContextModalLogin()
	const refLogin = useRef();

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
		console.log("documento")
		return () => {
			document.removeEventListener("click", handleClickOutside, { capture: true });
		};
	}, [isLoginModal])
	return (
		<section className={style.btnInfoContainer}>
			<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} className={`${style.btn} ${style.btnInfo}`} type='button'>
				<MdHeadsetMic />
			</motion.button>
			<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} onClick={() => setOpenCart(openCart => !openCart)} className={`${style.btn} ${style.btnInfo}`} type='button'>
				<FaShoppingCart />
				<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{Object.keys(cart).length}</div>
			</motion.button>
			<div ref={refLogin} className={style.userContainer}>
				{Object.keys(auth).length === 0 ?
					<motion.button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
						<FaUserCircle />
					</motion.button> :
					<>
						<motion.button onClick={() => setIsLoginModal(isLoginModal => !isLoginModal)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle />
							{scrollDirection !== "down" ? <p className={style.loginText}>{auth.user.name}</p> : ''}

						</motion.button>
					</>
				}
				{isLoginModal &&
					<div className={style.containerLoginModal}>
						<LoginModal isLoginModal={isLoginModal} scrollDirection={scrollDirection} />
					</div>
				}
			</div>
		</section >
	)
}