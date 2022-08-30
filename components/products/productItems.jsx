import { useRouter } from 'next/router';
import { Image } from 'react-datocms'
import style from '../../styles/Products.module.css'

export default function ProductsItems({ stock }) {
	const router = useRouter()
	const handleClick = () => {
		router.push(`/product/${stock.slug}`)
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