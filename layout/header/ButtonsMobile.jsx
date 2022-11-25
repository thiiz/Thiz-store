import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import style from './Header.module.css'
import { useContextModalLogin } from '../../contexts/ModalLoginContext'
import LoginModal from './LoginModal'
import { useEffect, useRef } from 'react'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useAuth } from '../../contexts/AuthContext'
import { useIsSmall } from '../../lib/MediaQuery'
import { useCart } from '../../contexts/CartContext'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'

export default function ButtonsMobile({ isOpenMobile, setIsOpenMobile }) {
	const { isLoginModal, setIsLoginModal } = useContextModalLogin()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth } = useAuth()
	const { setOpenCart } = useMenuCart()
	const { cart } = useCart()
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
			// if we are outside
			setIsLoginModal(false);
		};
		// anytime user clics anywhere on the dom, that click event will bubble up into our body element
		// without { capture: true } it might not work
		document.addEventListener("click", handleClickOutside, { capture: true });
		return () => {
			document.removeEventListener("click", handleClickOutside, { capture: true });
		};
	}, [isLoginModal])

	useEffect(() => {
		if (small && isOpenMobile) {
			return setIsOpenMobile(false)
		}
	}, [small])
	return (
		<div className={!small ? style.containerBtn : style.containerBtnMobile}>
			<section className={style.btnInfoContainer}>
				<button className={`${style.btn} ${style.btnInfo}`} type='button'>
					<MdHeadsetMic />
				</button>
				<button onClick={() => setOpenCart(openCart => !openCart)} className={`${style.btn} ${style.btnInfo}`} type='button'>
					<FaShoppingCart />
					<div className={`${style.countCartItems} ${style.countCartitemsNormal}`}><span>{Object.keys(cart).length}</span></div>
				</button>
				<div ref={refLogin} className={style.userContainer}>
					{Object.keys(auth).length === 0 ?
						<button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle className={style.avatar} />
						</button>
						:
						<button onClick={() => setIsLoginModal(isLoginModal => !isLoginModal)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle />
							{isOpenMobile ? <p className={style.loginText}>{auth.user.name}</p> : ''}
						</button>}
					{isLoginModal &&
						<div className={style.containerLoginModal}>
							<LoginModal isLoginModal={isLoginModal} scrollDirection={scrollDirection} />
						</div>
					}
				</div>
			</section>
		</div>
	)
}