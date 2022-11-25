import style from './HeaderLinks.module.css'
import Link from 'next/link'
import { memo } from 'react'
import { useIsSmall } from '../../lib/MediaQuery'
import { useScrollDirection } from '../../lib/useScrollDirection'

function HeaderLinks() {
	const small = useIsSmall()
	const scrollDirection = useScrollDirection()
	return (
		<ul className={style.NavMenuList}>
			<li><Link href="/" as=''><a>início</a></Link></li>
			<li><Link href='/produtos'><a>produtos</a></Link></li>
			<li><Link href='/sobre'><a>sobre</a></Link></li>
			<li><Link href="/contato"><a>contato</a></Link></li>
		</ul>
	)
}
export default memo(HeaderLinks)