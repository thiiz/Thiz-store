import style from './CartMenu.module.css'
import CartItems from './CartItems'
import { useState, useEffect } from 'react'
import { useCart } from '../../contexts/CartContext'





export function CartMenu() {
	const { cart } = useCart()
	return (
		<div className={style.container}>
			<div>Meu Carrinho</div>
			{cart?.map((item) => {
					return (
						<CartItems key={item.id} item={item}/>
					);
				})}
		</div >
	)
} 