import { useContext, useEffect } from "react";
import { createContext, useState } from "react";


const LoginModalContext = createContext()

export default function LoginMenuProvider({ children }) {
	const [toggleLoginModal, setToggleLoginModal] = useState(false)

	useEffect(() => {
		if (toggleLoginModal) {
			document.body.style.overflowY = 'hidden'
			return
		}
		document.body.style.overflowY = 'auto'
	}, [toggleLoginModal]);

	const state = {
		toggleLoginModal,
		setToggleLoginModal
	}

	return (
		<LoginModalContext.Provider value={state}>
			{children}
		</LoginModalContext.Provider>
	)
}

export function useToggleLoginModal() {
	const context = useContext(LoginModalContext)
	const {
		toggleLoginModal,
		setToggleLoginModal
	} = context
	return {
		toggleLoginModal,
		setToggleLoginModal
	}
}