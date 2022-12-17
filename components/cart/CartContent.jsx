import Link from 'next/link';
import style from './styles/Cart.module.css'
import CartItems from './CartItems';
import { useCart } from '../../contexts/CartContext';
import { useMenuCart } from '../../contexts/OpenCartMenuContext';

export default function CartContent() {
	const { setOpenCart } = useMenuCart()
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
				<div className={style.summaryContainer}>
					
				</div>
				<div className={style.totalContainer}>
					<span className={style.totalPrice}>Total da compra</span>
					<div className={style.pagament}>
						<span className={style.spot}><strong className={style.price}>R$ {price.toFixed(1).toString().replace(".", ",")}0</strong></span>
					</div>
				</div>
				<div onClick={() => setOpenCart(false)} className={style.checkout}>
					<Link href="/pagamento"><a className={style.checkoutLink}>continuar</a></Link>
				</div>
			</div>

		</>
	)
}