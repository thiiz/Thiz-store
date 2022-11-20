import style from './HeaderLinks.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { memo } from 'react'
import { useDesktopSize, useMobileSize } from '../../lib/useAnimate'
import { useIsSmall } from '../../lib/MediaQuery'
import { useScrollDirection } from '../../lib/useScrollDirection'

function HeaderLinks() {
	const desktopVariant = useDesktopSize()
	const small = useIsSmall()
	const scrollDirection = useScrollDirection()
	const mobileVariant = useMobileSize()
	return (
		<ul className={style.NavMenuList}>
			<li><Link href="/" as=''><motion.a initial={"normal_Font"} animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>início</motion.a></Link></li>
			<li><Link href='/produtos'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>produtos</motion.a></Link></li>
			<li><Link href='/sobre'><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>sobre</motion.a></Link></li>
			<li><Link href="/contato"><motion.a animate={!small ? scrollDirection === "down" ? "small_Font" : "normal_Font" : "normal_Font"} variants={!small ? desktopVariant : mobileVariant}>contato</motion.a></Link></li>
		</ul>
	)
}
export default memo(HeaderLinks)