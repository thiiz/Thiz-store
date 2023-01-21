import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useContext, createContext, useState, useEffect } from "react";
import { useIsLarge } from "../lib/MediaQuery";


const ProductsGridContext = createContext()


export default function ProductsGridProvider({ children }) {
	const [grid, setGrid] = useState(Math.floor(parseCookies().GRID || 4))
	const [lastGrid, setLastGrid] = useState(undefined)
	const desktop = useIsLarge()

	useEffect(() => {
		if (lastGrid) {
			setGrid(lastGrid)
			setLastGrid(undefined)
			return
		}
		if (!desktop) {
			setLastGrid(grid)
			setGrid(4)
		}
	}, [desktop])

	useEffect(() => {
		if (parseCookies().AcceptedCookies === "all") {
			if (grid === 4) {
				destroyCookie(null, 'GRID', { path: '/' })
				return
			}
			setCookie(null, 'GRID', grid, {
				maxAge: 86400,
				path: '/',
			})
		}
	}, [grid])

	const state = {
		grid,
		setGrid
	}
	return (
		<ProductsGridContext.Provider value={state}>
			{children}
		</ProductsGridContext.Provider >
	)
}

export const useProductsGrid = () => {
	const context = useContext(ProductsGridContext)
	const { grid, setGrid } = context
	return {
		grid,
		setGrid
	}
}