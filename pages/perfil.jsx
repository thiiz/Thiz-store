import { useAuth } from "../contexts/AuthContext"
import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useToggleLoginModal } from '../contexts/LoginModalContext'
import Head from "next/head"
import Profile from "../components/profile/Profile"


export default function Perfil() {
	const { pathname, push } = useRouter()
	const { notifyError } = useNotify()
	const { toggleLoginModal, setToggleLoginModal } = useToggleLoginModal()
	const { auth } = useAuth()
	useEffect(() => {
		if (!auth.token) {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			push({ pathname: '/', query: 'redirect=perfil' })
			setToggleLoginModal(true)
		}
	}, [])
	return (
		<>
			<Head>
				<title>Perfil - THIZ</title>
			</Head>
			<Profile />
		</>
	)
}