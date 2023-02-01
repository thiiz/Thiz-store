import Head from "next/head"
import { useState } from "react";
import Products from "../components/products";
import { getAllProducts } from "../lib/hygraph/getProducts";
import { Page } from "../styles/page";

export default function Produtos({ data, info }) {
	const [products, setProducts] = useState(data)

	return (
		<>
			<Head>
				<title>Produtos | THIZ</title>
			</Head>
			<Page>
				<Products
					info={info}
					products={products}
					setProducts={setProducts}
				/>
			</Page>
			<div className="marginFooter"></div>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const search = ctx.query.term
	const sort = ctx.query.sortBy
	const { products, pageInfo } = await getAllProducts(search, sort)
	return {
		props: {
			data: products,
			info: pageInfo,
		},
	}
}