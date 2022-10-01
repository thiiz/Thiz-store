import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { GoX } from 'react-icons/go'
import style from './Cart.module.css'
import { useCart } from '../../contexts/CartContext'

export function CartActions({ item }) {
	const {add, remove, removeQty} = useCart()
	const handlePlus = () => {
		add(item)
	}
	const handleMinus = () => {
		if (item.qty !== 0) {
			removeQty(item)
		}
	}
	return (
		<div className={style.actionContainer}>
			<button onClick={() => remove(item.id)} className={style.actions_Button}><GoX /></button>
			<div className={style.quantity}>
				{item.qty}
			</div>
			<button disabled={item.qty <= 1} onClick={handleMinus} className={style.actions_Button}><BiMinus /></button>
			<button disabled={item.qty === item.instock && true} onClick={handlePlus} className={style.actions_Button}><BiPlus /></button>
		</div>
	)
}