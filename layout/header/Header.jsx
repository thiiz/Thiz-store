import { HeaderContainer } from './styleHeader'
import { useIsSmall } from '../../lib/MediaQuery'
import Mobile from './mobile/Mobile'
import Desktop from './desktop/Desktop'
import UserModalContextProvider from '../../contexts/UserModalContext'
import NextNProgress from 'nextjs-progressbar'
import { useThemeContext } from '../../contexts/ThemeContext'

function Header() {
	const small = useIsSmall()
	const { isDarkTheme } = useThemeContext()

	return (
		<>
			<NextNProgress
				color={isDarkTheme ? '#F4ABC4' : '#0099ff'}
				startPosition={0.1}
				stopDelayMs={150}
				height={6}
				showOnShallow={true}
			/>
			<UserModalContextProvider>
				<HeaderContainer>
					{small ?
						<Mobile />
						:
						<Desktop />
					}
				</HeaderContainer>
			</UserModalContextProvider>
		</>
	)
}
export default Header