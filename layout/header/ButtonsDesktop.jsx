import style from './Header.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import LoginModal from './LoginModal'
import { useContextModalLogin } from '../../contexts/ModalLoginContext'
import { useEffect, useRef } from 'react'
import { useIsSmall } from '../../lib/MediaQuery'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useAuth } from '../../contexts/AuthContext'
import ButtonCart from './ButtonCart'
import Search from '../../components/filters/search/Search'

export default function ButtonsDesktop() {
	const { isLoginModal, setIsLoginModal } = useContextModalLogin()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth } = useAuth()
	const refLogin = useRef();
	const small = useIsSmall()
	const scrollDirection = useScrollDirection()
	useEffect(() => {
		function handleClickOutside(event) {
			if (!isLoginModal) {
				return;
			}
			if (
				event.target &&
				refLogin.current &&
				refLogin.current.contains(event.target)
			) {
				return;
			}
			setIsLoginModal(false);
		};

		document.addEventListener("click", handleClickOutside, { capture: true });
		return () => {
			document.removeEventListener("click", handleClickOutside, { capture: true });
		};
	}, [isLoginModal])
	console.log
	return (
		<section className={style.btnInfoContainer}>
			<Search />
			<button className={`${style.btn} ${style.btnInfo}`} type='button'>
				<MdHeadsetMic />
			</button>
			<ButtonCart />
			<div ref={refLogin} className={style.userContainer}>
				{Object.keys(auth).length === 0 ?
					<button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${scrollDirection !== 'down' ? style.btnLoginNormal : style.btnLoginSmall}`} type='button'>
						<FaUserCircle />
					</button>
					:
					<button onClick={() => setIsLoginModal(isLoginModal => !isLoginModal)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin} ${scrollDirection !== 'down' ? style.btnLoginNormal : style.btnLoginSmall}`} type='button'>
						<FaUserCircle />
						{scrollDirection !== "down" && <p className={style.loginText}>{auth.user.name}</p>}
					</button>}
				{isLoginModal &&
					<div className={style.containerLoginModal}>
						<LoginModal isLoginModal={isLoginModal} scrollDirection={scrollDirection} />
					</div>
				}
			</div>
		</section >
	)
}