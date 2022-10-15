import Link from 'next/link';
import style from './styles/Cart.module.css'
import CartItems from './CartItems';
import { useCart } from '../../contexts/CartContext';
import { useNotify } from '../../contexts/NotifyContext';
import { useLoginMenu } from '../../contexts/LoginMenuContext'
import { useRouter } from 'next/router';
import { useMenuCart } from '../../contexts/OpenCartMenuContext';

export default function CartContent() {
	const router = useRouter()
	const firstLogin = localStorage.getItem("firstLogin");
	const { notifyError } = useNotify()
	const { setToggleLoginMenu } = useLoginMenu()
	const { openCart, setOpenCart } = useMenuCart()
	const { cart, subTotalPrice } = useCart()
	const price = subTotalPrice * 0.95
	const calc = (Math.round(subTotalPrice / 6 * 100)) / 100.0;

	const checkout = (zip) => {
		if (!firstLogin) {
			setToggleLoginMenu(true)

			if (openCart) {
				setOpenCart(false)
			}
			return notifyError({ msg: "Você precisa fazer login para continuar." })
		}
	}

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
				<div className={style.summaryContainer}>
					<div className={style.summaryList}>
						<span>Valor dos produtos</span> <span>R${subTotalPrice?.toFixed(2).toString().replace(".", ",")}</span>
					</div>
				</div>
				<div className={style.totalContainer}>
					<span className={style.totalPrice}>Total da compra</span>
					<div className={style.pagament}>
						<span className={style.spot}>á vista R$<strong>{price.toFixed(1).toString().replace(".", ",")}0</strong><span className={style.or}>ou</span></span>
						<span className={style.creditCart}>6x de R$<strong>{calc.toFixed(2).toString().replace(".", ",")}</strong></span>
					</div>
				</div>
				<div onClick={() => setOpenCart(false)} className={style.checkout}>
					<Link href="/checkout"><a className={style.checkoutLink}>continuar</a></Link>
				</div>
			</div>

		</>
	)
}