import { HeaderContainer } from './styleHeader'
import { useIsSmall } from '../../lib/MediaQuery'
import Mobile from './mobile/Mobile'
import Desktop from './desktop/Desktop'

function Header() {
	const small = useIsSmall()

	return (
		<>
			<HeaderContainer>
				{small ?
					<Mobile />
					:
					<Desktop />
				}
			</HeaderContainer>
		</>
	)
}
export default Header