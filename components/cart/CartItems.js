import { GoX } from 'react-icons/go'
import Image from 'next/image'
import style from './CartMenu.module.css'
import { CartActions } from './CartActions'

export default function CartItems({item}){
	console.log('item: ', item)
	const price = `R$${item?.price.toString().replace(".", ",")}0`;
	return (
		<div>
			<Image src={item?.image.url} width='120px' height='80px' alt={''} />
			<p>{item.title}</p>
			<p>{price}</p>
			<div className={style.Quantity_actions}>
				<button className="remove"><GoX /></button>
				<input className={style.quantity} name="quantity" defaultValue={1} type="number" />
				<CartActions />
			</div>
		</div>
	)
}