import style from './Cart.module.css'
import CartItems from './CartItems'
import { useCart } from '../../contexts/CartContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { MdDeleteForever } from 'react-icons/md'
import Link from 'next/link'

export function CartMenu() {
	const { setIsOpen } = useMenuCart()
	const { cart, subTotalPrice, clearCart } = useCart()
	const price = subTotalPrice * 0.95
	const calc = (Math.round(subTotalPrice / 6 * 100)) / 100.0;

	return (
		<div className={style.container}>
			<div className={style.headerCart}>
				<button onClick={() => clearCart()} className={style.deleteAll}><MdDeleteForever className={style.deleteAllIcon} />limpar carrinho</button>

				<button onClick={() => setIsOpen(false)} className={style.closeBtn}><AiOutlineCloseCircle /><p className={style.closeText}>Fechar</p></button>
				<p className={style.titleMyCart}>meu carrinho</p>
			</div>
			<div className={style.content}>
				<div className={style.containerProduct}>
					<div className={style.product}>
						{cart?.map((item) => {
							return (
								<CartItems key={item.id} item={item} />
							);
						})}
					</div>
				</div >
			</div>
			<div className={style.sideContainer}>
				<ul>
					<li><span>Valor dos produtos</span> <span>{`${subTotalPrice?.toFixed(2).toString().replace(".", ",")}`}</span></li>
					<li><span>Frete</span> <input type="text" placeholder="00000-000" inputmode="numeric" maxlength="9" name="cep" className=""></input></li>

				</ul>
				<div>
					<span>Total da compra</span>
					<div>
						<span>a vista {price.toFixed(2).toString().replace(".", ",")}</span>
						<span>6x sem juros {calc.toString().replace(".", ",")}</span>
					</div>
				</div>
				<div><Link href="#"><a>continuar</a></Link></div>
			</div>
		</div>
	)
} 