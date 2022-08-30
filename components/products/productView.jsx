import { useRouter } from 'next/router';
import { useState } from 'react';
import { Image } from 'react-datocms'
import Filters from '../filters/Filters';
import style from '../../styles/Products.module.css'

export function ProductsItems({ stock }) {
	const router = useRouter()
	const handleClick = () => {
		router.push(`/product/${stock.slug}`, { locale, scroll: false })
	}
	return (
		<section key={stock.id} className={style.productContainer}>
			<div>
				<div className={style.imageContainer} onClick={handleClick}>
					<Image className={style.product} data={stock.image.responsiveImage} alt={stock.title} width='650px' height='500px' />
				</div>
				<p onClick={handleClick} className={style.title}>{stock.title}</p>
				<p>R$ {stock.price}</p>
				<button className={style.buy} type='button'>comprar</button>
				<span>{stock.instock}</span>
			</div>
		</section>
	)
}


export default function ProductView({ item }) {
	const product = item.map(product => product)
	const [stock, setStock] = useState(product)
	return (

		<div className={`${style.content}`} id='produtos'>
			<Filters />
			<section className={style.container} >
				{stock.map((stock) => {
					return (
						<ProductsItems key={stock.id} stock={stock} />
					);
				})}
			</section>
		</div>

	)
}