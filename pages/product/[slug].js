import { request } from "../../lib/datocms"

const SLUGPAGE_QUERY = `query SlugPage {
	allProducts {
		  title
		  price
		  image {
			responsiveImage(imgixParams: {fit: crop}){                
				src  
				base64
			  }
			}
		  slug
		}
  }`;

function productPage({ product }) {
	return (
		<div>
			<h1>{product.title}.</h1>
			<p>{product.price}</p>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = params?.slug
	const data = await request({
	  query: SLUGPAGE_QUERY,
	  variables: { }
	});
	const product = await data.allProducts.find((p) => p.slug === slug) || null

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
		variables: { }
	  });
	const slugs = await products.allProducts.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: true,
	}
}


export default productPage