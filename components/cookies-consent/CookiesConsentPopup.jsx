import Link from 'next/link'
import { parseCookies, setCookie } from 'nookies'
import style from './CookiesConsentPopup.module.css'
import { GrClose } from "react-icons/gr"
import { FaCookieBite } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function CookiesConsentPopup() {
	const [isAcceptedCookies, setIsAcceptedCookies] = useState(false)
	const { auth } = useAuth()
	const handleAccept = () => {
		setCookie(null, 'AcceptedCookies', "all", {
			maxAge: 86400 * 7, // 24h
			path: '/',
		})
		return setIsAcceptedCookies(false)
	}
	const handleRequired = () => {
		setCookie(null, 'AcceptedCookies', "required", {
			maxAge: 86400, // 24h
			path: '/',
		})
		return setIsAcceptedCookies(false)
	}
	const handleClose = () => {
		return setIsAcceptedCookies(false)
	}
	const handleCookieConsentPopup = () => {
		return setTimeout(() => {
			setIsAcceptedCookies(true)
		}, 4000)
	}
	useEffect(() => {
		if (parseCookies().AcceptedCookies !== "all" && parseCookies().AcceptedCookies !== "required") { handleCookieConsentPopup() }
	}, [])
	return (
		<>
			{isAcceptedCookies && Object.keys(auth).length === 0 &&
					<div className={style.container}>
						<button onClick={() => handleClose()} type='buttton' className={style.btnClose}><GrClose /></button>
						<div className={style.content}>
							<div className={style.main}>
								<h3 className={style.title}>Política de Cookies</h3>
								<span className={style.text}>Nós usamos cookies para melhorar a sua experiência de navegação. Ao utilizar nossos serviços, você concorda com a nossa <Link href='/politica'><a className={style.policy}>Politica de Privacidade.</a></Link></span>
							</div>
							<div className={style.btnContainer}>
								<button onClick={() => handleRequired()} className={`${style.btn} ${style.btnRequired}`}>Aceitar Necessários</button>
								<button onClick={() => handleAccept()} className={`${style.btn} ${style.btnAccept}`}><FaCookieBite className={style.cookieIcon} />Aceitar Todos</button>
							</div>
						</div>
				</div>}
		</>
	)
}