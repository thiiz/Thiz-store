import { ContainerLogo } from './styleHeaderLogo.js'
import Image from 'next/image'

function HeaderLogo({ scrolldirection }) {
	return (
		<ContainerLogo scrolldirection={scrolldirection} href="/">
			<Image src='/logo-thiz.png' alt='logo-natureza' fill sizes="100%" />
		</ContainerLogo>

	)
}

export default HeaderLogo