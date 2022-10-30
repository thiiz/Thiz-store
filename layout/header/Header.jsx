import style from './Header.module.css'
import ModalLogin from '../../components/login/MenuLogin'
import { useState, useEffect } from 'react'
import CartMenu from '../../components/cart/CartMenu'
import { motion } from "framer-motion"
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useDesktopSize } from '../../lib/useAnimate'
import { useMobileSize } from '../../lib/useAnimate'
import { useIsSmall } from '../../lib/MediaQuery'
import { Fade as Hamburger } from 'hamburger-react'
import { useAuth } from '../../contexts/AuthContext'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useRouter } from 'next/router'
import HeaderLinks from './HeaderLinks'
import ButtonsMobile from './ButtonsMobile'
import ButtonsDesktop from './ButtonsDesktop'
import { useBackgroundVariant } from '../../lib/useBackgroundVariant'
import { useContextModalLogin } from '../../contexts/ModalLoginContext'
import HeaderLogo from './HeaderLogo'

function Header() {
	const backgroundVariant = useBackgroundVariant()
	const { auth } = useAuth()
	const { isLoginModal, setIsLoginModal } = useContextModalLogin()
	const router = useRouter()
	const { toggleLoginMenu } = useLoginMenu()
	const [isOpenMobile, setIsOpenMobile] = useState(false)
	const { openCart, setOpenCart } = useMenuCart()
	const scrollDirection = useScrollDirection()
	const desktopVariant = useDesktopSize()
	const mobileVariant = useMobileSize()
	const small = useIsSmall()

	useEffect(() => {
		if (toggleLoginMenu || openCart) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [toggleLoginMenu, openCart]);

	const CartVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 1, x: "400%" },
	}


	useEffect(() => {
		if (router.query.redirect) {
			window.history.replaceState(null, '', '/')
		}
	}, [toggleLoginMenu])

	useEffect(() => {
		if (isLoginModal && router.pathname === "/perfil" || auth) return setIsLoginModal(false)
	}, [router.pathname, auth])

	return (
		<>
			<motion.header className={style.header} animate={!small ? scrollDirection === "down" ? "small" : "normal" : isOpenMobile ? "normal" : "small"} variants={!small ? desktopVariant : mobileVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
				<div className={style.taggleMenuMobile}>
					<HeaderLogo />
					{small ?
						<>
							<ButtonsMobile isOpenMobile={isOpenMobile} />
							<div className={style.menuHamburguer}><Hamburger toggled={isOpenMobile} toggle={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)} distance="lg" size={34} easing="ease-in" style="bottom: 2px;" /></div>
						</>
						: ''}
				</div>
				<motion.nav className={style.menuBtn} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant}>
					<HeaderLinks />
				</motion.nav>
				<motion.div className={!small ? style.containerBtn : style.containerBtnMobile} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant} transition={{ ease: "easeOut", duration: 0.4 }}>
					{!small &&
						<ButtonsDesktop />
					}
				</motion.div>
			</motion.header>
			<motion.nav
				animate={openCart ? "open" : "closed"}
				variants={CartVariant}
				className={style.cart}
				transition={{ ease: "easeOut", duration: 0.3 }}
			>
				<CartMenu />
				<motion.div onClick={() => setOpenCart(false)} className="backdrop" animate={openCart ? "visible" : "hidden"} variants={backgroundVariant} transition={{ ease: "easeOut", duration: 0.1 }}></motion.div>
			</motion.nav>
		</>
	)
}
export default Header