import { Fade as Hamburger } from 'hamburger-react'
import { Container } from './styleMobileButtons'
import { useState } from 'react'
import HeaderLogo from '../HeaderLogo'
import HeaderLinks from '../links/HeaderLinks'
import ContactButton from '../buttons/ContactButton'
import CartButton from '../buttons/cart/CartButton'
import ButtonAccount from '../buttons/account/AccountButton'
import Search from '../buttons/search/Search'

export default function ButtonsMobile() {
	const [isOpenMobile, setIsOpenMobile] = useState(false)

	return (
		<Container>
			<HeaderLogo />
			<HeaderLinks />
			<Search />
			<ContactButton />
			<CartButton />
			<ButtonAccount />
			<Hamburger
				toggled={isOpenMobile}
				toggle={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)}
				distance="lg" size={34}
				easing="ease-in"
				style="bottom: 2px;"
			/>
		</Container>
	)
}