import { HeaderContainer } from './styleHeader'
import { useIsSmall } from '../../lib/MediaQuery'
import Mobile from './mobile/Mobile'
import Desktop from './desktop/Desktop'
import UserModalContextProvider from '../../contexts/UserModalContext'
import NextNProgress from 'nextjs-progressbar'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

function Header() {
	const small = useIsSmall()
	const { bg } = useContext(ThemeContext)
	return (
		<>
			<NextNProgress
				color={bg.variant}
				startPosition={0.1}
				stopDelayMs={150}
				height={1.5}
				showOnShallow={true}
				options={{ showSpinner: false }}
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