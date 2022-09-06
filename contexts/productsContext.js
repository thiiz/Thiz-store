import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";
import { PRODUCTS_QUERY } from "../lib/productsQuery";

export const ProductsContext = createContext()


export default function ProductsContextProvider({ children }) {
	const { data, loading, error } = useQuery(PRODUCTS_QUERY)
	return <ProductsContext.Provider value={{
		products: {
			items: data ? data.allProducts : [],
			loading,
			error,
		},
	}
	}
	>
		{children}
	</ProductsContext.Provider>
}

export const useContextProducts = () => {
	return useContext(ProductsContext)
}