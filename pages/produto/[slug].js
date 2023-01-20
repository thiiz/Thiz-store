import style from './slug.module.css'
import { Image } from 'react-datocms'
import { SLUG_QUERY, VIEW_PRODUCTS_QUERY } from '../../lib/Queries'
import Head from 'next/head';
import StarReview from '../../components/star-review/StarReview';
import { BsFillBagFill } from 'react-icons/bs'
import { ImBlocked } from 'react-icons/im'
import { useCart } from '../../contexts/CartContext';
import { request } from '../../lib/datocmsRequest';


export default function ProductDetails({ product }) {
	const { add } = useCart()
	return (
		<>
			<Head>
				<title>{`${product.title.toUpperCase()} - Mãe Terra`}</title>
			</Head>
			<main className={style.container}>
				<picture>
					<Image className={product.instock === 0 ? style.imgUnavailable : ''} data={product.image.responsiveImage} alt={product.title} />
				</picture>
				<div className={style.productsDetails}>
					<div className={style.containerStars}>
						<StarReview rating={product.rating} />
					</div>
					<h1 className={style.title}>{product.title}.</h1>
					<p className={style.price}>R${product.price.toFixed(2).toString().replace(".", ",")}</p>
					<span>Disponíveis: {product.instock}</span>
					{
						product.instock !== 0 ? <button onClick={() => { add(product) }} className={`${style.btn} ${style.buy}`} type='button'>comprar
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
	const data = await request({
		query: VIEW_PRODUCTS_QUERY,
		variables: {
			limit: 100
		}
	})
	const slug = params?.slug
	const product = data?.allProducts.find((p) => p.slug === slug) || null
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
	const data = await request({
		query: SLUG_QUERY,
		variables: {
			limit: 100
		}
	})
	const slugs = data?.allProducts.map((p) => ({ params: { slug: p.slug } }))
	return {
		paths: slugs,
		fallback: 'blocking',
	}
}