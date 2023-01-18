import { Button, Container, Loader, UserName } from './styleAccountButton'
import { useContextUserModal } from '../../../../contexts/UserModalContext'
import { AnimatePresence } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import UserModal from './UserModal'
import { useToggleLoginModal } from '../../../../contexts/LoginModalContext'
import { useAuth } from '../../../../contexts/AuthContext'
import { useEffect, useRef } from 'react'

export default function AccountButton({ scrolldirection }) {
	const { setToggleLoginModal } = useToggleLoginModal()
	const { toggleUserModal, setToggleUserModal } = useContextUserModal()
	const { auth, isLoading } = useAuth()
	const accountRef = useRef();


	useEffect(() => {
		function handleClickOutside(event) {
			if (event.type === 'mousedown') {
				if (accountRef.current && !accountRef.current.contains(event.target)) {
					setToggleUserModal(false);
				}
			} else if (event.type === 'keydown') {
				if (event.key === "Escape") {
					setToggleUserModal(false);
				}
			}

		}
		if (toggleUserModal) {
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("keydown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleClickOutside);
		};
	}, [toggleUserModal]);



	return (
		<Container ref={accountRef}>
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

