import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const OpenCartMenuContext = createContext()

export default function CartMenuProvider({ children }) {
	const [openCart, setOpenCart] = useState(false)

	useEffect(() => {
		if (openCart) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [openCart]);

	const state = {
		openCart,
		setOpenCart
	}

	return (
		<OpenCartMenuContext.Provider value={state}>
			{children}
		</OpenCartMenuContext.Provider>
	)
}

export function useMenuCart() {
	const context = useContext(OpenCartMenuContext)
	const {
		openCart,
		setOpenCart
	} = context
	return {
		openCart,
		setOpenCart
	}
}