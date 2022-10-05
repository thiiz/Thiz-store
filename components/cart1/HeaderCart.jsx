import style from './styles/HeaderCart.module.css'
import { GrClose } from 'react-icons/gr'
import { MdDeleteForever } from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'

export default function HeaderCart() {
	const { setOpenCart } = useMenuCart()
	const { clearCart } = useCart()
	return (
		<div className={style.headerCart}>
			<button onClick={() => clearCart()} className={style.deleteAll}><MdDeleteForever className={style.deleteAllIcon} />limpar</button>
			<button onClick={() => setOpenCart(false)} className={style.closeCart}><GrClose /><p className={style.closeText}></p></button>
			<p className={style.titleMyCart}>meu carrinho</p>
		</div>
	)
}