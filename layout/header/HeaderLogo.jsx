import style from './HeaderLogo.module.css'
import { useIsSmall } from '../../lib/MediaQuery'
import { useScrollDirection } from '../../lib/useScrollDirection'
import Link from 'next/link'
import Image from 'next/image'

function HeaderLogo({ scrollDirection }) {
	const small = useIsSmall()
	return (
		<div className={`${style.containerLogo} ${scrollDirection !== 'down' ? style.containerLogoNormal : style.containerLogoSmall}`}>
			<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
		</div>

	)
}

export default HeaderLogo