import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

export function CartActions(){
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
		<>
			<button disabled={0 === 0 && true} onClick={handleMinus} className="plus"><BiMinus /></button>
			<button onClick={handlePlus} className="minus"><BiPlus /></button>
		</>
	)
}