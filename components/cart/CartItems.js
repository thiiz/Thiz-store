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
				<div>
					<Image onClick={handleViewProduct} src={item?.image.url} className={style.cartMenuImg} width='110px' height='80px' max-width='110px' alt={''} />
					<p>{item.title}</p>
				</div>
				<div>
					<p>{price}</p>
				</div>
			</div>
			<div className={style.Quantity_actions}>
				<CartActions item={item} />
			</div>
		</>
	)
}