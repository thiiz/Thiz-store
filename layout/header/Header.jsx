import { HeaderContainer } from './styleHeader'
import { useIsSmall } from '../../lib/MediaQuery'
import ButtonsMobile from './mobile/Mobile'
import ButtonsDesktop from './desktop/Desktop'

function Header() {
	const small = useIsSmall()

	return (
		<>
			<HeaderContainer>
				{small ?
					<ButtonsMobile />
					:
					<ButtonsDesktop />
				}
			</HeaderContainer>
		</>
	)
}
export default Header