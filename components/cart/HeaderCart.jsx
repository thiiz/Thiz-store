import style from './styles/HeaderCart.module.css'
import { VscChromeClose } from 'react-icons/vsc'
import { MdDeleteForever } from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import ModalHeader from './modal/ModalHeader'
import { useState } from 'react'
import { getCartQty } from '../../utils/getCartQty'

export default function HeaderCart() {
	const { setOpenCart } = useMenuCart()
	const { clearCart, cart } = useCart()
	const [removeModal, setRemoveModal] = useState(false)
	return (
		<div className={style.headerCart}>
			<button onClick={() => setOpenCart(false)} className={style.closeCart}><VscChromeClose /></button>
			<span className={style.titleMyCart}>meu carrinho <span>({getCartQty()} {getCartQty() === 1 ? "item" : "itens"})</span></span>
			{cart.length === 0 ?
				<button className={style.deleteAll} type='button'>
					<MdDeleteForever className={style.deleteAllIcon} />
				</button>
				:
				<button onClick={() => setRemoveModal(removeModal => !removeModal)} className={style.deleteAll} type='button'>
					<MdDeleteForever className={style.deleteAllIcon} />
				</button>
			}
			{removeModal &&
				<ModalHeader setRemoveModal={setRemoveModal} />}
		</div>
	)
}