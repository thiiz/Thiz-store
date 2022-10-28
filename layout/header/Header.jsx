import Link from 'next/link'
import Image from 'next/image'
import style from './Header.module.css'
import MenuLogin from '../../components/login/MenuLogin'
import { useState, useEffect } from 'react'
import { CartMenu } from '../../components/cart/CartMenu'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { motion } from "framer-motion"
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useDesktopSize } from '../../lib/useAnimate'
import { useMobileSize } from '../../lib/useAnimate'
import { useIsSmall } from '../../lib/MediaQuery'
import { Fade as Hamburger } from 'hamburger-react'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useRouter } from 'next/router'
import HeaderLinks from './HeaderLinks'
import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'
import {useBackgroundVariant} from '../../lib/useBackgroundVariant'

function Header() {
	const backgroundVariant = useBackgroundVariant()
	const { cart } = useCart()
	const { auth } = useAuth()
	const router = useRouter()
	const { toggleLoginMenu, setToggleLoginMenu } = useLoginMenu()
	const [isOpenMobile, setIsOpenMobile] = useState(false)
	const [isLoginModal, setIsLoginModal] = useState(false)
	const [login, setLogin] = useState(true)
	const { openCart, setOpenCart } = useMenuCart()
	const scrollDirection = useScrollDirection()
	const desktopVariant = useDesktopSize()
	const mobileVariant = useMobileSize()
	const small = useIsSmall()

	useEffect(() => {
		if (toggleLoginMenu || openCart || isLoginModal) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [toggleLoginMenu, openCart, isLoginModal]);

	const CartVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 1, x: "400%" },
	}

	const loginVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-400%" },
	}
	

	useEffect(() => {
		if (router.query.redirect) {
			window.history.replaceState(null, '', '/')
		}
	}, [toggleLoginMenu])

	return (
		<>
			{Object.keys(auth).length === 0 ?
				<motion.div animate={toggleLoginMenu ? "open" : "closed"} variants={loginVariant} className={style.containerLogin} transition={{ ease: "easeOut", duration: 0.25 }}>
					<motion.div className={style.background} animate={toggleLoginMenu ? "visible" : "hidden"} variants={backgroundVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
						{router.pathname === "/pagamento" ? '' : <div onClick={() => setToggleLoginMenu(false)} className={style.focusOut}></div>}
						<MenuLogin setToggleLoginMenu={setToggleLoginMenu} login={login} setLogin={setLogin} />
					</motion.div>
				</motion.div> : ''}
			<motion.header className={style.header} animate={!small ? scrollDirection === "down" ? "small" : "normal" : isOpenMobile ? "normal" : "small"} variants={!small ? desktopVariant : mobileVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
				<div className={style.taggleMenuMobile}>
					<motion.div animate={!small ? scrollDirection === "down" ? "small_Logo" : "normal_Logo" : "normal_Logo"} variants={small ? mobileVariant : desktopVariant}>
						<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
					</motion.div>

					{small ?
						<>
							<HeaderMobile isOpenMobile={isOpenMobile} small={small} scrollDirection={scrollDirection} setToggleLoginMenu={setToggleLoginMenu} setOpenCart={setOpenCart} cart={cart} auth={auth} isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />
							<div className={style.menuHamburguer}><Hamburger toggled={isOpenMobile} toggle={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)} distance="lg" size={34} easing="ease-in" style="bottom: 2px;" /></div>
						</>
						: ''}
				</div>
				<motion.nav className={style.menuBtn} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant}>
					<HeaderLinks small={small} scrollDirection={scrollDirection} desktopVariant={desktopVariant} mobileVariant={mobileVariant} />
				</motion.nav>
				<motion.div className={!small ? style.containerBtn : style.containerBtnMobile} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant} transition={{ ease: "easeOut", duration: 0.4 }}>
					{small ? '' :
						<HeaderDesktop backgroundVariant={backgroundVariant} desktopVariant={desktopVariant} small={small} scrollDirection={scrollDirection} setToggleLoginMenu={setToggleLoginMenu} setOpenCart={setOpenCart} cart={cart} auth={auth} isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />
					}
				</motion.div>
			</motion.header>
			<motion.nav
				animate={openCart ? "open" : "closed"}
				variants={CartVariant}
				className={style.cart}
			>
				<CartMenu />
				<motion.div onClick={() => setOpenCart(false)} className="backdrop" animate={openCart ? "visible" : "hidden"} variants={backgroundVariant} transition={{ ease: "easeOut", duration: 0.1 }}></motion.div>
			</motion.nav>
		</>
	)
}
export default Header