import { useState } from 'react'
import { createContext, useContext } from 'react'

export const OrderByContext = createContext('')

export function OrderByProvider({ children }) {
	const [orderBy, setOrderBy] = useState("price_ASC")

	return (
		<ProductsContext.Provider value={{ orderBy, setOrderBy }}>
			{children}
		</ProductsContext.Provider>
	)
}

export const useOrderByContext = () => {
	return useContext(OrderByContext)
}



