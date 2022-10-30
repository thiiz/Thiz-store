import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import style from './Header.module.css'
import { motion } from 'framer-motion'
import { useContextModalLogin } from '../../contexts/ModalLoginContext'
import LoginModal from './LoginModal'
import { useEffect, useRef } from 'react'
import { useMobileSize } from '../../lib/useAnimate'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useAuth } from '../../contexts/AuthContext'
import { useIsSmall } from '../../lib/MediaQuery'
import { useCart } from '../../contexts/CartContext'

export default function ButtonsMobile({ isOpenMobile }) {
	const { isLoginModal, setIsLoginModal } = useContextModalLogin()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth } = useAuth()
	const { cart } = useCart()
	const refLogin = useRef();
	const mobileVariant = useMobileSize()
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
		console.log("documento")
		return () => {
			document.removeEventListener("click", handleClickOutside, { capture: true });
		};
	}, [isLoginModal])
	return (
		<div className={!small ? style.containerBtn : style.containerBtnMobile}>
			<section className={style.btnInfoContainer}>
				<button className={`${style.btn} ${style.btnInfo}`} type='button'>
					<MdHeadsetMic />
				</button>
				<button onClick={() => setOpenCart(openCart => !openCart)} className={`${style.btn} ${style.btnInfo}`} type='button'>
					<FaShoppingCart />
					<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{Object.keys(cart).length}</div>
				</button>
				<div ref={refLogin} className={style.userContainer}>
					{Object.keys(auth).length === 0 ?
						<button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle className={style.avatar} />
						</button>
						:
						<motion.button onClick={() => setIsLoginModal(isLoginModal => !isLoginModal)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={mobileVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle />
							{isOpenMobile ? <p className={style.loginText}>{auth.user.name}</p> : ''}
						</motion.button>}
					{isLoginModal &&
						<div className={style.containerLoginModal}>
							<LoginModal isLoginModal={isLoginModal} scrollDirection={scrollDirection} />
						</div>
					}
				</div>
			</section>
		</div>
	)
}