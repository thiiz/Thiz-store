import style from './LoginModal.module.css'
import { motion } from "framer-motion"
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import { useNotify } from '../../contexts/NotifyContext'
import { useState } from 'react'
export default function ({ toggleUserModal, scrollDirection }) {
	const router = useRouter()
	const { notifySuccess } = useNotify()
	const { setAuth } = useAuth()
	const dropdownVariant = {
		open: { opacity: 1, height: "4.738rem", padding: ".5rem 1rem .5rem 1rem" },
		closed: { opacity: 0, height: 0, padding: 0 },
	}
	const handleLogout = () => {
		if (router.pathname === "/perfil" || router.pathname === "/pagamento") {
			router.push('/')
		}
		setAuth({})
		destroyCookie(undefined, 'refreshtoken', { path: 'api/auth/accessToken' })
		localStorage.removeItem('firstLogin')
		return notifySuccess({ msg: "Login encerrado!" })
	}

	return (
		<motion.div className={`${style.container} ${scrollDirection !== "down" ? style.containerNormal : style.containerSmall}`} animate={toggleUserModal ? "open" : "closed"} variants={dropdownVariant}>
			<ul className={style.ul}>
				<li className={style.li}> <Link href="/perfil"><a className={style.myProfile}>Meu perfil</a></Link></li>
				<div className={style.division}></div>
				<li className={style.li}><button className={`${style.btn} ${style.btnLogout}`} onClick={handleLogout}>Sair</button></li>
			</ul>
		</motion.div >
	)
}