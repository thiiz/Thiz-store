import style from './Notify.module.css'

export function NotifyCart() {


	return (
		<div className={style.notify_cart_container}>
			<h5 className={style.product_added}>Produto adicinado ao carrinho!</h5>
		</div>
	)
}

export function NotifyLoading() {


	return (
		<div className={style.notify_cart_container}>
			<h5 className={style.product_added}>Verificando acesso...</h5>
		</div>
	)
}

export function NotifyRegistred() {


	return (
		<div className={style.notify_cart_container}>
			<h5 className={style.product_added}>Cadastrado com sucesso!</h5>
		</div>
	)
}

export function NotifyLogout() {


	return (
		<div className={style.notify_cart_container}>
			<h5 className={style.product_added}>Login encerrado!</h5>
		</div>
	)
}