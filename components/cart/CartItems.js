import Image from 'next/image'
import style from './styles/CartItems.module.css'
import { CartActions } from './CartActions'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import ModalRemove from './modal/ModalRemove'
import { shimmer, toBase64 } from '../../utils/loadImage'

export default function CartItems({ item }) {
	const { push } = useRouter()
	const [remove, setRemove] = useState(false)
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
					<Image className={style.productImg} onClick={handleViewProduct} src={item?.image.url} fill sizes='100%' blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(105, 120))}`} placeholder="blur" />
				</div>
				<div className={style.infoProduct}>
					<div className={style.titleAndDelete}>
						<p className={style.productTitle}>{item?.title}</p>
						<button onClick={() => setRemove(!remove)} className={style.actions_Button}><BsTrash /></button>
						{remove && <ModalRemove item={item} setRemoveModal={setRemove} />}
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