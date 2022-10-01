import { useUser } from "../contexts/GlobalState"
import { destroyCookie } from 'nookies'
import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter} from 'next/router'
export default function Profile() {
	const router = useRouter()
	const {notifyLogout } = useNotify()
	const { auth, setAuth } = useUser()
	useEffect(() => {
		if(Object.keys(auth).length === 0) router.push('/')
	},[auth])
	const handleLogout = () => {
		setAuth({})
		destroyCookie(undefined, 'refreshtoken', { path: '/api/auth/accessToken' })
		localStorage.removeItem('firstLogin')
		notifyLogout({ msg: "Login encerrado!" })
	}
	return (
		<div className='page'>
			{Object.keys(auth).length === 0 ? ''
				:
				<><button onClick={handleLogout}>xxxxxx</button>
					<p>Nome: {auth.user.name}</p>
					<p>Email: {auth.user.email}</p>
					<p>Privilegios: {auth.user.role}</p>
				</>
			}
		</div>
	)
}