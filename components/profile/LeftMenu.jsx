import style from './LeftMenu.module.css'
import { FiShoppingBag } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'

export default function LeftMenu({ active, setActive }) {
	const { auth } = useAuth()
	return (
		<div className={style.leftContainer}>
			<div className={style.containerTitle}>
				<h1 className={style.title}>Perfil de {auth.user.role === "admin" ? "admin" : "usuário"}</h1>
			</div>
			<nav className={style.header}>
				<button onClick={() => setActive("account")} className={`${style.btn} ${active === "account" && style.active}`} ><FaRegUserCircle className={style.icon} /><span>Conta</span></button>
				<button onClick={() => setActive("orders")} className={`${style.btn} ${active === "orders" && style.active}`} ><FiShoppingBag className={style.icon} /><span>Meus pedidos</span></button>
			</nav>
		</div>
	)
}