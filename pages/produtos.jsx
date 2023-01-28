import Head from "next/head"
import { parseCookies } from "nookies";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import Products from "../components/products";
import { getAllProducts } from "../lib/getProducts";
import { Page } from "../styles/page";

export default function Produtos({ data }) {
	const [products, setProducts] = useState(data)

	return (
		<>
			<Head>
				<title>Produtos | THIZ</title>
			</Head>
			<Page>
				<Products
					products={products}
					setProducts={setProducts}
					title="PRODUTOS"
				/>
			</Page>
			<div className="marginFooter"></div>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const search = ctx.query.term
	const sort = ctx.query.sortBy
	const limit = 12
	const { products } = await getAllProducts(search, limit, sort)
	return {
		props: { data: products },
	}
}