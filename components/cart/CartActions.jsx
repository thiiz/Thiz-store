import { BiMinus, BiPlus } from 'react-icons/bi'
import style from './styles/CartActions.module.css'
import { useCart } from '../../contexts/CartContext'

export function CartActions({ item }) {
	const { add, removeQty } = useCart()
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
			<button disabled={item.qty <= 1} onClick={handleMinus} className={style.actions_Button}><BiMinus /></button>
			<span className={style.quantity}>{item.qty}</span>
			<button disabled={item.qty >= 10 && true} onClick={handlePlus} className={style.actions_Button}><BiPlus /></button>
		</div>
	)
}