import { useContext } from "react";
import { ProductsContext } from '../contexts/productContext'
import Filters from "../components/filters/Filters"
import Head from "next/head"
import style from '../styles/Products.module.css'


export default function Products() {
	const { data } = useContext(ProductsContext)
	return (
		<>
			<Head>
				<title>MãeTerra - Produtos</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Loja de Crochê - MãeTerra"></meta>
			</Head>
			<div className={style.content}>

				<Filters data={data} />
			</div>
		</>

	)
}

