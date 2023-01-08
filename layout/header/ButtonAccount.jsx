import style from './Header.module.css'
import { useContextUserModal } from '../../contexts/UserModalContext'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import UserModal from './UserModal'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useToggleLoginModal } from '../../contexts/LoginModalContext'
import { useAuth } from '../../contexts/AuthContext'

export default function ButtonAccount() {
	const { setToggleLoginModal } = useToggleLoginModal()
	const { toggleUserModal, setToggleUserModal } = useContextUserModal()
	const scrollDirection = useScrollDirection()
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
		<div ref={accountRef} className={style.userContainer}>
			{auth.user && auth.token ?
				<button
					onClick={() => setToggleUserModal(prev => !prev)}
					className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${scrollDirection !== 'down' ? style.btnLoginNormal : style.btnLoginSmall}`}
					type='button'>
					<FaUserCircle />
					{scrollDirection !== "down" &&
						<p className={style.loginText}>{auth.user.name}</p>
					}
				</button>
				:
				<button
					onClick={() => !isLoading && setToggleLoginModal(prev => !prev)}
					className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${scrollDirection !== 'down' ? style.btnLoginNormal : style.btnLoginSmall}`}
					type='button'>
					<FaUserCircle />
					{scrollDirection !== "down" && isLoading &&
						<div className={style.loader}></div>
					}
				</button>}
			<AnimatePresence>
				{toggleUserModal &&
					<UserModal scrollDirection={scrollDirection} />
				}
			</AnimatePresence>
		</div>
	)
}

