import style from './Cart.module.css'
import CartItems from './CartItems'
import { useCart } from '../../contexts/CartContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {useMenuCart} from '../../contexts/OpenCartMenuContext'

export function CartMenu() {
	const { setIsOpen } = useMenuCart()
	const { cart, totalPrice } = useCart()
	return (
		<div className={style.container}>
			<button onClick={() => setIsOpen(false)} className={style.closeBtn}><AiOutlineCloseCircle /><p className={style.closeText}>Fechar</p></button>
			<div className={style.product}>
				<p className={style.titleMyCart}>meu carrinho</p>

				{cart?.map((item) => {
					return (
						<CartItems key={item.id} item={item} />
					);
				})}
				<div>total: {totalPrice}</div>
			</div>
		</div >
	)
} 