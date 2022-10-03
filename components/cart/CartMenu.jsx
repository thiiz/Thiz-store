import style from './Cart.module.css'
import CartItems from './CartItems'
import { useCart } from '../../contexts/CartContext'
import { GrClose } from 'react-icons/gr'
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { MdDeleteForever } from 'react-icons/md'
import Link from 'next/link'

export function CartMenu() {
	const { setIsOpen } = useMenuCart()
	const { cart, subTotalPrice, clearCart } = useCart()
	const price = subTotalPrice * 0.95
	const calc = (Math.round(subTotalPrice / 6 * 100)) / 100.0;

	return (
		<>
			<div className={style.container}>
				<div className={style.headerCart}>
					<button onClick={() => clearCart()} className={style.deleteAll}><MdDeleteForever className={style.deleteAllIcon} />limpar carrinho</button>
					<button onClick={() => setIsOpen(false)} className={style.closeCart}><GrClose /><p className={style.closeText}></p></button>
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
				<div className={style.btContainer}>
					<ul className={style.summaryContainer}>
						<li className={style.summaryList}><span>Valor dos produtos</span> <span>R${subTotalPrice?.toFixed(2).toString().replace(".", ",")}</span></li>
						<li className={style.summaryList}><span>Frete</span> <input type="text" placeholder="00000-000" inputmode="numeric" maxlength="9" name="cep" className=""></input></li>

					</ul>
					<div>
						<span>Total da compra</span>
						<div>
							<span>a vista {price.toFixed(1).toString().replace(".", ",")}0</span>
							<span>6x sem juros {calc.toString().replace(".", ",")}</span>
						</div>
					</div>
					<div><Link href="#"><a>continuar</a></Link></div>
				</div>
			</div>
		</>
	)
} 