import { useRouter } from 'next/router';
import { Image } from 'react-datocms'
import style from '../../styles/Products.module.css'
import { useCart } from '../../contexts/CartContext'
import { useNotify } from '../../contexts/NotifyContext';


export default function ProductsItems({ stock }) {

	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/product/${stock?.slug}`)
	}
	const { add } = useCart()
	const { notifyCart } = useNotify()
	const price = `${stock?.price.toString().replace(".", ",")}0`;
	const calc = (Math.round(stock?.price / 6 * 100)) / 100.0;
	const parcel = calc.toString().replace(".", ",");
	const title = () => {
		if (stock?.title.length > 36) {
			return 
		}
		return stock.title;
	}
	return (
		<div className={style.productContainer}>
			<div onClick={handleViewProduct} className={style.imageContainer} >
				<Image className={style.productImg} data={stock?.image.responsiveImage} alt={`produto: ${stock?.image.alt}`} />
			</div>
			<p onClick={handleViewProduct} className={style.title}>{stock.title}</p>
			<p className={style.price}><strong>R$ {price}</strong></p>
			<p className={style.parcel}>OU 6X <strong>R$ {parcel}</strong></p>
			{stock?.instock !== 0 && <button onClick={() => { add(stock), notifyCart() }} className={style.buy} type='button'>comprar</button>}
			{stock?.instock === 0 && <button className={style.unavailable} type='button' disabled>indisponível</button>}
		</div>
	)
}