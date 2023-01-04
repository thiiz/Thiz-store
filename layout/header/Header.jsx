import style from './Header.module.css'
import { useState, useEffect } from 'react'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useIsSmall } from '../../lib/MediaQuery'
import { Fade as Hamburger } from 'hamburger-react'
import HeaderLinks from './HeaderLinks'
import ButtonsMobile from './ButtonsMobile'
import ButtonsDesktop from './ButtonsDesktop'
import HeaderLogo from './HeaderLogo'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'

function Header() {
	const [isOpenMobile, setIsOpenMobile] = useState(false)
	const scrollDirection = useScrollDirection()
	const small = useIsSmall()

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