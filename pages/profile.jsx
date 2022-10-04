import { useAuth } from "../contexts/AuthContext"
import { destroyCookie } from 'nookies'
import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useLoginMenu } from '../contexts/LoginMenuContext'
export default function Profile() {
	const router = useRouter()
	const { notifySuccess, notifyError } = useNotify()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth, setAuth } = useAuth()
	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (!firstLogin) {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			router.push({ pathname: '/', query: 'profile=redirect' })
			setToggleLoginMenu(true)
		}
		if (router.query.profile) {
			router.replace(
				{
					query: router.query,
				},
				undefined
			)
		}
	}, [])
	const handleLogout = () => {
		if (router.pathname !== "/") {
			router.push('/')
		}
		setAuth({})
		destroyCookie(undefined, 'refreshtoken', { path: '/api/auth/accessToken' })
		localStorage.removeItem('firstLogin')
		return notifySuccess({ msg: "Login encerrado!" })
	}
	return (
		<div className='page'>
			{Object.keys(auth).length === 0 ? ''
				:
				<><button onClick={handleLogout}>SAIR</button>
					<p>Nome: {auth.user.name}</p>
					<p>Email: {auth.user.email}</p>
					<p>Privilegios: {auth.user.role}</p>
				</>
			}
		</div>
	)
}