import Head from "next/head";
import { searchProducts } from '../lib/searchProducts';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Page } from '../styles/page'
import { useState } from "react";
import Products from "../components/products";

export default function Busca() {
	const { query, isReady } = useRouter()
	const { term } = query;
	const [data, setData] = useState(undefined)
	const [title, setTitle] = useState('Thiz | Procurando produtos...')

	useEffect(() => {
		if (!isReady) return;
		if (term.length !== 0) {
			searchProducts({ search: term }).then((response) =>
				setData(response.products),
				setTitle(`${term} - Busca | Thiz`
				)).catch((err) => console.log(err))
		}
	}, [isReady, term]);
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Page>
				{data && <Products data={data} title={data?.length !== 0 ? `(${data?.length}) resultados para "${term}"` : `Nenhum produto relacionado a "${term}" foi encontrado.`} />}
			</Page>
			<div className="marginFooter"></div>
		</>
	)
}