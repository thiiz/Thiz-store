import { parseCookies, setCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../styles/theme'

const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	const toggleTheme = () => {
		if (isDarkTheme) {
			setIsDarkTheme(false)
			setCookie(null, 'THEME', 'Light', {
				maxAge: 86400,
				path: '/',
			})
			return
		}
		else {
			setIsDarkTheme(true)
			setCookie(null, 'THEME', 'Dark', {
				maxAge: 86400,
				path: '/',
			})
			return
		}
	}

	const state = {
		isDarkTheme,
		toggleTheme
	}

	useEffect(() => {
		const prefersDark = window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		const cookieTheme = parseCookies().THEME
		if (cookieTheme === 'Dark' || cookieTheme === "Light") {
			setIsDarkTheme(cookieTheme === 'Dark' ? true : false);
		} else if (prefersDark) {
			setIsDarkTheme(true);
		}
	}, []);

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