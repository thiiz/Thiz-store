import style from './Header.module.css'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function HeaderDesktop({ desktopVariant, small, scrollDirection, setToggleLoginMenu, setOpenCart, auth, cart }) {
	return (
		<section className={style.btnInfoContainer}>
			<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} className={`${style.btn} ${style.btnInfo}`} type='button'>
				<MdHeadsetMic />
			</motion.button>
			<motion.button animate={!small ? scrollDirection === "down" ? "small_Menu" : "normal_Menu" : ''} variants={desktopVariant} onClick={() => setOpenCart(openCart => !openCart)} className={`${style.btn} ${style.btnInfo}`} type='button'>
				<FaShoppingCart />
				<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{Object.keys(cart).length}</div>
			</motion.button>
			<div className={style.userContainer}>
				{Object.keys(auth).length === 0 ?
					<motion.button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btnInfo} ${style.btnLogin}`} type='button'>
						<FaUserCircle />
					</motion.button> :
					<>
						<Link href="/perfil">
							<motion.a animate={!small ? scrollDirection === "down" ? "small_User" : "normal_User" : ""} variants={desktopVariant} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
								<FaUserCircle />
							</motion.a>
						</Link>
						{scrollDirection !== "down" ? <p className={style.loginText}>{auth.user.name}</p> : ''}
					</>
				}
			</div>
		</section>
	)
}