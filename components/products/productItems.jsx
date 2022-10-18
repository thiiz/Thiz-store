import { useRouter } from 'next/router';
import { Image } from 'react-datocms'
import style from '../../styles/Products.module.css'
import { useCart } from '../../contexts/CartContext'
import { BsFillBagFill } from 'react-icons/bs'
import { ImBlocked } from 'react-icons/im'
import { useState, memo } from 'react';
import { useEffect } from 'react';


function ProductsItems({ stock, grid }) {
	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/product/${stock?.slug}`)
	}
	const { add } = useCart()
	const price = stock?.price.toFixed(2).toString().replace(".", ",")
	const calc = (Math.round(stock?.price / 6 * 100)) / 100.0;
	const parcel = calc.toString().replace(".", ",");
	const [newGrid, setNewGrid] = useState({ productContainer: style.productContainerDefault, imageContainer: style.imageContainerDefault })


	useEffect(() => {
		if (grid === 2) return setNewGrid({ productContainer: style.productContainerTwo, imageContainer: style.imageContainerTwo })
		if (grid === 3) return setNewGrid({ productContainer: style.productContainerThree, imageContainer: style.imageContainerThree })
		return setNewGrid({ productContainer: style.productContainerDefault, imageContainer: style.imageContainerDefault })
	}, [grid])

	return (
		<div className={`${style.productContainer} ${newGrid.productContainer}`}>
			<div onClick={handleViewProduct} className={`${style.imageContainer} ${newGrid.imageContainer}`} >
				<Image className={style.productImg} data={stock?.image.responsiveImage} alt={`produto: ${stock?.image.alt}`} />
			</div>
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

export default memo(ProductsItems);