import { ContainerLogo } from './styleHeaderLogo.js'
import Link from 'next/link'
import Image from 'next/image'

function HeaderLogo({ scrollDirection }) {
	return (
		<ContainerLogo scrollDirection={scrollDirection}>
			<Link href="/"><Image src='/logo-thiz.png' alt='logo-natureza' fill sizes="100%"></Image></Link>
		</ContainerLogo>

	)
}

export default HeaderLogo