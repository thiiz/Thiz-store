import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useToggleLoginModal } from '../contexts/LoginModalContext'
import Head from "next/head"
import Profile from "../components/profile/Profile"
import { getData } from "../utils/fetchData"


export default function Perfil() {
	const { push } = useRouter()
	const { notifyError } = useNotify()
	const { setToggleLoginModal } = useToggleLoginModal()
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
		push({ pathname: '/', query: 'redirect=perfil' })
		notifyError({ msg: "Você precisa fazer login para acessar essa página." })
		setToggleLoginModal(true)
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