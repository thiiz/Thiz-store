import Filters from "../components/filters/Filters"
import Head from "next/head"
import style from '../styles/Products.module.css'
import { getData } from '../lib/queries';


export default function Products({ data }) {
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
export async function getStaticProps() {
	const data = await getData()
	return {
	  props: { data: data.data }
	};
  }
