import { CountCartItems } from './styleCartButton'
import { Btn } from '../styleButton';
import { FaShoppingCart } from 'react-icons/fa';
import { useMenuCart } from '../../../../contexts/OpenCartMenuContext';
import { memo } from 'react';
import { getCartQty } from '../../../../utils/getCartQty';

function ButtonCart({ scrollDirection }) {
	const { setOpenCart } = useMenuCart()
	const qtyItemInCart = getCartQty()
	return (
		<Btn onClick={() => setOpenCart(openCart => !openCart)} type='button'>
			<FaShoppingCart />
			<CountCartItems scrollDirection={scrollDirection}>{qtyItemInCart}</CountCartItems>
		</Btn>
	)
}
export default memo(ButtonCart)