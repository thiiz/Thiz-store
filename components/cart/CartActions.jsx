import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { GoX } from 'react-icons/go'
import style from './Cart.module.css'
import { useCart } from '../../contexts/CartContext'

export function CartActions({ item }) {
	const {add, remove} = useCart()
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
			<button onClick={() => remove(item.id)} className={style.actions_Button}><GoX /></button>
			<div className={style.quantity}>
				{quantity}
			</div>
			<button disabled={quantity <= 1 && true} onClick={handleMinus} className={style.actions_Button}><BiMinus /></button>
			<button disabled={quantity === item.instock && true} onClick={handlePlus} className={style.actions_Button}><BiPlus /></button>
		</div>
	)
}