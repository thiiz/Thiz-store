import Head from "next/head";
import { SearchProducts } from '../lib/SearchProducts';
import { ProductFiltred } from '../components/filters/Filters';
export default function busca({ item }) {

	return (
		<>
			<Head>
				<title>{`Busca - Mãe Terra`}</title>
			</Head>
			<main className="page">
				<ProductFiltred data={item} />
			</main>
			<div className="marginFooter"></div>
		</>
	)
}
export async function getServerSideProps(context) {
	const term = context.query?.term?.toString().replace(/"+"/g, " ");
	const data = await SearchProducts({ search: term })
	return {
		props: { item: data.data },
	}
}