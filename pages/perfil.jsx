import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useToggleLoginModal } from '../contexts/LoginModalContext'
import Head from "next/head"
import Profile from "../components/profile/Profile"
import { getData } from "../utils/fetchData"
import { useAuth } from "../contexts/AuthContext"


function Perfil() {
	const { push } = useRouter()
	const { notifyError } = useNotify()
	const { auth } = useAuth()
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
	if (!auth.user) return null;
	return (
		<>
			<Head>
				<title>Perfil - THIZ</title>
			</Head>
			<Profile />
		</>
	)
}

Perfil.getInitialProps = async (ctx) => {
	console.log(ctx)
	const res = await fetch('https://api.github.com/repos/vercel/next.js')
	const json = await res.json()
	return { stars: json.stargazers_count }
}

export default Perfil