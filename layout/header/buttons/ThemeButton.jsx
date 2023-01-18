import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { Btn } from "./styleButton";

export default function ThemeButton() {
	const { toggleTheme, isDarkTheme } = useThemeContext()
	return (
		<Btn onClick={() => toggleTheme()} type='button' >
			{isDarkTheme ? <MdDarkMode /> : <MdLightMode />}
		</Btn >
	)
}