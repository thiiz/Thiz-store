import { Image } from 'react-datocms'
import { PRODUCTS_QUERY } from '../../lib/queries'
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from 'apollo-link-context';


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
	const httpLink = createHttpLink({
		uri: 'https://graphql.datocms.com/',
	});
	const authLink = setContext((_, { headers }) => {
		return {
			headers: Object.assign(
				headers || {},
				{
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS_READ_ONLY_API_TOKEN}`,
				}
			)
		}
	});
	const client = new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});
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
	const httpLink = createHttpLink({
		uri: 'https://graphql.datocms.com/',
	});
	const authLink = setContext((_, { headers }) => {
		return {
			headers: Object.assign(
				headers || {},
				{
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS_READ_ONLY_API_TOKEN}`,
				}
			)
		}
	});
	const client = new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});
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