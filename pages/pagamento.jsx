import style from '../styles/Checkout.module.css'
import { useEffect, useState } from "react"
import { useNotify } from "../contexts/NotifyContext"
import { useToggleLoginModal } from "../contexts/LoginModalContext"
import Paypal from '../components/pagamento/Paypal'
import { getData } from '../utils/fetchData'
import { useAuth } from '../contexts/AuthContext'
import Head from "next/head"
import Inputs from '../components/pagamento/Inputs'
import Items from '../components/pagamento/Items'

export default function Pagamento() {
	const { auth } = useAuth()
	const { notifyError } = useNotify()
	const { setToggleLoginModal } = useToggleLoginModal()

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			getData('auth/accessToken').then(res => {
				if (res.err) return localStorage.removeItem("firstLogin")
			})
		} else {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			setToggleLoginModal(true)
		}
	}, [])

	return (
		<>
			{Object.keys(auth).length === 0 ? '' :
				<div className="page">
					<Head>
						<title>Mãe Terra - Pagamento</title>
					</Head>
					<div className={style.container}>

						<Items />
						<div className={style.checkout}>
							<h1 className={style.title}>FINALIZAR COMPRA</h1>
							<Inputs />
							<>
								<Paypal />
							</>
						</div>
					</div>
				</div>
			}
			<div className="marginFooter"></div>
		</>


	)
}