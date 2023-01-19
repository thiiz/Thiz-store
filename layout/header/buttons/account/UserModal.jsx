import { Buttons, Container, Division, Li, ContainerLink, Ul } from './styleUserModal'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import { useAuth } from '../../../../contexts/AuthContext'
import { useNotify } from '../../../../contexts/NotifyContext'
import { useContextUserModal } from '../../../../contexts/UserModalContext'
import { IoIosHelpCircle } from 'react-icons/io'
import { RiShieldUserFill } from 'react-icons/ri'
import { IoLogOut } from 'react-icons/io5'

export default function UserModal({ scrolldirection }) {
	const { pathname, push } = useRouter()
	const { setToggleUserModal } = useContextUserModal()
	const { setAuth } = useAuth()
	const { notifySuccess } = useNotify()

	const dropdownVariant = {
		open: { zIndex: "16", opacity: 1, height: "8.138rem", padding: ".67rem .95rem .67rem .95rem" },
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
					<ContainerLink href="/perfil"><span>Minha conta</span>
						<RiShieldUserFill />
					</ContainerLink>
				</Li>
				<Division />
				<Li>
					<Buttons>
						<span>Ajuda</span>
						<IoIosHelpCircle />
					</Buttons>
				</Li>
				<Division />
				<Li>
					<Buttons onClick={handleLogout}>
						<span>Sair</span>
						<IoLogOut />
					</Buttons>
				</Li>
			</Ul>
		</Container>
	)
}