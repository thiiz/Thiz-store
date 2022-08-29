import { useRouter } from 'next/router';
import { useState } from 'react';
import Filters from '../components/filters/Filters';
import Image from 'next/image'; { }
import style from '../styles/Products.module.css'

export function ProductsItems({ stock }) {
	const router = useRouter()
	const handleClick = () => {
		router.push(`/product/${stock.slug}`)
	}
	return (
		<section key={stock.id} className={style.productContainer}>
			<div>
				<div className={style.imageContainer} onClick={handleClick}>
					<Image className={style.product} src={stock.image.url} alt='Produto' width='650px' height='500px' />
				</div>
				<p onClick={handleClick} className={style.title}>{stock.title}</p>
				<p>R$ {stock.price}</p>
				{<button className={style.buy} type='button'>comprar</button>}
				<span>{stock.instock}</span>
			</div>
		</section>
	)
}


export function Products({ products }) {
	const product = products.map(product => product)
	const [stock, setStock] = useState(product)
	return (

		<div className={`${style.content}`} id='produtos'>
			<Filters />
			<section className={style.container} >
				{stock.filter(instock => instock.instock > 0).map((stock) => {
					return (
						<ProductsItems key={stock.id} stock={stock} />
					);
				})}
			</section>
		</div>

	)
}

export async function getStaticProps() {
	const data = await getAllProducts()
	return {
		props: {
			products: data.map((data) => ({
				id: data.id,
				title: data.title,
				price: data.price,
				image: data.image,
				slug: data.slug,
				instock: data.instock,
			})),

		},
		revalidate: 1,
	}
}

export default Products
