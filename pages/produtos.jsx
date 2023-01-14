import Head from "next/head"
import { ProductFiltred } from '../components/filters/Filters';
import client from '../lib/apolloclient'
import { PRODUCTS_QUERY } from "../lib/Queries";


export default function Produtos({ data }) {
	return (
		<>
			<Head>
				<title>Produtos | THIZ</title>
			</Head>
			<div className="page">
				<ProductFiltred data={data} />
			</div>
			<div className="marginFooter"></div>
		</>
	)
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: PRODUCTS_QUERY
	}
	)
	return {
		props: { data: data?.allProducts },
		revalidate: 60 * 60 * 24,
	}
}