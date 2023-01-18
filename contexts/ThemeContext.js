import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../styles/theme'

const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	const toggleTheme = () => {
		if (isDarkTheme)
			return setIsDarkTheme(false)
		else
			return setIsDarkTheme(true)
	}

	const state = {
		isDarkTheme,
		toggleTheme
	}
	return (
		<ThemeContext.Provider value={state}>
			<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider >
	)
}

export const useThemeContext = () => {
	const context = useContext(ThemeContext)
	const {
		isDarkTheme,
		toggleTheme
	} = context
	return { isDarkTheme, toggleTheme }
}