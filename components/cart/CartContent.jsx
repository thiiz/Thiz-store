import Link from 'next/link';
import { useCart } from '../../contexts/CartContext';
import style from './styles/Cart.module.css'
import CartItems from './CartItems';

export default function CartContent() {
	const { cart, subTotalPrice } = useCart()
	const price = subTotalPrice * 0.95
	const calc = (Math.round(subTotalPrice / 6 * 100)) / 100.0;

	return (
		<>
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
					<li className={style.summaryList}>
						<span>Calcular frete</span>
						<div className={style.zipCode}>
							<label>CEP:</label>
							<input className={style.zipCodeInput} type="text" placeholder="00000-000" maxLength="9" name="cep" />
						</div>
					</li>
				</ul>
				<div className={style.totalContainer}>
					<span className={style.totalPrice}>Total da compra</span>
					<div className={style.pagament}>
						<span className={style.spot}>á vista R$<strong>{price.toFixed(1).toString().replace(".", ",")}0</strong><span className={style.or}>ou</span></span>

						<span className={style.creditCart}>6x sem juros de R$<strong>{calc.toString().replace(".", ",")}</strong></span>
					</div>
				</div>
				<div className={style.checkout}>
					<Link href="/checkout"><a className={style.checkoutLink}>continuar</a></Link>
				</div>
			</div>
		</>
	)
}