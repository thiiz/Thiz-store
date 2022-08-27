import { getAllProducts } from "../../lib/dato-cms"
import Image from "next/image"

function productPage({ product }) {
	return (
		<div>
			<Image src={product.image.url} alt={`Product ${product.title}`} width='550px' height='350px'/>
			products - {product.title}.
			price - {product.price}
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = params?.slug
	const products = await getAllProducts()
	const product = products.find((p) => p.slug === slug) || null
	console.log(product.image.url)

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

export const getStaticPaths = async () => {
	const products = await getAllProducts()
	const slugs = await products.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: false,
	}
}


export default productPage