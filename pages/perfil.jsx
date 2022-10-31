import { useAuth } from "../contexts/AuthContext"
import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useLoginMenu } from '../contexts/LoginMenuContext'
import Head from "next/head"
import Profile from "../components/profile/Profile"


export default function Perfil() {
	const router = useRouter()
	const { notifyError } = useNotify()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth } = useAuth()
	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (!firstLogin) {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			router.push({ pathname: '/', query: 'redirect=perfil' })
			setToggleLoginMenu(true)
		}
	}, [])
	return (
		<>
			<Head>
				<title>Mãe Terra - Perfil</title>
			</Head>
			<Profile />
		</>
	)
}