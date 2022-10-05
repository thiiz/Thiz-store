import style from './styles/CartEmpty.module.css'

export default function CartEmpty() {
	return (
		<>
			<div className={style.cartEmpty}>
				<span className={style.emptyText}>O CARRINHO ESTÁ VAZIO:(</span>
			</div>
		</>
	)
}