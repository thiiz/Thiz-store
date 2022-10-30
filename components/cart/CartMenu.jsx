import { memo } from 'react'
import { useCart } from '../../contexts/CartContext'
import CartContent from './CartContent'
import CartEmpty from './CartEmpty'
import HeaderCart from './HeaderCart'
import style from './styles/Cart.module.css'

function CartMenu() {
	const { cart } = useCart()


	return (

		<div className={style.container}>
			<HeaderCart />
			{cart?.length !== 0 ?
				<CartContent /> : <CartEmpty />}
		</div>

	)
}
export default memo(CartMenu)