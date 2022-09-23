import style from './Cart.module.css'
import CartItems from './CartItems'
import { useCart } from '../../contexts/CartContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'

export function CartMenu() {
	const { setIsOpen } = useMenuCart()
	const { cart, totalPrice } = useCart()
	return (
		<div className={style.container}>
			<div className={style.headerCart}>
				<button onClick={() => setIsOpen(false)} className={style.closeBtn}><AiOutlineCloseCircle /><p className={style.closeText}>Fechar</p></button>
				<p className={style.titleMyCart}>meu carrinho</p>
			</div>
			<div className={style.containerProduct}>
				<div className={style.product}>
					{cart?.map((item) => {
						return (
							<CartItems key={item.id} item={item} />
						);
					})}
				</div>
			</div >
			<div className={style.sideInfos}>
				<div>total: {totalPrice}</div>
			</div>
		</div>
	)
} 