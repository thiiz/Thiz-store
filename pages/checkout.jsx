import { useEffect } from "react"
import { useRouter } from "next/router"
import { useNotify } from "../contexts/NotifyContext"
import { useLoginMenu } from "../contexts/LoginMenuContext"
import Paypal from '../components/checkout/Paypal'

export default function Checkout({ amount }) {
	const router = useRouter()
	const { notifyError } = useNotify()
	const { setToggleLoginMenu } = useLoginMenu()

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (!firstLogin) {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			setToggleLoginMenu(true)
		}
	}, [])
	return (
		<div className="page">
			<p>PAGINA DE PAGAMENTO</p>
			<Paypal amount={amount}/>
		</div>
	)
}