import Link from 'next/link'
import Image from 'next/image'
import style from './Header.module.css'
import MenuLogin from '../../components/login/MenuLogin'
import { useState, useRef, useEffect } from 'react'
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
import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock';
import { useRouter } from 'next/router'

function Header() {
	const popupLogin = useRef(null)
	const { cart } = useCart()
	const { auth } = useAuth()
	const { toggleLoginMenu, setToggleLoginMenu } = useLoginMenu()

	const router = useRouter()

	const [isOpenMobile, setIsOpenMobile] = useState(false)
	const [login, setLogin] = useState(true)
	const { isOpen, setIsOpen } = useMenuCart()
	const scrollDirection = useScrollDirection()
	const desktopVariant = useDesktopSize()
	const mobileVariant = useMobileSize()
	const small = useIsSmall()

	useEffect(() => {
		if (toggleLoginMenu || isOpen) {
			popupLogin.current && disableBodyScroll(popupLogin.current)
		} else {
			popupLogin.current && enableBodyScroll(popupLogin.current)
		}
	}, [toggleLoginMenu, isOpen])

	const CartVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 1, x: "400%" },
	}

	const loginVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-400%" },
	}
	const backgroundVariant = {
		visible: { transition: { delay: 0.3 }, backgroundColor: "#000000c0" },
		hidden: { backgroundColor: "#00000000" }
	}

	return (
		<>
			{Object.keys(auth).length === 0 ?
				<motion.div ref={popupLogin} animate={toggleLoginMenu ? "open" : "closed"} variants={loginVariant} className={style.containerLogin} transition={{ ease: "easeOut", duration: 0.25 }}>
					<motion.div className={style.background} animate={toggleLoginMenu ? "visible" : "hidden"} variants={backgroundVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
						<div onClick={() => setToggleLoginMenu(false)} className={style.focusOut}></div>
						<MenuLogin setToggleLoginMenu={setToggleLoginMenu} login={login} setLogin={setLogin} />
					</motion.div>
				</motion.div> : ''}
			<motion.header className={style.header} animate={!small ? scrollDirection === "down" ? "small" : "normal" : isOpenMobile ? "normal" : "small"} variants={!small ? desktopVariant : mobileVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
				<div className={style.taggleMenuMobile}>
					<motion.div animate={!small ? scrollDirection === "down" ? "small_Logo" : "normal_Logo" : "normal_Logo"} variants={small ? mobileVariant : desktopVariant}>
						<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
					</motion.div>

					{small ?
						<div className={!small ? style.containerBtn : style.containerBtnMobile}>
							<section className={style.btnInfoContainer}>
								<button className={`${style.btn} ${style.btnInfo}`} type='button'>
									<MdHeadsetMic />
								</button>
								<button onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'>
									<FaShoppingCart />
									<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{Object.keys(cart).length}</div>
								</button>
								<div className={style.userContainer}>
									{Object.keys(auth).length === 0 ?
										<button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
											<FaUserCircle className={style.avatar} />
										</button>
										:
										<>
											<Link href="/profile">
												<a className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${style.NavMenuList}`} type='button'>
													<FaUserCircle />
												</a>
											</Link>
											{isOpenMobile ? <p className={style.loginText}>{auth.user.name}</p> : ''}
										</>
									}
								</div>
							</section>
						</div>
						: ''}
					{small ? <div className={style.menuHamburguer}><Hamburger toggled={isOpenMobile} toggle={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)} distance="lg" size={34} easing="ease-in" style="bottom: 2px;" /></div> : ''}
				</div>

				<motion.nav className={style.menuBtn} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant}>
					<ul className={style.NavMenuList}>
						<li><Link href="/" as=''><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>início</motion.a></Link></li>
						<li><Link href='/products'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>produtos</motion.a></Link></li>
						<li><Link href='/about'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>sobre</motion.a></Link></li>
						<li><Link href="/contact"><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>contato</motion.a></Link></li>
					</ul>
				</motion.nav>

				<motion.div className={!small ? style.containerBtn : style.containerBtnMobile} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant} transition={{ ease: "easeOut", duration: 0.4 }}>
					{small ? '' :
						<section className={style.btnInfoContainer}>
							<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} className={`${style.btn} ${style.btnInfo}`} type='button'>
								<MdHeadsetMic />
							</motion.button>
							<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'>
								<FaShoppingCart />
								<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{Object.keys(cart).length}</div>
							</motion.button>
							<div className={style.userContainer}>
								{Object.keys(auth).length === 0 ?
									<motion.button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
										<FaUserCircle />
									</motion.button> :
									<>
										<Link href="/profile">
											<motion.a animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${style.NavMenuList}`} type='button'>
												<FaUserCircle />
											</motion.a>
										</Link>
										{scrollDirection !== "down" ? <p className={style.loginText}>{auth.user.name}</p> : ''}
									</>
								}
							</div>
						</section>}
				</motion.div>
			</motion.header>
			<motion.nav
				animate={isOpen ? "open" : "closed"}
				variants={CartVariant}
				className={style.cart}
			>
				<CartMenu />
				<motion.div onClick={() => setIsOpen(false)} className={style.backdrop} animate={isOpen ? "visible" : "hidden"} variants={backgroundVariant} transition={{ ease: "easeOut", duration: 0.1 }}></motion.div>
			</motion.nav>
		</>
	)
}
export default Header