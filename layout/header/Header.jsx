import Link from 'next/link'
import Image from 'next/image'
import style from './Header.module.css'
import { useState, useEffect } from 'react'
import { CartMenu } from '../../components/cart/CartMenu'
import { FaShoppingCart } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion } from "framer-motion"
import { useMenuCart } from '../../contexts/OpenCartMenuContext'


function Header() {
	const { isOpen, setIsOpen } = useMenuCart()
	const [small, setSmall] = useState(false);
	const [logo, setLogo] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				setSmall(window.pageYOffset > 200)
			);
		}
		return () => {
			window.removeEventListener('scroll');
		};
	}, [])
	const cartVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "100%" },
	}
	const headerVariant = {
		small: { height: '55px' },
		normal: { height: "80px" },

		small_Logo: { width: '50px' },
		normal_Logo: { width: '72px' }
	}
	return (
		<>
			<motion.header className={style.header} animate={small ? "small" : "normal"} variants={headerVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
				<motion.div animate={small & !logo ? "small_Logo" : "normal_Logo"} variants={headerVariant}>
					<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
				</motion.div>
				<div className={style.menuBtn}>
					<ul>
						<li><Link href="/"><a>início</a></Link></li>
						<li><Link href='/man'>masculino</Link></li>
						<li><Link href="/#filterProducts"><a>feminino</a></Link></li>
						<li><Link href='/about'>sobre</Link></li>
						<li><Link href="/contact"><a>contato</a></Link></li>
					</ul>
				</div>
				<div className={style.containerBtn}>
					<section className={style.btnInfoContainer}>
						<button className={`${style.btn} ${style.btnInfo}`} type='button'><MdHeadsetMic /></button>
						<div>
							<button onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'>
								<FaShoppingCart />
								<div className={style.countCartItems}>0</div>
							</button>
						</div>
						<section className={style.btnLoginSpace}>
							<button className={`${style.btn} ${style.btnLogin}`} type='button'>LOGIN</button>
						</section>
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