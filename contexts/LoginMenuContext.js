import { useContext } from "react";
import { createContext, useState } from "react";


const LoginMenuContext = createContext()

export default function LoginMenuProvider({ children }) {
	const [toggleLoginMenu, setToggleLoginMenu] = useState(false)

	const store = {
		toggleLoginMenu,
		setToggleLoginMenu
	}

	return (
		<LoginMenuContext.Provider value={store}>
			{children}
		</LoginMenuContext.Provider>
	)
}

export function useLoginMenu() {
	const context = useContext(LoginMenuContext)
	const {
		toggleLoginMenu,
		setToggleLoginMenu
	} = context
	return {
		toggleLoginMenu,
		setToggleLoginMenu
	}
}