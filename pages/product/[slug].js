import { request } from "../../lib/datocms"
import { Image } from 'react-datocms'

const SLUGPAGE_QUERY = `query SlugPage($limit: IntType) {
	allProducts(first: $limit) {
		  title
		  price
		  image {
			responsiveImage(imgixParams: {fit: crop}){                
				src
				width
				height   
				base64
			  }
			}
		  slug
		}
  }`;

function productPage({ product }) {
	return (
		<div>
			<Image data={product.image.responsiveImage} alt={product.title} />
			<h1>{product.title}.</h1>
			<p>{product.price}</p>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = params?.slug
	const data = await request({
	  query: SLUGPAGE_QUERY,
	  variables: { limit: 30 }
	});
	const product = data.allProducts.find((p) => p.slug === slug) || null
	if (!product) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			product,
		},
	}
}

export async function getStaticPaths() {
	  const products = await request({
		query: SLUGPAGE_QUERY,
		variables: { limit: 30 }
	  });
	const slugs = products.allProducts.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: true,
	}
}


export default productPage