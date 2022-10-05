import style from './styles/CartEmpty.module.css'
import HeaderCart from './HeaderCart'

export default function CartEmpty() {
	return (
		<>
			<div className={style.cartEmpty}>
				<span className={style.emptyText}>O CARRINHO ESTÁ VAZIO:(</span>
			</div>
		</>
	)
}