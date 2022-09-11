import { useContext } from "react";
import { createContext, useState } from "react";

const OpenCartMenuContext = createContext()

export default function CartMenuProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false)

	function taggle() {
		setIsOpen(true)
	}
	const state = {
		taggle,
		isOpen,
		setIsOpen
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
		taggle,
		isOpen,
		setIsOpen
	} = context
	return {
		taggle,
		isOpen,
		setIsOpen
	}
}