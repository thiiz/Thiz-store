import { useContext } from "react";
import { createContext, useState } from "react";

const OpenCartMenuContext = createContext()

export default function CartMenuProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false)

	const state = {
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
		isOpen,
		setIsOpen
	} = context
	return {
		isOpen,
		setIsOpen
	}
}