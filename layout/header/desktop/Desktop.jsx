import { Container, ContainerButtons } from './styleDesktop'
import { useScrollDirection } from '../../../lib/useScrollDirection'
import HeaderLogo from '../HeaderLogo'
import HeaderLinks from '../links/HeaderLinks'
import Search from '../buttons/search/Search'
import CartButton from '../buttons/cart/CartButton'
import AccountButton from '../buttons/account/AccountButton'
import ContactButton from '../buttons/ContactButton'


export default function Desktop() {
	const scrollDirection = useScrollDirection()
	return (
		<Container scrollDirection={scrollDirection}>
			<HeaderLogo scrollDirection={scrollDirection} />
			<HeaderLinks />
			<ContainerButtons>
				<Search scrollDirection={scrollDirection} />
				<ContactButton scrollDirection={scrollDirection} />
				<CartButton scrollDirection={scrollDirection} />
				<AccountButton scrollDirection={scrollDirection} />
			</ContainerButtons>
		</Container >
	)
}