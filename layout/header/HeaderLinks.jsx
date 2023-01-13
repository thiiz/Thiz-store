import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavMenuList, NavMenuListItem, NavMenuListItemLink } from './styleHeaderLinks'

function HeaderLinks() {
	const { pathname } = useRouter()

	const link = { home: '/', products: '/produtos', about: '/sobre', contact: '/contato' }
	return (
		<NavMenuList>
			<NavMenuListItem>
				<Link href={link.home}><NavMenuListItemLink active={pathname === link.home ? "active" : ""}>início</NavMenuListItemLink></Link>
			</NavMenuListItem>
			<NavMenuListItem>
				<Link href={link.products}><NavMenuListItemLink active={pathname === link.products ? "active" : ""}>produtos</NavMenuListItemLink></Link>
			</NavMenuListItem>
			<NavMenuListItem>
				<Link href={link.about}><NavMenuListItemLink active={pathname === link.about ? "active" : ""}>sobre</NavMenuListItemLink></Link>
			</NavMenuListItem>
			<NavMenuListItem>
				<Link href={link.contact}><NavMenuListItemLink active={pathname === link.contact ? "active" : ""}>contato</NavMenuListItemLink></Link>
			</NavMenuListItem>
		</NavMenuList >
	)
}
export default HeaderLinks