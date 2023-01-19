import Head from "next/head";
import { SearchProducts } from '../lib/SearchProducts';
import { ProductFiltred } from '../components/filters/Filters';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Page } from '../styles/page'
import { useState } from "react";
import nookies from 'nookies'

export default function Busca() {
	const { query } = useRouter()
	const [data, setData] = useState()
	const [title, setTitle] = useState('Thiz | Procurando produtos...')
	useEffect(() => {
		SearchProducts({ search: query?.term }).then((response) => setData(response.data), setTitle(`${query?.term} - Busca | Thiz`))
	}, [query?.term]);
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Page>
				{data?.length !== 0 ? <ProductFiltred data={data} /> : <h2>Nenhum produto relacionado com {query.term} foi encontrado.</h2>}
			</Page>
			<div className="marginFooter"></div>
		</>
	)
}