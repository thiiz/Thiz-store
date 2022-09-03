import { useRouter } from 'next/router';
import { Image } from 'react-datocms'
import style from '../../styles/Products.module.css'

export default function ProductsItems({ stock }) {
	const router = useRouter()
	const handleClick = () => {
		router.push(`/product/${stock.slug}`)
	}
	const price = `R$${stock.price.toString().replace(".", ",")}0`
	price
	return (
		<section className={style.productContainer}>
			<div>
				<div className={style.imageContainer} onClick={handleClick}>
					<Image className={style.product} data={stock.image.responsiveImage} alt={stock.title} width='650px' height='500px' />
				</div>
				<p onClick={handleClick} className={style.title}>{stock.title}</p>
				<p>{price}</p>
				{stock.instock !== 0 && <button className={style.buy} type='button'>comprar</button>}
				{stock.instock === 0 && <button className={style.unavailable} type='button' disabled>indisponível</button>}
			</div>
			<span>{stock.instock}</span>
		</section>
	)
}