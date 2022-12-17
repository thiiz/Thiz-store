import Image from 'next/image'
import style from './styles/CartItems.module.css'
import { CartActions } from './CartActions'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import Modal from './modal/Modal'

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

export default function CartItems({ item }) {
	const { push } = useRouter()
	const [removeModal, setRemoveModal] = useState(false)
	const handleViewProduct = () => {
		push(`/produto/${item?.slug}`)
	}
	const fixPrice = item.price * item.qty
	const fixOldPrice = item.oldPrice * item.qty
	const price = `R$ ${fixPrice.toFixed(2).toString().replace(".", ",")}`;
	const oldPrice = `R$ ${fixOldPrice.toFixed(2).toString().replace(".", ",")}`;
	return (
		<>
			<div className={style.item}>
				<div className={style.containerImg}>
					<Image className={style.productImg} onClick={handleViewProduct} src={item?.image.url} width="105px" height="120px" alt={item?.title} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(105, 120))}`} placeholder="blur" />
				</div>
				<div className={style.infoProduct}>
					<div className={style.titleAndDelete}>
						<p className={style.productTitle}>{item?.title}</p>
						<button onClick={() => setRemoveModal(!removeModal)} className={style.actions_Button}><BsTrash /></button>
						{removeModal && <Modal item={item} setRemoveModal={setRemoveModal} />}
					</div>
					<div className={style.containerPriceAndActions}>
						<div className={style.priceContainer}>
							<p className={style.oldPrice}>{oldPrice}</p>
							<p className={style.price}>{price}</p>
						</div>
						<CartActions item={item} />
					</div>
				</div>
			</div>

		</>
	)
}