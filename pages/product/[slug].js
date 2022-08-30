import { request } from "../../lib/datocms"
import { Image } from 'react-datocms'
import { useRouter } from "next/router";
import LoadingScreen from '../../components/loading-screen/loadingScreen';


const SLUGPAGE_QUERY = `query SlugPage($limit: IntType, $slug: String) {
	allProducts(first: $limit, filter: {slug: {eq: $slug}})  {
		  title
		  price
		  image {
			responsiveImage(imgixParams: {fit: crop, fm: webp}){
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
	const router = useRouter()
	if(router.isFallback){
		return <LoadingScreen/>
	}
	return (
		<div>
			<picture>
				<Image data={product.image.responsiveImage} alt={product.title} />
			</picture>
			<h1>{product.title}.</h1>
			<p>{product.price}</p>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = params.slug
	console.log(slug)
	const data = await request({
		query: SLUGPAGE_QUERY,
		variables: {
			limit: 100,
			slug: slug,
		}
	});
	const product = data.allProducts.find((p) => p.slug === slug) || null
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
	const products = await request({
		query: SLUGPAGE_QUERY,
		variables: { limit: 100 }
	});
	const slugs = products.allProducts.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: false,
	}
}
export default productPage