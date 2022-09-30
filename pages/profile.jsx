import { useUser } from "../contexts/GlobalState"
import { destroyCookie } from 'nookies'
import { useNotify } from "../contexts/NotifyContext"
import { useEffect } from "react"
import { useRouter} from 'next/router'
export default function Profile() {
	const router = useRouter()
	const { notifyLoginPromise, notifyLoginSuccess } = useNotify()
	const { data, setData } = useUser()
	useEffect(() => {
		if(Object.keys(data).length === 0) router.push('/')
	},[data])
	const handleLogout = () => {
		notifyLoginPromise()
		setData({})
		destroyCookie(undefined, 'refreshtoken', { path: '/api/auth/accessToken' })
		localStorage.removeItem('firstLogin')
		notifyLoginSuccess({ msg: "Login encerrado!" })
	}
	return (
		<div className='page'>
			{Object.keys(data).length === 0 ? ''
				:
				<><button onClick={handleLogout}>xxxxxx</button>
					<p>Nome: {data.user.name}</p>
					<p>Email: {data.user.email}</p>
					<p>Privilegios: {data.user.role}</p>
				</>
			}
		</div>
	)
}