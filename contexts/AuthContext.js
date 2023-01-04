import { useRouter } from 'next/router'
import { useState } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { getData } from '../utils/fetchData'


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const { query, push } = useRouter()
	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			setIsLoading(true)
			getData('auth/accessToken').then(res => {
				setIsLoading(false)
				if (res.err) return localStorage.removeItem("firstLogin")
				setAuth({ token: res.access_token, user: res.user })
			})
		}
	}, [])

	useEffect(() => {
		if (query.redirect) {
			push(`/${query.redirect}`)
		}
	}, [auth])

	const state = {
		auth,
		setAuth,
		isLoading
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
		setAuth,
		isLoading
	} = context
	return {
		auth,
		setAuth,
		isLoading
	}
}