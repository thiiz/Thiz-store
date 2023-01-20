import { useRouter } from 'next/router';
import style from './styles/Products.module.css'
import { useState, useMemo } from 'react';
import Image from 'next/image';


function ProductsItems({ product, grid }) {
	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/produto/${product?.slug}`)
	}
	const price = product?.price.toFixed(2).toString().replace('.', ',')
	const oldprice = product?.oldPrice?.toFixed(2).toString().replace('.', ',')
	const calcParcel = (Math.round(product?.price / 6 * 100)) / 100.0;
	const parcel = calcParcel.toString().replace(".", ",");
	const [newGrid, setNewGrid] = useState({ productContainer: style.productContainerDefault, imageContainer: style.imageContainerDefault })

	useMemo(() => {
		if (grid === 2) return setNewGrid({ productContainer: style.productContainerTwo, imageContainer: style.imageContainerTwo })
		if (grid === 3) return setNewGrid({ productContainer: style.productContainerThree, imageContainer: style.imageContainerThree })
		return setNewGrid({ productContainer: style.productContainerDefault, imageContainer: style.imageContainerDefault })
	}, [grid])

	return (
		<div className={`${style.productContainer} ${newGrid.productContainer}`}>
			<div onClick={handleViewProduct} className={`${style.imageContainer} ${newGrid.imageContainer}`} >
				<Image className={`${style.productImg} ${product?.inStock === 0 && style.imgUnavailable}`}
					src={product?.images[0]?.url}
					alt={product?.images[0]?.fileName}
					sizes='100%'
					fill />
			</div>
			<p onClick={handleViewProduct} className={style.title}>{product?.name}</p>
			<div className={style.containerPrice}>
				<div className={style.div}></div>
				<p className={style.price}><strong>R$ {price}</strong></p>
				{product?.oldPrice ?
					<p className={style.oldPrice}><strong>R$ {oldprice}</strong></p>
					:
					<p className={style.parcel}>ou 6X <strong>R$ {parcel}</strong></p>
				}
			</div>
		</div>
	)
}

export default ProductsItems