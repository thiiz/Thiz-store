import style from './styles/HeaderCart.module.css'
import { VscChromeClose } from 'react-icons/vsc'
import { MdDeleteForever } from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'

export default function HeaderCart() {
	const { setOpenCart } = useMenuCart()
	const { clearCart, cart } = useCart()
	return (
		<div className={style.headerCart}>
			<button onClick={() => setOpenCart(false)} className={style.closeCart}><VscChromeClose /></button>
			<span className={style.titleMyCart}>meu carrinho <span>({Object.keys(cart).length} {Object.keys(cart).length === 1 ? "item" : "itens"})</span></span>
			{cart.length === 0 ?
				<button className={style.deleteAll} type='button'>
					<MdDeleteForever className={style.deleteAllIcon} />
				</button>
				:
				<button onClick={() => clearCart()} className={style.deleteAll} type='button'>
					<MdDeleteForever className={style.deleteAllIcon} />
				</button>
			}

		</div>
	)
}