import style from './HeaderLogo.module.css'
import { useIsSmall } from '../../lib/MediaQuery'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { motion } from 'framer-motion'
import { useDesktopSize, useMobileSize } from '../../lib/useAnimate'
import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'

function HeaderLogo() {
	const desktopVariant = useDesktopSize()
	const mobileVariant = useMobileSize()
	const small = useIsSmall()
	const scrollDirection = useScrollDirection()
	return (
		<motion.div animate={!small ? scrollDirection === "down" ? "small_Logo" : "normal_Logo" : "normal_Logo"} variants={small ? mobileVariant : desktopVariant}>
			<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
		</motion.div>

	)
}

export default memo(HeaderLogo)