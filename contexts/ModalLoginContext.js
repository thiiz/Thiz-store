import { createContext, useContext, useState } from "react";

export const ModalLoginContext = createContext()


export default function ModalLoginContextProvider({ children }) {
	const [isLoginModal, setIsLoginModal] = useState(false)
	const state = { isLoginModal, setIsLoginModal }
	return (
		<ModalLoginContext.Provider value={state}>
			{children}
		</ModalLoginContext.Provider >
	)
}

export const useContextModalLogin = () => {
	const context = useContext(ModalLoginContext)
	const { isLoginModal, setIsLoginModal } = context;
	return { isLoginModal, setIsLoginModal }
}

