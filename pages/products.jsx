import Filters from "../components/filters/Filters"
import { request } from '../lib/datocms';
import Head from "next/head"
import style from '../styles/Products.module.css'


export default function Products({ data }) {
	return (
		<>
			<Head>
				<title>MãeTerra - Produtos</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Loja de Crochê - MãeTerra"></meta>
			</Head>
			<div className={style.content}>

				<Filters data={data} />
			</div>
		</>

	)
}
export async function getStaticProps() {
	const PRODUCTSPAGE_QUERY = `query ProductsPage($limit: IntType, $orderBy: [ProductModelOrderBy]) {
		allProducts(first: $limit, orderBy: $orderBy) {
		id
			title
			price
			image {
			  responsiveImage(imgixParams: {fit: crop}){ 
				  src          
				  bgColor 
				  base64
				}
		  }
		  	color
			defaultVisible
			slug
		  }
	}`;
	const data = await request({
		query: PRODUCTSPAGE_QUERY,
		variables: { limit: 100 }
	});
	return {
		props: { data: data.allProducts }
	};
}
