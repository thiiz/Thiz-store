import { useRouter } from 'next/router';
import { Image } from 'react-datocms'
import style from './styles/Products.module.css'
import { useState, useMemo } from 'react';


function ProductsItems({ product, grid }) {
	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/product/${product?.slug}`)
	}
	const price = product?.price.toFixed(2).toString().replace(".", ",")
	const calc = (Math.round(product?.price / 6 * 100)) / 100.0;
	const parcel = calc.toString().replace(".", ",");
	const [newGrid, setNewGrid] = useState({ productContainer: style.productContainerDefault, imageContainer: style.imageContainerDefault })


	useMemo(() => {
		if (grid === 2) return setNewGrid({ productContainer: style.productContainerTwo, imageContainer: style.imageContainerTwo })
		if (grid === 3) return setNewGrid({ productContainer: style.productContainerThree, imageContainer: style.imageContainerThree })
		return setNewGrid({ productContainer: style.productContainerDefault, imageContainer: style.imageContainerDefault })
	}, [grid])

	return (
		<div className={`${style.productContainer} ${newGrid.productContainer}`}>
			<div onClick={handleViewProduct} className={`${style.imageContainer} ${newGrid.imageContainer}`} >
				<Image className={`${style.productImg} ${product?.instock === 0 && style.imgUnavailable}`} data={product?.image.responsiveImage} alt={`imagem do produto: ${product?.image.alt}`} layout="responsive" />
			</div>
			<p onClick={handleViewProduct} className={style.title}>{product?.title}</p>
			<p className={style.price}><strong>R$ {price}</strong></p>
			<p className={style.parcel}>OU 6X <strong>R$ {parcel}</strong></p>
		</div>
	)
}

export default ProductsItems