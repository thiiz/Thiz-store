import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";


const LoginModalContext = createContext()

export default function LoginMenuProvider({ children }) {
	const [toggleLoginModal, setToggleLoginModal] = useState(false)
	const { auth } = useAuth()

	useEffect(() => {
		if (toggleLoginModal) {
			document.body.style.overflowY = 'hidden'
			return
		}
		document.body.style.overflowY = 'auto'
	}, [toggleLoginModal]);

	const store = {
		toggleLoginModal,
		setToggleLoginModal
	}

	return (
		<LoginModalContext.Provider value={store}>
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