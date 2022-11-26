import style from './HeaderLinks.module.css'
import Link from 'next/link'

function HeaderLinks() {
	return (
		<ul className={style.NavMenuList}>
			<li><Link href="/"><a>início</a></Link></li>
			<li><Link href='/produtos'><a>produtos</a></Link></li>
			<li><Link href='/sobre'><a>sobre</a></Link></li>
			<li><Link href="/contato"><a>contato</a></Link></li>
		</ul>
	)
}
export default HeaderLinks