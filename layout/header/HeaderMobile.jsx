import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import style from './Header.module.css'
import Link from 'next/link'

export default function HeaderMobile({ isOpenMobile, small, scrollDirection, setToggleLoginMenu, setOpenCart, auth, cart }) {
	return (
		<div className={!small ? style.containerBtn : style.containerBtnMobile}>
			<section className={style.btnInfoContainer}>
				<button className={`${style.btn} ${style.btnInfo}`} type='button'>
					<MdHeadsetMic />
				</button>
				<button onClick={() => setOpenCart(openCart => !openCart)} className={`${style.btn} ${style.btnInfo}`} type='button'>
					<FaShoppingCart />
					<div className={`${style.countCartItems} ${!small ? scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal : style.countCartitemsNormal}`}>{Object.keys(cart).length}</div>
				</button>
				<div className={style.userContainer}>
					{Object.keys(auth).length === 0 ?
						<button onClick={() => setToggleLoginMenu(toggleLoginMenu => !toggleLoginMenu)} className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
							<FaUserCircle className={style.avatar} />
						</button>
						:
						<>
							<Link href="/perfil">
								<a className={`${style.btn} ${style.btnInfo} ${style.btnLogin}`} type='button'>
									<FaUserCircle />
								</a>
							</Link>
							{isOpenMobile ? <p className={style.loginText}>{auth.user.name}</p> : ''}
						</>
					}
				</div>
			</section>
		</div>
	)
}