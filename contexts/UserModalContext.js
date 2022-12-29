import { createContext, useContext, useState } from "react";

export const UserModalContext = createContext()


export default function UserModalContextProvider({ children }) {
	const [toggleUserModal, setToggleUserModal] = useState(false)
	const state = { toggleUserModal, setToggleUserModal}
	return (
		<UserModalContext.Provider value={state}>
			{children}
		</UserModalContext.Provider >
	)
}

export const useContextUserModal = () => {
	const context = useContext(UserModalContext)
	const { toggleUserModal, setToggleUserModal } = context;
	return { toggleUserModal, setToggleUserModal }
}

