import Image from "next/image";
import style from './Item.module.css'
import { useRouter } from "next/router";
import { toBase64, shimmer } from '../../utils/loadImage'


export default function Items({ item }) {
	const { push } = useRouter()
	const handleViewProduct = () => {
		push(`/produto/${item?.slug}`)
	}
	return (
		<div className={style.container}>
			<div onClick={handleViewProduct} className={style.containerImg}>
				<Image className={style.productImg} src={item?.image.url} width="105px" height="120px" alt={item?.title} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(105, 120))}`} placeholder="blur" />
			</div>
			<span onClick={handleViewProduct} className={style.title}>{item.title}</span>
			<span className={style.price}>R${item.price.toFixed(2).toString().replace(".", ",")}</span>
		</div>
	)
}