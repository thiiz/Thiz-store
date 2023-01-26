import { useRouter } from 'next/router'
import { NavMenuList, NavMenuListItem, NavMenuListItemLink } from './styleHeaderLinks'

function HeaderLinks() {
	const { pathname, query, asPath } = useRouter()
	const link = { home: '/', products: `/produtos${query.sortBy ? `?sortBy=${query.sortBy}` : ''}`, about: '/sobre', contact: '/contato' }
	return (
		<NavMenuList>
			<NavMenuListItem>
				<NavMenuListItemLink href={link.home} active={pathname === link.home ? "active" : ""}>início</NavMenuListItemLink>
			</NavMenuListItem>
			<NavMenuListItem>
				<NavMenuListItemLink href={link.products} active={pathname === link.products ? "active" : ""}>produtos</NavMenuListItemLink>
			</NavMenuListItem>
			<NavMenuListItem>
				<NavMenuListItemLink href={link.about} active={pathname === link.about ? "active" : ""}>sobre</NavMenuListItemLink>
			</NavMenuListItem>
			<NavMenuListItem>
				<NavMenuListItemLink href={link.contact} active={pathname === link.contact ? "active" : ""}>contato</NavMenuListItemLink>
			</NavMenuListItem>
		</NavMenuList >
	)
}
export default HeaderLinks