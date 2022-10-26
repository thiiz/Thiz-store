import Head from "next/head"
import style from '../styles/Products.module.css'

export default function Produtos() {
	return (
		<>
			<Head>
				<title>Mãe Terra - Produtos</title>
			</Head>
			<div className="page">
				<div className={style.container}>
					<h1>PAGINA DE PRODUTOS</h1>
				</div>
			</div>
		</>
	)
}