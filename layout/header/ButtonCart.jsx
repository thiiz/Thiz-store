import style from './Header.module.css'
import { useIsSmall } from "../../lib/MediaQuery";
import { useScrollDirection } from "../../lib/useScrollDirection";
import { FaShoppingCart } from 'react-icons/fa';
import { useMenuCart } from '../../contexts/OpenCartMenuContext';
import { memo } from 'react';
import { getCartQty } from '../../utils/getCartQty';
function ButtonCart() {
	const small = useIsSmall()
	const scrollDirection = useScrollDirection()
	const { setOpenCart } = useMenuCart()
	return (
		<button onClick={() => setOpenCart(openCart => !openCart)} className={`${style.btn} ${style.btnInfo}`} type='button'>
			<FaShoppingCart />
			<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{getCartQty()}</div>
		</button>
	)
}
export default memo(ButtonCart)