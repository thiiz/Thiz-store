import { useRouter } from 'next/router';
import { Image } from 'react-datocms'
import style from '../../styles/Products.module.css'
import { useCart } from '../../contexts/CartContext'

import 'react-toastify/dist/ReactToastify.css';
import { useNotify } from '../../contexts/NotifyContext';


export default function ProductsItems({ stock }) {

	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/product/${stock?.slug}`)
	}
	const { add } = useCart()
	const { notifyCart } = useNotify()
	const price = `R$${stock?.price.toString().replace(".", ",")}0`;
	return (
		<section className={style.productContainer}>
			<div>
				<div className={style.imageContainer} onClick={handleViewProduct}>
					<Image className={style.product} data={stock?.image.responsiveImage} alt={`produto: ${stock?.image.alt}`} width='650px' height='500px' />
				</div>
				<p onClick={handleViewProduct} className={style.title}>{stock?.title}</p>
				<p>{price}</p>
				{stock?.instock !== 0 && <button onClick={() => { add(stock), notifyCart() }} className={style.buy} type='button'>comprar</button>}
				{stock?.instock === 0 && <button className={style.unavailable} type='button' disabled>indisponível</button>}
			</div>
		</section>
	)
}