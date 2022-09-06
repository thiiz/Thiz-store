import Link from 'next/link'
import Image from 'next/image'
import style from './Header.module.css'
import { useState, useEffect } from 'react'
import { CartMenu } from '../../components/cart/CartMenu'
import { FaShoppingCart } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"
import ClickAwayListener from '@mui/base/ClickAwayListener';


function Header() {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 60) {
				setScroll(true);
			} else setScroll(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, [])
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "100%" },
	}
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>		
			<ClickAwayListener onClickAway={() => setIsOpen(false)}>
				<div>
					<header className={style.header}>
						<div>
							<Link href="/"><a><Image loading='eager' className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
						</div>
						<div className={style.menuBtn}>
							<ul>
								<li><Link scroll={false} href="/"><a>início</a></Link></li>
								<li><Link scroll={false} href="/category"><a>categorias</a></Link></li>
								<li><Link scroll={false} href="/products"><a>produtos</a></Link></li>
								<li><Link scroll={false} href="/contact"><a>contato</a></Link></li>
							</ul>
						</div>
						<div className={style.containerBtn}>
							<section className={style.btnInfoContainer}>
								<button className={`${style.btn} ${style.btnInfo}`} type='button'><MdHeadsetMic /></button>
								<button onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'><FaShoppingCart /></button>
								<section className={style.btnLoginSpace}>
									<button className={`${style.btn} ${style.btnLogin}`} type='button'>LOGIN</button>
								</section>
							</section>
						</div>
					</header>
					<motion.nav
						animate={isOpen ? "open" : "closed"}
						variants={variants}
						className={`${style.cart} ${scroll && style.scrollTop}`}
					>
						<button onClick={() => setIsOpen(isOpen => !isOpen)} className={style.closeBtn}><AiOutlineCloseCircle /><p className={style.closeText}>Fechar</p></button>
						<CartMenu />
					</motion.nav>
				</div>
			</ClickAwayListener>
		</>

	)
}
export default Header