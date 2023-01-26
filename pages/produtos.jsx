import Head from "next/head"
import { parseCookies } from "nookies";
import { useEffect } from "react";
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
					initialProducts={data}
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
	const sort = ctx.query.sortBy || "inStock_DESC"
	const limit = 12
	const { products } = await getAllProducts(sort, limit)
	return {
		props: { data: products },
	}
}