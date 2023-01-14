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
import { useRouter } from 'next/router'

export default function Pagamento() {
	const { auth } = useAuth()
	const { notifyError } = useNotify()
	const { setToggleLoginModal } = useToggleLoginModal()
	const { push } = useRouter()

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			getData('auth/accessToken').then(res => {
				if (res.err) {
					localStorage.removeItem("firstLogin"), notifyError({ msg: res.err })
				}
			})
			return
		}
		push({ pathname: '/', query: 'redirect=pagamento' })
		notifyError({ msg: "Você precisa fazer login para acessar essa página." })
		setToggleLoginModal(true)
	}, [])
	if (!auth.user) return null;
	return (
		<>
			<div className="page">
				<Head>
					<title>Pagamento - THIZ</title>
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
			<div className="marginFooter"></div>
		</>


	)
}