import { useRouter } from 'next/router';
import { Image } from 'react-datocms'
import style from '../../styles/Products.module.css'
import { useCart } from '../../contexts/CartContext'
import { BsFillBagFill } from 'react-icons/bs'
import { ImBlocked } from 'react-icons/im'
import { useState } from 'react';


export default function ProductsItems({ stock, grid }) {
	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/product/${stock?.slug}`)
	}
	const { add } = useCart()
	const price = stock?.price.toFixed(2).toString().replace(".", ",")
	const calc = (Math.round(stock?.price / 6 * 100)) / 100.0;
	const parcel = calc.toString().replace(".", ",");
	const [newGrid, setNewGrid] = useState(style.productContainerDefault)

	const Product = () => {
		if (grid === 2) {
			setNewGrid(style.productContainerTwo)
			return (
				<div onClick={handleViewProduct} className={`${style.imageContainer} ${style.imageContainerTwo}`} >
					<Image className={style.productImg} data={stock?.image.responsiveImage} alt={`produto: ${stock?.image.alt}`} />
				</div>
			)
		}
		if (grid === 3) {
			setNewGrid(style.productContainerThree)
			return (
				<div onClick={handleViewProduct} className={`${style.imageContainer} ${style.imageContainerThree}`} >
					<Image className={style.productImg} data={stock?.image.responsiveImage} alt={`produto: ${stock?.image.alt}`} />
				</div>
			)
		}
		setNewGrid(style.productContainerDefault)
		return (
			<div onClick={handleViewProduct} className={`${style.imageContainer} ${style.imageContainerDefault}`} >
				<Image className={style.productImg} data={stock?.image.responsiveImage} alt={`produto: ${stock?.image.alt}`} />
			</div>
		)
	}

	return (
		<div className={`${style.productContainer} ${newGrid}`}>
			<Product />
			<p onClick={handleViewProduct} className={style.title}>{stock.title}</p>
			<p className={style.price}><strong>R$ {price}</strong></p>
			<p className={style.parcel}>OU 6X <strong>R$ {parcel}</strong></p>
			{stock?.instock !== 0 && <button onClick={() => { add(stock) }} className={`${style.btn} ${style.buy}`} type='button'> comprar
				<div className={style.iconContainer}>
					<BsFillBagFill className={style.icon} />
				</div>
			</button>
			}
			{stock?.instock === 0 && <button onClick={() => { add(stock) }} className={`${style.btn} ${style.unavailable}`} type='button' disabled>indisponível
				<div className={style.iconContainer}>
					<ImBlocked className={style.icon} />
				</div>
			</button>
			}
		</div>
	)
}