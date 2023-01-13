import { Button, Container, Loader, UserName } from './styleAccountButton'
import { useContextUserModal } from '../../../../contexts/UserModalContext'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import UserModal from '../../UserModal'
import { useToggleLoginModal } from '../../../../contexts/LoginModalContext'
import { useAuth } from '../../../../contexts/AuthContext'

export default function AccountButton({ scrollDirection }) {
	const { setToggleLoginModal } = useToggleLoginModal()
	const { toggleUserModal, setToggleUserModal } = useContextUserModal()
	const { auth, isLoading } = useAuth()
	const accountRef = useRef();

	useEffect(() => {
		function handleClickOutside(event) {
			if (accountRef.current && !accountRef.current.contains(event.target)) {
				setToggleUserModal(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [accountRef]);

	return (
		<Container ref={accountRef}>
			{auth.user && auth.token ?
				<Button
					onClick={() => setToggleUserModal(prev => !prev)}
					type='button'
				>
					<FaUserCircle />
					{scrollDirection !== "down" &&
						<UserName>{auth.user.name}</UserName>
					}
				</Button>
				:
				<Button
					onClick={() => !isLoading && setToggleLoginModal(prev => !prev)}
					type='button'
				>
					<FaUserCircle />
					{scrollDirection !== "down" && isLoading &&
						<Loader></Loader>
					}
				</Button>}
			<AnimatePresence>
				{toggleUserModal &&
					<UserModal scrollDirection={scrollDirection} />
				}
			</AnimatePresence>
		</Container>
	)
}

