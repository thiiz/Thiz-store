import { FaShoppingCart } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import style from '../Header.module.css'
import { useCart } from '../../../contexts/CartContext'
import { useMenuCart } from '../../../contexts/OpenCartMenuContext'
import { useContextUserModal } from '../../../contexts/UserModalContext'
import { Fade as Hamburger } from 'hamburger-react'
import ButtonAccount from '../buttons/ButtonAccount'
import { Container } from './styleMobileButtons'
import { useState } from 'react'

export default function ButtonsMobile() {
	const [isOpenMobile, setIsOpenMobile] = useState(false)

	const { setOpenCart } = useMenuCart()
	const { cart } = useCart()

	return (
		<Container>
			<button className={`${style.btn} ${style.btnInfo}`} type='button'>
				<MdHeadsetMic />
			</button>
			<button onClick={() => setOpenCart(prev => !prev)} className={`${style.btn} ${style.btnInfo}`} type='button'>
				<FaShoppingCart />
				<div className={`${style.countCartItems} ${style.countCartitemsNormal}`}><span>{Object.keys(cart).length}</span></div>
			</button>
			<ButtonAccount />
			<div className={style.menuHamburguer}><Hamburger toggled={isOpenMobile} toggle={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)} distance="lg" size={34} easing="ease-in" style="bottom: 2px;" /></div>
		</Container>
	)
}