import style from './Notify.module.css'

export default function NotifyCart() {


	return (
		<div className={style.notify_cart_container}>
			<h5 className={style.product_added}>Produto adicinado ao carrinho!</h5>
		</div>
	)
}