import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import style from './Header.module.css'
import UserModal from './UserModal'
import { useEffect, useRef } from 'react'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useToggleLoginModal } from '../../contexts/LoginModalContext'
import { useAuth } from '../../contexts/AuthContext'
import { useIsSmall } from '../../lib/MediaQuery'
import { useCart } from '../../contexts/CartContext'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useContextUserModal } from '../../contexts/UserModalContext'

export default function ButtonsMobile({ isOpenMobile, setIsOpenMobile }) {
	const { setToggleLoginModal } = useToggleLoginModal()
	const { toggleUserModal, setToggleUserModal } = useContextUserModal()
	const { auth, isLoading } = useAuth()
	const { setOpenCart } = useMenuCart()
	const { cart } = useCart()
	const small = useIsSmall()
	const scrollDirection = useScrollDirection()

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
				<button onClick={() => setOpenCart(prev => !prev)} className={`${style.btn} ${style.btnInfo}`} type='button'>
					<FaShoppingCart />
					<div className={`${style.countCartItems} ${style.countCartitemsNormal}`}><span>{Object.keys(cart).length}</span></div>
				</button>
				<div className={style.userContainer}>
					{auth.user && auth.token ?
						<button onClick={() => setToggleUserModal(prev => !prev)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle />
							{isOpenMobile ? <p className={style.loginText}>{auth.user.name}</p> : ''}
						</button>
						:
						<button onClick={() => setToggleLoginModal(prev => !prev)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle className={style.avatar} />
							{isOpenMobile && isLoading ? <p className={style.loginText}>{auth.user.name}</p> : ''}
						</button>}
					{toggleUserModal &&
						<UserModal toggleUserModal={toggleUserModal} scrollDirection={scrollDirection} />
					}
				</div>
			</section>
		</div>
	)
}