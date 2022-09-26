import Link from 'next/link'
import Image from 'next/image'
import style from './Header.module.css'
import MenuLogin from '../../components/login/MenuLogin'
import { useState } from 'react'
import { CartMenu } from '../../components/cart/CartMenu'
import { FaShoppingCart } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { motion } from "framer-motion"
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useDesktopSize } from '../../lib/useAnimate'
import { useMobileSize } from '../../lib/useAnimate'
import { useIsSmall } from '../../lib/MediaQuery'
import { Fade as Hamburger } from 'hamburger-react'

function Header() {
	const { isOpen, setIsOpen } = useMenuCart()
	const [isOpenMobile, setIsOpenMobile] = useState(false)
	const [toggleLogin, setToggleLogin] = useState(false)
	const scrollDirection = useScrollDirection()
	const desktopVariant = useDesktopSize()
	const mobileVariant = useMobileSize()
	const small = useIsSmall()

	const CartVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "100%" },
	}

	const loginVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-2800px" },
	}
	const loginBackgroundVariant = {
		visible: {transition: {delay: 0.3},backgroundColor: "#000000c0"},
		hidden: {backgroundColor: "#00000000"}
	}

	return (
		<>
			<motion.div animate={toggleLogin ? "open" : "closed"} variants={loginVariant} className={style.containerLogin} transition={{ ease: "easeOut", duration: 0.25}}>
				<motion.div className={style.backgroundLogin} animate={toggleLogin ? "visible" : "hidden" } variants={loginBackgroundVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
					<MenuLogin toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
				</motion.div>
			</motion.div>
			<motion.header className={style.header} animate={!small ? scrollDirection === "down" ? "small" : "normal" : isOpenMobile ? "normal" : "small"} variants={!small ? desktopVariant : mobileVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
				<div className={style.taggleMenuMobile}>
					<motion.div animate={!small ? scrollDirection === "down" ? "small_Logo" : "normal_Logo" : "normal_Logo"} variants={small ? mobileVariant : desktopVariant}>
						<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
					</motion.div>

					{small ?
						<div className={!small ? style.containerBtn : style.containerBtnMobile}>
							<section className={style.btnInfoContainer}>
								<button className={`${style.btn} ${style.btnInfo}`} type='button'><MdHeadsetMic /></button>
								<button onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'>
									<FaShoppingCart />
									<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>0</div>
								</button>
							</section>
						</div>
						: ''}
					{small ? <div className={style.menuHamburguer}><Hamburger toggled={isOpenMobile} toggle={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)} distance="lg" size={34} easing="ease-in" style="bottom: 2px;" /></div> : ''}
				</div>

				<motion.nav className={style.menuBtn} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant}>
					<ul className={style.NavMenuList}>
						<li><Link href="/"><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>início</motion.a></Link></li>
						<li><Link href='/products'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>produtos</motion.a></Link></li>
						<li><Link href='/about'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>sobre</motion.a></Link></li>
						<li><Link href="/contact"><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>contato</motion.a></Link></li>
					</ul>
				</motion.nav>

				{small ?
					<motion.div animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant} transition={{ ease: "easeIn", duration: 0.4 }}>
						<button onClick={() => setToggleLogin(toggleLogin => !toggleLogin)} className={`${style.btn} ${style.btnLogin} ${!small ? scrollDirection === "down" ? style.btnLoginSmall : style.btnLoginNormal : ''}`} type='button'>LOGIN</button>
					</motion.div>
					: ''}

				<motion.div className={!small ? style.containerBtn : style.containerBtnMobile} animate={isOpenMobile ? "open_Menu" : "closed_Menu"} variants={mobileVariant} transition={{ ease: "easeOut", duration: 0.4 }}>
					{small ? '' :
						<section className={style.btnInfoContainer}>
							<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} className={`${style.btn} ${style.btnInfo}`} type='button'><MdHeadsetMic /></motion.button>
							<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'>
								<FaShoppingCart />
								<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>0</div>
							</motion.button>
							<div className={style.btnSpace}>
								<button onClick={() => setToggleLogin(toggleLogin => !toggleLogin)} className={`${style.btn} ${style.btnLogin} ${!small ? scrollDirection === "down" ? style.btnLoginSmall : style.btnLoginNormal : ''}`} type='button'>LOGIN</button>
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
			</motion.nav>
		</>
	)
}
export default Header