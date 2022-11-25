import style from './Header.module.css'
import { useState, useEffect } from 'react'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useIsSmall } from '../../lib/MediaQuery'
import { Fade as Hamburger } from 'hamburger-react'
import { useAuth } from '../../contexts/AuthContext'
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useRouter } from 'next/router'
import HeaderLinks from './HeaderLinks'
import ButtonsMobile from './ButtonsMobile'
import ButtonsDesktop from './ButtonsDesktop'
import { useContextModalLogin } from '../../contexts/ModalLoginContext'
import HeaderLogo from './HeaderLogo'

function Header() {
	const { auth } = useAuth()
	const { isLoginModal, setIsLoginModal } = useContextModalLogin()
	const router = useRouter()
	const { toggleLoginMenu } = useLoginMenu()
	const [isOpenMobile, setIsOpenMobile] = useState(false)
	const { openCart } = useMenuCart()
	const scrollDirection = useScrollDirection()

	const small = useIsSmall()

	useEffect(() => {
		if (toggleLoginMenu || openCart) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [toggleLoginMenu, openCart]);


	useEffect(() => {
		if (router.query.redirect) {
			window.history.replaceState(null, '', '/')
		}
	}, [toggleLoginMenu])

	useEffect(() => {
		if (isLoginModal && router.pathname === "/perfil" || auth) return setIsLoginModal(false)
	}, [router.pathname, auth])

	return (
		<>
			<header className={`${style.header} ${scrollDirection !== 'down' ? style.headerNormal : style.headerSmall}`} >
				<HeaderLogo scrollDirection={scrollDirection} />
				{small &&
					<>
						<ButtonsMobile isOpenMobile={isOpenMobile} setIsOpenMobile={setIsOpenMobile} />
						<div className={style.menuHamburguer}><Hamburger toggled={isOpenMobile} toggle={() => setIsOpenMobile(isOpenMobile => !isOpenMobile)} distance="lg" size={34} easing="ease-in" style="bottom: 2px;" /></div>
					</>}
				<nav className={style.menuBtn}>
					<HeaderLinks />
				</nav>
				<div className={!small ? style.containerBtn : style.containerBtnMobile}>
					{!small &&
						<ButtonsDesktop />
					}
				</div>
			</header>
		</>
	)
}
export default Header