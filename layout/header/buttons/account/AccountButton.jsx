import { Button, Container, Loader, UserName } from './styleAccountButton'
import { useContextUserModal } from '../../../../contexts/UserModalContext'
import { AnimatePresence } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import UserModal from '../../UserModal'
import { useToggleLoginModal } from '../../../../contexts/LoginModalContext'
import { useAuth } from '../../../../contexts/AuthContext'

export default function AccountButton({ scrolldirection }) {
	const { setToggleLoginModal } = useToggleLoginModal()
	const { toggleUserModal, setToggleUserModal } = useContextUserModal()
	const { auth, isLoading } = useAuth()

	return (
		<Container>
			{auth.user && auth.token ?
				<Button
					onClick={() => setToggleUserModal(prev => !prev)}
					type='button'
				>
					<FaUserCircle />
					{scrolldirection !== "down" &&
						<UserName>{auth.user.name}</UserName>
					}
				</Button>
				:
				<Button
					onClick={() => !isLoading && setToggleLoginModal(prev => !prev)}
					type='button'
				>
					<FaUserCircle />
					{scrolldirection !== "down" && isLoading &&
						<Loader />
					}
				</Button>}
			<AnimatePresence>
				{toggleUserModal &&
					<UserModal scrolldirection={scrolldirection} />
				}
			</AnimatePresence>
		</Container>
	)
}

