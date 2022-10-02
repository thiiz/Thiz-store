import style from './Cart.module.css'
import CartItems from './CartItems'
import { useCart } from '../../contexts/CartContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { MdDeleteForever } from 'react-icons/md'

export function CartMenu() {
	const { setIsOpen } = useMenuCart()
	const { cart, subTotalPrice, clearCart } = useCart()

	return (
		<div className={style.container}>
			<div className={style.headerCart}>
				<button onClick={() => clearCart()} className={style.deleteAll}><MdDeleteForever className={style.deleteAllIcon} />limpar carrinho</button>

				<button onClick={() => setIsOpen(false)} className={style.closeBtn}><AiOutlineCloseCircle /><p className={style.closeText}>Fechar</p></button>
				<p className={style.titleMyCart}>meu carrinho</p>
			</div>
			<div className={style.content}>
				<div className={style.containerProduct}>
					<div className={style.product}>
						{cart?.map((item) => {
							return (
								<CartItems key={item.id} item={item} />
							);
						})}
					</div>
				</div >
			</div>
			<div className={style.sideContainer}>
				<div>total: {subTotalPrice}</div>
			</div>
		</div>
	)
} 