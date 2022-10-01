import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { useNotify } from './NotifyContext'


const CartContext = createContext()

export default function CartProvider({ children }) {
	const [cart, setCart] = useState([])
	const [qty, setQty] = useState(1)
	const [totalPrice, setTotalPrice] = useState()
	const { notifyCart, notifyError, notifyInfoCart, notifySuccess } = useNotify()

	useEffect(() => {
		const cartLocal = localStorage.getItem('EcommerceShopingCart')
		if (cartLocal) {
			setCart(JSON.parse(cartLocal))
		}
	}, [])

	useEffect(() => {
		let value = 0;
		cart.map((item) => {
			value = value + item.price * qty
		})
		setTotalPrice(value)
		localStorage.setItem('EcommerceShopingCart', JSON.stringify(cart))

	}, [cart])

	function add(item) {
		const newCart = [...cart];
		const check = newCart.find((product) => product.id === item.id)

		if (check) {
			if (check.instock - 1 >= check.qty) {
				setQty(check.qty += 1)
				notifyInfoCart({ msg: `Quantidade do produto alterada para ${check.qty}` })
			} else {
				return notifyError({ msg: "Quantidade do produto indisponível." })
			}
		} else {
			newCart.push({ ...item, qty: qty })
			setQty(1)
			notifyCart({ msg: "Produto adicinado ao carrinho!" })
		}
		setCart(newCart)
	}

	function remove(id) {
		const newCart = cart.filter((product) => product.id !== id)
		setQty(1)
		setCart(newCart)
		notifySuccess({ msg: "Produto removido do carrinho!" })
	}

	function removeQty(item) {
		const newCart = [...cart];
		const check = newCart.find((product) => product.id === item.id)
		if (check.qty > 1) {
			setQty(check.qty -= 1)
			setCart(newCart)
			return notifyInfoCart({ msg: `Quantidade do produto alterada para ${check.qty}` })
		}
	}

	const store = {
		add,
		removeQty,
		remove,
		cart,
		qty,
		setQty,
		totalPrice
	}

	return (
		<CartContext.Provider value={store}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const context = useContext(CartContext)
	const {
		cart,
		qty,
		setQty,
		add,
		removeQty,
		remove,
		totalPrice
	} = context
	return {
		cart,
		qty,
		setQty,
		add,
		removeQty,
		remove,
		totalPrice
	}
}