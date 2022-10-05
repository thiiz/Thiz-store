import Image from 'next/image'
import style from './styles/Cart.module.css'
import { CartActions } from './CartActions'
import { useRouter } from 'next/router'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function CartItems({ item }) {
	const router = useRouter()
	const handleViewProduct = () => {
		router.push(`/product/${item?.slug}`)
	}

	const price = `R$${item?.price.toString().replace(".", ",")}0`;
	return (
		<>
			<div className={style.item}>
				<div className={style.containerImg}>
					<Image className={style.productImg} onClick={handleViewProduct} src={item?.image.url} width="105" height="120px" alt={item?.title} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} placeholder="blur" />
				</div>
				<div className={style.infoProduct}>
					<div className={style.titleAndPrice}>
						<p className={style.productTitle}>{item?.title}</p>
						<p className={style.price}>{price}</p>
					</div>
					<CartActions item={item} />
				</div>
			</div>

		</>
	)
}