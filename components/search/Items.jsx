import Image from "next/image";
import style from './Item.module.css'
import { useRouter } from "next/router";

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

export default function Items({ item }) {
	const { push } = useRouter()
	const handleViewProduct = () => {
		push(`/product/${item?.slug}`)
	}
	return (
		<div className={style.container}>
			<div onClick={handleViewProduct} className={style.containerImg}>
				<Image className={style.productImg} src={item?.image.url} width="105px" height="120px" alt={item?.title} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(105, 120))}`} placeholder="blur" />
			</div>
			<span onClick={handleViewProduct} className={style.title}>{item.title}</span>
			<span className={style.price}>R${item.price.toFixed(2).toString().replace(".", ",")}</span>
		</div>
	)
}