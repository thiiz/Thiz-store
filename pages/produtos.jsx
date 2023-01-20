import { gql } from "@apollo/client";
import Head from "next/head"
import { ProductFiltred } from '../components/filters/Filters';
import { client } from "../lib/graphcms";
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
		query: PRODUCTS_QUERY,
		variables: {
			limit: 16
		}
	})
	return {
		props: { data: data?.products },
		revalidate: 60 * 60 * 24,
	}
}