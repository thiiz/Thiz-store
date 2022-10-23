import style from './styles/HeaderCart.module.css'
import { GrClose } from 'react-icons/gr'
import { MdDeleteForever } from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'

export default function HeaderCart() {
	const { setOpenCart } = useMenuCart()
	const { clearCart, cart } = useCart()
	return (
		<div className={style.headerCart}>
			{cart.length === 0 ? '' :
				<button onClick={() => clearCart()} className={style.deleteAll} type='button'>
					<MdDeleteForever className={style.deleteAllIcon} />
				</button>
			}
			<button onClick={() => setOpenCart(false)} className={style.closeCart}><GrClose /></button>
			<p className={style.titleMyCart}>meu carrinho</p>
		</div>
	)
}