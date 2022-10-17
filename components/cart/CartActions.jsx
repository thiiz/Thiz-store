import { BiMinus, BiPlus } from 'react-icons/bi'
import { GoX } from 'react-icons/go'
import style from './styles/Cart.module.css'
import { useCart } from '../../contexts/CartContext'
import Modal from '../modal/modal'
import { useState } from 'react'

export function CartActions({ item }) {
	const { add, removeQty } = useCart()
	const [removeModal, setRemoveModal] = useState(false)
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
			<button onClick={() => setRemoveModal(!removeModal)} className={style.actions_Button}><GoX /></button>
			{removeModal && <Modal item={item} setRemoveModal={setRemoveModal} />}
			<span className={style.quantity}>{item.qty}</span>
			<button disabled={item.qty <= 1} onClick={handleMinus} className={style.actions_Button}><BiMinus /></button>
			<button disabled={item.qty >= 10 && true} onClick={handlePlus} className={style.actions_Button}><BiPlus /></button>
		</div>
	)
}