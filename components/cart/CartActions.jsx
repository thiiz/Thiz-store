import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { GoX } from 'react-icons/go'
import style from './Cart.module.css'

export function CartActions({ item }) {
	const [quantity, setQuantity] = useState(1)
	const handlePlus = () => {
		setQuantity(quantity + 1)
	}
	const handleMinus = () => {
		if (quantity !== 0) {
			setQuantity(quantity - 1)
		}
	}
	return (
		<div className={style.actionContainer}>
			<button className="remove"><GoX /></button>
			<div className={style.quantity}>
				{quantity}
			</div>
			<button disabled={quantity <= 1 && true} onClick={handleMinus} className="plus"><BiMinus /></button>
			<button disabled={quantity === item.instock && true} onClick={handlePlus} className="minus"><BiPlus /></button>
		</div>
	)
}