import { getAllProducts } from "../../lib/dato-cms"

function productPage({ slugs }) {
	return (
		<div >
			{slugs}
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = params?.slug
	const products = await getAllProducts()
	const product = products.find((p) => p.slug === slug) || null

	if (!product) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			products,
		},
		revalidate: 120,
	}
}

export const getStaticPaths = async () => {
	const products = await getAllProducts()
	const slugs = products.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: false,
	}
}


export default productPage

