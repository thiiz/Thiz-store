import { Container, ContainerButtons } from './styleDesktop'
import { useScrollDirection } from '../../../lib/useScrollDirection'
import HeaderLogo from '../HeaderLogo'
import HeaderLinks from '../links/HeaderLinks'
import Search from '../buttons/search/Search'
import CartButton from '../buttons/cart/CartButton'
import AccountButton from '../buttons/account/AccountButton'
import ThemeButton from '../buttons/ThemeButton'


export default function Desktop() {
	const scrolldirection = useScrollDirection()
	return (
		<Container scrolldirection={scrolldirection}>
			<HeaderLogo scrolldirection={scrolldirection} />
			<HeaderLinks />
			<ContainerButtons>
				<Search scrolldirection={scrolldirection} />
				<ThemeButton scrolldirection={scrolldirection} />
				<CartButton scrolldirection={scrolldirection} />
				<AccountButton scrolldirection={scrolldirection} />
			</ContainerButtons>
		</Container >
	)
}