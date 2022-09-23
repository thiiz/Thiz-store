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
	const parcel = (Math.round(stock?.price / 6 * 100))/100.0;
	const title = () => {
		if (stock?.title.length > 34) {
		   return stock.title.substring(0, 35) + '...';
		}
		return stock.title;
	 }
	return (
		<div className={style.productContainer}>
				<div className={style.imageContainer} onClick={handleViewProduct}>
					<Image className={style.productImg} data={stock?.image.responsiveImage} alt={`produto: ${stock?.image.alt}`}/>
				</div>
				<p onClick={handleViewProduct} className={style.title}>{title()}</p>
				<p className={style.price}>R$ <strong>{price}</strong></p>
				<p className={style.parcel}>OU 6X R$ {parcel}</p>
				{stock?.instock !== 0 && <button onClick={() => { add(stock), notifyCart() }} className={style.buy} type='button'>comprar</button>}
				{stock?.instock === 0 && <button className={style.unavailable} type='button' disabled>indisponível</button>}
		</div>
	)
}