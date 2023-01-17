import { BtnLogout, Container, Division, Li, MyProfile, Ul } from './styleUserModal'
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import { useNotify } from '../../contexts/NotifyContext'
import { useContextUserModal } from '../../contexts/UserModalContext'
import { useEffect, useRef } from 'react'

export default function UserModal({ scrolldirection }) {
	const { pathname, push } = useRouter()
	const { setToggleUserModal } = useContextUserModal()
	const { setAuth } = useAuth()
	const { notifySuccess } = useNotify()

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
		<Container
			initial={"closed"}
			animate={"open"}
			exit={"closed"}
			variants={dropdownVariant}
			scrolldirection={scrolldirection}
		>

			<Ul>
				<Li onClick={() => setToggleUserModal(false)}>
					<MyProfile href="/perfil">Meu perfil</MyProfile>
				</Li>
				<Division />
				<Li>
					<BtnLogout onClick={handleLogout}>Sair</BtnLogout>
				</Li>
			</Ul>
		</Container>
	)
}