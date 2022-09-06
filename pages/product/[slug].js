import { Image } from 'react-datocms'
import { gql } from '@apollo/client';
import client from '../../lib/apolloclient';


function productPage({ product }) {
	return (
		<div>
			<picture>
				<Image data={product.image.responsiveImage} alt={product.title} />
			</picture>
			<h1>{product.title}.</h1>
			<p>{product.price}</p>
			<span>Disponíveis: {product.instock}</span>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: gql`query Products{
		  allProducts(first: 30, orderBy: instock_DESC) {
			id
			title
			price
			instock
			image {
			url
			responsiveImage(imgixParams: {fit: crop}) {
			  src
			  width
			  height
			  base64
			}
			}
			color
			slug
		  }
		  }`
	  })
	const slug = params?.slug
	const product = data?.allProducts.find((p) => p.slug === slug) || null
	if (!product) {
		return {
			notFound: true,
		}
	}

	return {
		props: { product }
	}
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`query Products{
		  allProducts(first: 30, orderBy: instock_DESC) {
			id
			title
			price
			instock
			image {
			url
			responsiveImage(imgixParams: {fit: crop}) {
			  src
			  base64
			}
			}
			color
			slug
		  }
		  }`
	  })
	const slugs = data?.allProducts.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: false,
	}
}
export default productPage