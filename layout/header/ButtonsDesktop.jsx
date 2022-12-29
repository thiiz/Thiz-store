import style from './Header.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import LoginModal from './LoginModal'
import { useEffect, useRef } from 'react'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useToggleLoginModal } from '../../contexts/LoginModalContext'
import { useAuth } from '../../contexts/AuthContext'
import ButtonCart from './ButtonCart'
import Search from '../../components/search/Search'

export default function ButtonsDesktop({ toggleUserModal, setToggleUserModal }) {
	const { setToggleLoginModal } = useToggleLoginModal()
	const { auth } = useAuth()
	const refLogin = useRef();
	const scrollDirection = useScrollDirection()
	useEffect(() => {
		function handleClickOutside(event) {
			if (!toggleUserModal) {
				return;
			}
			if (
				event.target &&
				refLogin.current &&
				refLogin.current.contains(event.target)
			) {
				return;
			}
			setToggleUserModal(false);
		};

		document.addEventListener("click", handleClickOutside, { capture: true });
		return () => {
			document.removeEventListener("click", handleClickOutside, { capture: true });
		};
	}, [toggleUserModal])
	return (
		<section className={style.btnInfoContainer}>
			<Search />
			<button className={`${style.btn} ${style.btnInfo}`} type='button'>
				<MdHeadsetMic />
			</button>
			<ButtonCart />
			<div ref={refLogin} className={style.userContainer}>
				{Object.keys(auth).length === 0 ?
					<button onClick={() => setToggleLoginModal(prev => !prev)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${scrollDirection !== 'down' ? style.btnLoginNormal : style.btnLoginSmall}`} type='button'>
						<FaUserCircle />
					</button>
					:
					<button onClick={() => setToggleUserModal(prev => !prev)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${scrollDirection !== 'down' ? style.btnLoginNormal : style.btnLoginSmall}`} type='button'>
						<FaUserCircle />
						{scrollDirection !== "down" && <p className={style.loginText}>{auth.user.name}</p>}
					</button>}
				{toggleUserModal &&
					<div className={style.containerLoginModal}>
						<LoginModal toggleUserModal={toggleUserModal} scrollDirection={scrollDirection} />
					</div>
				}
			</div>
		</section >
	)
}