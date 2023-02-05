import style from './slug.module.css'
import { SLUG_QUERY, VIEW_PRODUCT_QUERY } from '../../lib/hygraph/Queries'
import Head from 'next/head';
import StarReview from '../../components/star-review/StarReview';
import { BsFillBagFill } from 'react-icons/bs'
import { ImBlocked } from 'react-icons/im'
import { useCart } from '../../contexts/CartContext';
import { client } from '../../lib/hygraph/graphcmsQUERY';
import Image from 'next/image';


export default function ProductDetails({ product }) {
	const { add } = useCart()
	return (
		<>
			<Head>
				<title>{`${product?.name?.toUpperCase()} - Thiz Store`}</title>
			</Head>
			<main className={style.container}>
				<picture>
					<Image className={product?.inStock === 0 ? style.imgUnavailable : ''} src={product?.images[0]?.url} alt={product?.name} width={400} height={400} />
				</picture>
				<div className={style.productsDetails}>
					<div className={style.containerStars}>
						<StarReview rating={product.rating} />
					</div>
					<h1 className={style.title}>{product?.name}.</h1>
					<p className={style.price}>R${product?.price.toFixed(2).toString().replace(".", ",")}</p>
					<span>Disponíveis: {product?.inStock}</span>
					{
						product?.inStock !== 0 ? <button onClick={() => { add(product) }} className={`${style.btn} ${style.buy}`} type='button'>comprar
							<div className={style.iconContainer}>
								<BsFillBagFill className={style.icon} />
							</div>
						</button>
							:
							<button className={`${style.btn} ${style.unavailable}`} type='button' disabled>indisponível
								<div className={style.iconContainer}>
									<ImBlocked className={style.icon} />
								</div>
							</button>
					}
				</div>
			</main>
		</>
	)
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: VIEW_PRODUCT_QUERY,
		variables: { limit: 200 }
	})
	const slug = params?.slug
	const product = data?.products.find((p) => p.slug === slug) || null
	if (!product) {
		return {
			notFound: true,
		}
	}

	return {
		props: { product },
	}
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: SLUG_QUERY,
		variables: {
			limit: 200
		}
	})
	const slugs = data?.products.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: false,
	}
}