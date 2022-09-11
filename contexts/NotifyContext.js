import { useContext } from "react";
import { createContext, useState } from "react";
import { Flip, toast } from 'react-toastify'
import NotifyCart from "../components/notify/notifyCart";
import { useMenuCart } from "..//contexts/OpenCartMenuContext";



const NotifyContext = createContext()

export default function NotifyProvider({ children }) {
	const { isOpen, setIsOpen } = useMenuCart()

	const notifyCart = () => toast.success(<NotifyCart/>, {
		closeOnClick: false,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => setIsOpen(isOpen => !isOpen),
	});
	const state = {
		notifyCart
	}

	return (
		<NotifyContext.Provider value={state}>
			{children}
		</NotifyContext.Provider>
	)
}

export function useNotify() {
	const context = useContext(NotifyContext)
	const {
		notifyCart
	} = context
	return {
		notifyCart
	}
}