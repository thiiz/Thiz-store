import { memo, useEffect, useRef } from 'react'
import { useCart } from '../../contexts/CartContext'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useBackgroundVariant } from '../../lib/useBackgroundVariant'
import CartContent from './CartContent'
import CartEmpty from './CartEmpty'
import HeaderCart from './HeaderCart'
import style from './styles/Cart.module.css'
import { motion } from 'framer-motion'

function CartMenu() {
	const { cart } = useCart()
	const { openCart, setOpenCart } = useMenuCart()
	const cartRef = useRef();
	const backgroundVariant = useBackgroundVariant()

	const CartVariant = {
		open: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: .45 } },
		closed: { opacity: 1, x: "400%", transition: { duration: 0 } },
	}



	useEffect(() => {
		function handleClickOutside(event) {
			if (event.type === 'keydown') {
				if (event.key === "Escape") {
					setOpenCart(false);
				}
			}
		}
		if (openCart) {
			document.addEventListener("keydown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("keydown", handleClickOutside);
		};
	}, [openCart]);

	return (
		<motion.nav
			animate={openCart ? "open" : "closed"}
			variants={CartVariant}
			className={style.cart}
			ref={cartRef}
			style={openCart ? { zIndex: 15 } : ''}
		>
			<div className={style.container}>
				<HeaderCart />
				{cart?.length !== 0 ?
					<CartContent /> : <CartEmpty />}
			</div>
			<motion.div
				onClick={() => setOpenCart(false)} className="backdrop" animate={openCart ? "visible" : "hidden"} variants={backgroundVariant}>
			</motion.div>
		</motion.nav>


	)
}
export default memo(CartMenu)