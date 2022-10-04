import { useContext } from "react";
import { createContext, useState } from "react";

const OpenCartMenuContext = createContext()

export default function CartMenuProvider({ children }) {
	const [openCart, setOpenCart] = useState(false)

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