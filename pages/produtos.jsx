import Head from "next/head"
import { ProductFiltred } from '../components/filters/Filters';
import client from '../lib/apolloclient'
import { PRODUCTS_QUERY } from "../lib/Queries";
import { Page } from "../styles/page";


export default function Produtos({ data }) {
	return (
		<>
			<Head>
				<title>Produtos | THIZ</title>
			</Head>
			<Page>
				<ProductFiltred data={data} />
			</Page>
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