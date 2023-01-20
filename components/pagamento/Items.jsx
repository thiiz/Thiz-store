import { useCart } from '../../contexts/CartContext'
import style from './Items.module.css'
import Image from 'next/image'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#fff" offset="20%" />
      <stop stop-color="#ddd" offset="50%" />
      <stop stop-color="#fff" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#cecece" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

export default function Items() {
	const { cart, subTotalPrice } = useCart()
	return (
		<section className={style.container}>
			<div className={style.content}>
				<div>
					<div className={style.columns}>
						<h3>Seu carrinho.</h3>
					</div>
					{cart?.map((item) => {
						const qty = item?.price * item?.qty
						const price = `R$${qty.toFixed(2).toString().replace(".", ",")}`
						return (
							<div className={style.products} key={item?.id} item={item} >
								<div className={style.containerImg}>
									<Image className={style.productImg} src={item?.images[0]?.url} width={100} height={120} alt={item?.images[0]?.fileName} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(105, 120))}`} placeholder="blur" />
									<div className={style.productCount}>{item?.qty}</div>
								</div>
								<div>
									<span>{item?.name}</span>
									<span>{price}</span>
								</div>
							</div>
						);
					})}
				</div>
				<span>R${subTotalPrice.toFixed(2).toString().replace(".", ",")}</span>
			</div>
		</section>
	)
}