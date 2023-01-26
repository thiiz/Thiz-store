import Head from "next/head";
import { getAllProducts, getSearchPageProducts } from '../lib/getProducts';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Page } from '../styles/page'
import { useState } from "react";
import Products from "../components/products";
import ProductRelated from "../components/busca/ProductsRecommended";

export default function Busca() {
	const { query, isReady } = useRouter()
	const term = query?.term;
	const [products, setProducts] = useState(undefined)
	const [initialProducts, setInitialProducts] = useState(undefined)
	const [title, setTitle] = useState('Thiz | Procurando produtos...')
	useEffect(() => {
		if (!isReady) return;
		if (term?.length >= 0) {
			getSearchPageProducts({ search: term, limit: 12, order: query.sortBy || "inStock_DESC" }).then((response) =>
				setProducts(response.products) & setInitialProducts(response.products)).catch((err) => console.log(err))
			setTitle(`${term} - Busca | Thiz`)
		}
	}, [isReady, term]);
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Page>
				{products &&
					<>
						<Products
							initialProducts={initialProducts}
							setProducts={setProducts}
							products={products}
							title={products?.length !== 0 ? `(${products?.length}) resultados para "${term}"` : `Nenhum produto relacionado a "${term}" foi encontrado.`} />
						<ProductRelated products={products} />
					</>
				}
			</Page>
			<div className="marginFooter"></div>
		</>
	)
}