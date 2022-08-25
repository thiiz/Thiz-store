import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../public/img/logo-maeTerra2.png'
import style from './Header.module.css'
/*import { BsSearch } from 'react-icons/bs'*/
import { FaShoppingCart } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'


function Header() {
	return (
		<header className={style.header}>
			<Head>
				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="thiz"></meta>
				<title>MaeTerra - Loja de crochê</title>
				<meta name="description" content="Loja de Crochê - MãeTerra"></meta>
			</Head>
			<div>
				<Link href="/"><a><Image className={style.logo} src={logo} alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
			</div>
			<div className={style.menuBtn}>
				<ul>
					<li><Link href="/"><a>início</a></Link></li>
					<li><Link href="/category"><a>categorias</a></Link></li>
					<li><Link href="/products"><a>produtos</a></Link></li>
					<li><Link href="/contact"><a>contato</a></Link></li>
				</ul>
			</div>
			<div className={style.containerBtn}>
				<section className={style.btnInfoContainer}>
					<button className={`${style.btn} ${style.btnInfo}`} type='button'><MdHeadsetMic /></button>
					<button className={`${style.btn} ${style.btnInfo}`} type='button'><FaShoppingCart /></button>
					<section className={style.btnLoginSpace}>
						<button className={`${style.btn} ${style.btnLogin}`} type='button'>LOGIN</button>
					</section>
				</section>

			</div>
		</header>
	)
}
export default Header