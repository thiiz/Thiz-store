import { useAuth } from "../contexts/AuthContext"
import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useToggleLoginModal } from '../contexts/LoginModalContext'
import Head from "next/head"
import Profile from "../components/profile/Profile"


export default function Perfil() {
	const router = useRouter()
	const { notifyError } = useNotify()
	const { setToggleLoginModal } = useToggleLoginModal()
	const { auth } = useAuth()
	useEffect(() => {
		console.log(auth)
		if (!auth.token) {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			router.push({ pathname: '/', query: 'redirect=perfil' })
			setToggleLoginModal(true)
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