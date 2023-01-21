import { HeaderContainer } from './styleHeader'
import { useIsSmall } from '../../lib/MediaQuery'
import Mobile from './mobile/Mobile'
import Desktop from './desktop/Desktop'
import UserModalContextProvider from '../../contexts/UserModalContext'

function Header() {
	const small = useIsSmall()

	return (
		<UserModalContextProvider>
			<HeaderContainer>
				{small ?
					<Mobile />
					:
					<Desktop />
				}
			</HeaderContainer>
		</UserModalContextProvider>
	)
}
export default Header