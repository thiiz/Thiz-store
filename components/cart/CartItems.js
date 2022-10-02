import Image from 'next/image'
import style from './Cart.module.css'
import { CartActions } from './CartActions'
import { useRouter } from 'next/router'

export default function CartItems({ item }) {
	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/product/${item?.slug}`)
	}
	const price = `R$${item?.price.toString().replace(".", ",")}0`;
	return (
		<>
			<div className={style.item}>
				<div className={style.containerImg}>
					<Image className={style.productImg} onClick={handleViewProduct} src={item?.image.url} width="105" height="120px" alt={item?.title} blurDataURL placeholder="blur" />
				</div>
				<div className={style.infoProduct}>
					<div className={style.Quantity_actions}>
						<div className={style.titleAndPrice}>
							<p className={style.productTitle}>{item?.title}</p>
							<p className={style.price}>{price}</p>
						</div>
						<CartActions item={item} />
					</div>
				</div>
			</div>

		</>
	)
}