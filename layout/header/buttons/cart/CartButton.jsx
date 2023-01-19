import { CountCartItems, Btn } from './styleCartButton'
import { FaShoppingCart } from 'react-icons/fa';
import { useMenuCart } from '../../../../contexts/OpenCartMenuContext';
import { getCartQty } from '../../../../utils/getCartQty';

function ButtonCart({ scrolldirection }) {
	const { setOpenCart } = useMenuCart()
	const qtyItemInCart = getCartQty()
	return (
		<Btn onClick={() => setOpenCart(openCart => !openCart)} type='button'>
			<FaShoppingCart />
			<CountCartItems scrolldirection={scrolldirection}>{qtyItemInCart}</CountCartItems>
		</Btn>
	)
}
export default ButtonCart