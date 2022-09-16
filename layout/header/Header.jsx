import Link from 'next/link'
import Image from 'next/image'
import style from './Header.module.css'
import { useState, useEffect, useMemo } from 'react'
import { CartMenu } from '../../components/cart/CartMenu'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdHeadsetMic } from 'react-icons/md'
import { motion } from "framer-motion"
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useDesktopSize } from '../../lib/useAnimate'
import { useMobileSize } from '../../lib/useAnimate'
import { useIsMedium, useIsSmall } from '../../lib/MediaQuery'


function Header() {
	const medium = useIsMedium()
	const small = useIsSmall()
	const { isOpen, setIsOpen } = useMenuCart()
	const [isOpenMobile, setIsOpenMobile] = useState(false)
	const [isMobile, setIsMobile] = useState(small);
	const scrollDirection = useScrollDirection()
	const desktopVariant = useDesktopSize()
	const MobileVariant = useMobileSize()


	const cartVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "100%" },
	}


	useEffect(() => {
		setIsMobile(medium)
	}, [medium])

	return (
		<>
			<motion.header className={style.header} animate={!small ? scrollDirection === "down" ? "small" : "normal" : isOpenMobile ? "normal" : "small"} variants={desktopVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
				{small ? <button onClick={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)}>X</button> : ''}
				<motion.div animate={!small ? scrollDirection === "down" ? "small_Logo" : "normal_Logo" : "normal_Logo"} variants={desktopVariant}>
					<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
				</motion.div>
				<div className={style.menuBtn}>
					<ul >
						<li><Link href="/"><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : ''} variants={!isMobile ? desktopVariant : ''}>início</motion.a></Link></li>
						<li><Link href='/products'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : ''} variants={!isMobile ? desktopVariant : ''}>produtos</motion.a></Link></li>
						<li><Link href='/about'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : ''} variants={!isMobile ? desktopVariant : ''}>sobre</motion.a></Link></li>
						<li><Link href="/contact"><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : ''} variants={!isMobile ? desktopVariant : ''}>contato</motion.a></Link></li>
					</ul>
				</div>
				<div className={!isMobile ? style.containerBtn : style.containerBtnMobile}>
					<section className={style.btnInfoContainer}>
						<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} className={`${style.btn} ${style.btnInfo}`} type='button'><MdHeadsetMic /></motion.button>
						<div>
							<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'>
								<FaShoppingCart />
								<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>0</div>
							</motion.button>
						</div>
						<div className={style.btnSpace}>
							<button className={`${style.btn} ${style.btnLogin} ${!small ? scrollDirection === "down" ? style.btnLoginSmall : style.btnLoginNormal : ''}`} type='button'>LOGIN</button>
						</div>
					</section>
				</div>
			</motion.header>
			<motion.nav
				animate={isOpen ? "open" : "closed"}
				variants={cartVariant}
				className={style.cart}
			>
				<button onClick={() => setIsOpen(isOpen => !isOpen)} className={style.closeBtn}><AiOutlineCloseCircle /><p className={style.closeText}>Fechar</p></button>
				<CartMenu />
			</motion.nav>
		</>
	)
}
export default Header