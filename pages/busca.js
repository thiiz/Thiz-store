import Head from "next/head";
import { SearchProducts } from '../lib/SearchProducts';
import { ProductFiltred } from '../components/filters/Filters';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import nookies from 'nookies'

export default function busca() {
	const { query } = useRouter()
	const [data, setData] = useState(null)
	useEffect(() => {
		SearchProducts({ search: query.term }).then((response) => setData(response))
	}, [query.term]);
	return (
		<>
			<Head>
				<title>{query.term} - Busca</title>
			</Head>
			<main className="page">
				{data && <ProductFiltred data={data?.data} />}
			</main>
			<div className="marginFooter"></div>
		</>
	)
}