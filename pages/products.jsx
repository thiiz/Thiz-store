import { getAllProducts } from '../lib/dato-cms';
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../styles/Products.module.css'


function Products({ products }) {
	const router = useRouter()

	return (
		<section className="page">
			<div className={`${style.content}`} id='produtos'>
				<section className={style.container} >
					{products?.map((product) => {
						const handleClick = () => {
							router.push(`/product/${product.slug}`)
						}
						return (
							<section key={product.id} className={style.productContainer}>
								<div>
									<div className={style.imageContainer} onClick={handleClick}>
										<Image className={style.product} src={product.image.url} alt='Produto' width='650px' height='500px' />
									</div>
									<p onClick={handleClick} className={style.title}>{product.title}</p>
									<p>R$ {product.price}</p>
									<button className={style.buy} type='button'>comprar</button>
								</div>
							</section>
						);
					})}
				</section>
			</div>
		</section>
	)
}

export async function getStaticProps() {
	const products = await getAllProducts()

	return {
		props: {
			products,
		},
		revalidate: 120,
	}
}
export default Products
