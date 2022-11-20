import { Image } from 'react-datocms'
import { gql } from '@apollo/client';
import client from '../../lib/apolloclient';
import { VIEW_PRODUCTS_QUERY } from '../../lib/viewProductQuery'
import Head from 'next/head';


function productPage({ product }) {
	return (
		<>
			<Head>
				<title>{product.title} - Mãe Terra</title>
			</Head>
			<div>
				<picture>
					<Image data={product.image.responsiveImage} alt={product.title} />
				</picture>
				<h1>{product.title}.</h1>
				<p>{product.price}</p>
				<span>Disponíveis: {product.instock}</span>
			</div>
		</>
	)
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({ query: VIEW_PRODUCTS_QUERY })
	const slug = params?.slug
	const product = data?.allProducts.find((p) => p.slug === slug) || null
	if (!product) {
		return {
			notFound: true,
		}
	}

	return {
		props: { product },
		revalidate: 15,
	}
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`query Slug{
		  allProducts(first: 100) {
			slug
		  }
		  }`
	})
	const slugs = data?.allProducts.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: 'blocking',
	}
}
export default productPage