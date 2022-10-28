import style from './HeaderLinks.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeaderLinks({ small, scrollDirection, desktopVariant, mobileVariant }) {
	return (
		<ul className={style.NavMenuList}>
			<li><Link href="/" as=''><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>início</motion.a></Link></li>
			<li><Link href='/produtos'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>produtos</motion.a></Link></li>
			<li><Link href='/sobre'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>sobre</motion.a></Link></li>
			<li><Link href="/contato"><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>contato</motion.a></Link></li>
		</ul>
	)
}