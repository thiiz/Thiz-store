import { useState } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { getData } from '../utils/fetchData'
import Loader from '../components/load-screen/Loader'


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({})
	const [loadingAuth, setLoadingAuth] = useState(true)
	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			getData('auth/accessToken').then(res => {
				if (res.err) {
					setLoadingAuth(false)
					return localStorage.removeItem("firstLogin")
				}
				setAuth({ token: res.access_token, user: res.user })
			})
			setLoadingAuth(false)
		}
	}, [])

	if (loadingAuth) {
		return <Loader />
	}

	const state = {
		auth,
		setAuth
	}

	return (
		<AuthContext.Provider value={state}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	const {
		auth,
		setAuth
	} = context
	return {
		auth,
		setAuth
	}
}