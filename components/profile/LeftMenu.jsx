import style from './LeftMenu.module.css'
import { FiShoppingBag } from 'react-icons/fi'
import { MdOutlineSettings } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'

export default function LeftMenu({ active, setActive }) {
	return (
		<div className={style.leftContainer}>
			<div className={style.containerTitle}><h1 className={style.title}>Minha Conta</h1></div>
			<nav className={style.header}>
				<button onClick={() => setActive("account")} className={`${style.btn} ${active === "account" && style.active}`} ><FaRegUserCircle className={style.icon} /><span>Conta</span></button>
				<button onClick={() => setActive("orders")} className={`${style.btn} ${active === "orders" && style.active}`} ><FiShoppingBag className={style.icon} /><span>Meus pedidos</span></button>
				<button onClick={() => setActive("settings")} className={`${style.btn} ${active === "settings" && style.active}`} ><MdOutlineSettings className={style.iconSettings} /><span>Configurações</span></button>
			</nav>
		</div>
	)
}