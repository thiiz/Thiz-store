import style from './UserModal.module.css'
import { motion } from "framer-motion"
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import { useNotify } from '../../contexts/NotifyContext'
import { useContextUserModal } from '../../contexts/UserModalContext'
import { useScrollDirection } from '../../lib/useScrollDirection'

export default function UserModal() {
	const { pathname, push } = useRouter()
	const { toggleUserModal, setToggleUserModal } = useContextUserModal()
	const { setAuth } = useAuth()
	const { notifySuccess } = useNotify()
	const scrollDirection = useScrollDirection()


	const dropdownVariant = {
		open: { zIndex: "16", opacity: 1, height: "4.738rem", padding: ".5rem 1rem .5rem 1rem" },
		closed: { zIndex: -1, opacity: 0, height: 0, padding: 0 },
	}
	const handleLogout = () => {
		setToggleUserModal(false)
		if (pathname === "/perfil" || pathname === "/pagamento") {
			push('/')
		}
		setAuth({})
		destroyCookie(undefined, 'refreshtoken', { path: 'api/auth/accessToken' })
		localStorage.removeItem('firstLogin')
		return notifySuccess({ msg: "Login encerrado!" })
	}

	return (
		<motion.div
			className={`${style.container} ${scrollDirection !== "down" ? style.containerNormal : style.containerSmall}`}
			initial={"closed"}
			animate={"open"}
			exit={"closed"}
			variants={dropdownVariant}
		>
			{toggleUserModal ? <ul className={style.ul}>
				<li className={style.li} onClick={() => setToggleUserModal(false)}>
					<Link href="/perfil">
						<a className={style.myProfile}>Meu perfil</a>
					</Link>
				</li>

				<div className={style.division}></div>

				<li className={style.li}>
					<button className={`${style.btn} ${style.btnLogout}`} onClick={handleLogout}>Sair</button>
				</li>
			</ul> : ''}
		</motion.div >
	)
}