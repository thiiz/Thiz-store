import { createContext, useContext } from "react";

export const ProductsContext = createContext()


export default function ProductsContextProvider({ children, data }) {
	const state = { data }
	return (
		<ProductsContext.Provider value={state}>
			{children}
		</ProductsContext.Provider >
	)
}

export const useContextProducts = () => {
	const context = useContext(ProductsContext)
	const { data } = context;
	return { data }
}

