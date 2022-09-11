import style from './Cart.module.css'
import CartItems from './CartItems'
import { useCart } from '../../contexts/CartContext'


export function CartMenu() {
	const { cart, totalPrice } = useCart()
	return (
		<div className={style.container}>
			<div>
			<div>Meu Carrinho</div>

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