import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { useNotify } from './NotifyContext'


const CartContext = createContext()

export default function CartProvider({ children }) {
	const [cart, setCart] = useState([])
	const [subTotalPrice, setSubTotalPrice] = useState()
	const { notifyCart, notifyError, notifyInfoCart } = useNotify()

	useEffect(() => {
		const cartLocal = localStorage.getItem('EcommerceShopingCart')
		if (cartLocal) {
			setCart(JSON.parse(cartLocal))
		}
	}, [])

	useEffect(() => {
		let value = 0;
		cart.map((item) => {
			value = value += item.price * item.qty
		})
		setSubTotalPrice(value)
		localStorage.setItem('EcommerceShopingCart', JSON.stringify(cart))

	}, [cart])

	function add(item) {
		const newCart = [...cart];
		const check = newCart.find((product) => product.id === item.id)

		if (check) {
			if (9 >= check.qty) {
				check.qty += 1;
				notifyInfoCart({ msg: `Quantidade do produto alterada para ${check.qty}` })
			} else {
				return notifyError({ msg: "Quantidade do produto indisponível." })
			}
		} else {
			newCart.push({ ...item, qty: 1 })
			notifyCart({ msg: "Produto adicinado ao carrinho!" })
		}
		setCart(newCart)
	}

	function remove(id) {
		const newCart = [...cart];
		try {
			const productExists = newCart.find((product) => product.id === id);
			if (!productExists) {
				return notifyError({ msg: "Erro ao remover o produto." })
			} else {
				const updatedCart = cart.filter(cartItem => cartItem.id !== id)
				setCart(updatedCart)
				return notifyInfoCart({ msg: "Produto removido do carrinho!" })
			}


		} catch {
			notifyError({ msg: "Erro ao remover o produto." })
		}
	}


	function removeQty(item) {
		const newCart = [...cart];
		const check = newCart.find((product) => product.id === item.id)
		if (check.qty > 1) {
			check.qty -= 1;
			setCart(newCart)
			return notifyInfoCart({ msg: `Quantidade do produto alterada para ${check.qty}` })
		}
	}
	function clearCart() {
		if (cart.length > 0) {
			setCart([])
			return notifyInfoCart({ msg: "O carrinho foi limpo!" })
		}
		return notifyError({msg: "O carrinho já está vazio."})
	}

	const store = {
		add,
		cart,
		removeQty,
		remove,
		clearCart,
		subTotalPrice
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
		add,
		cart,
		removeQty,
		remove,
		clearCart,
		subTotalPrice
	} = context
	return {
		add,
		cart,
		removeQty,
		remove,
		clearCart,
		subTotalPrice
	}
}