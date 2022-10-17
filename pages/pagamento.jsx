import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useNotify } from "../contexts/NotifyContext"
import { useLoginMenu } from "../contexts/LoginMenuContext"
import Paypal from '../components/pagamento/Paypal'
import { getData } from '../utils/fetchData'
import { useAuth } from '../contexts/AuthContext'
import Head from "next/head"

export default function Pagamento({ amount }) {
	const router = useRouter()
	const { notifyError } = useNotify()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth } = useAuth()
	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			getData('auth/accessToken').then(res => {
				if (res.err) return localStorage.removeItem("firstLogin")
			})
		} else {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			setToggleLoginMenu(true)
		}
	}, [])
	return (
		<>
			<Head>
				<title>Mãe Terra - Pagamento</title>
			</Head>
			{Object.keys(auth).length === 0 ? '' :
				<div className="page">
					<p>PAGINA DE PAGAMENTO</p>
					<Paypal amount={amount} />
				</div>}
		</>
	)
}