import style from './Header.module.css'
import { motion } from "framer-motion";
import { useIsSmall } from "../../lib/MediaQuery";
import { useScrollDirection } from "../../lib/useScrollDirection";
import { FaShoppingCart } from 'react-icons/fa';
import { useDesktopSize } from '../../lib/useAnimate';
import { useMenuCart } from '../../contexts/OpenCartMenuContext';
import { useCart } from '../../contexts/CartContext';
import { memo } from 'react';
import { getCartQty } from '../../utils/getCartQty';
function ButtonCart() {
	const small = useIsSmall()
	const desktopVariant = useDesktopSize()
	const scrollDirection = useScrollDirection()
	const { setOpenCart } = useMenuCart()
	const { cart } = useCart()
	return (
		<motion.button animate={scrollDirection === "down" ? "small_Menu" : "normal_Menu"} variants={desktopVariant} onClick={() => setOpenCart(openCart => !openCart)} className={`${style.btn} ${style.btnInfo}`} type='button'>
			<FaShoppingCart />
			<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{getCartQty()}</div>
		</motion.button>
	)
}
export default memo(ButtonCart)