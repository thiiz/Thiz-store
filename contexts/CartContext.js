import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { setCookie } from 'nookies'


const CartContext = createContext()

export default function CartProvider({ children }) {
	const [cart, setCart] = useState([])
	const [qtd, setQtd] = useState(1)
	const [totalPrice, setTotalPrice] = useState()

	useEffect(() => {
		const cartLocal = localStorage.getItem('EcommerceShopingCart')
		if(cartLocal){
			setCart(JSON.parse(cartLocal))
		}
	},[])

	useEffect(() => {
		let value = 0;
		cart.map((item) => {
			value = value + item.price
		})
		setTotalPrice(value)
		localStorage.setItem('EcommerceShopingCart', JSON.stringify(cart))

	}, [cart])

	function add(item) {
		const newCart = cart;
		const check = newCart.find((product) => product.id === item.id)
		if (!check) {
			newCart.push(item)
		}
		setCart([...newCart])




	}
	function remove(id) {
		const newCart = cart.filter((item) => item.id !== id)
		setCart(newCart);
	}
	const store = {
		add,
		remove,
		cart,
		qtd,
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
		qtd,
		add,
		remove,
		totalPrice
	} = context
	return {
		cart,
		qtd,
		add,
		remove,
		totalPrice
	}
}