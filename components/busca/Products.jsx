import Image from 'next/image'
import { useRouter } from 'next/router'
import { shimmer, toBase64 } from '../../utils/loadImage'
import style from './Products.module.css'
export default function Products({ item }) {
	const { push } = useRouter()
	const handleViewProduct = () => {
		push(`/produto/${item?.slug}`)
	}
	return (
		<div className={style.container}>
			<div onClick={handleViewProduct} className={style.containerImg}>
				<Image className={style.productImg} src={item?.image?.url} width="105px" height="120px" alt={item?.title} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(105, 120))}`} placeholder="blur" />
			</div>
			<span onClick={handleViewProduct} className={style.title}>{item.title}</span>
			<span className={style.price}>R${item.price}</span>
		</div>
	)
}