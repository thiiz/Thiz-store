import Image from 'next/image'
import style from '../../../styles/Products.module.css'
import Product from '../../../public/img/products/product2.jpg'
import Filters from '../filters/Filters'
import Link from 'next/link'
/*import Dados from '../dados/Dados'*/




export default function Products({ price }) {
	return (
		<div className={style.content}>
			<Filters />
			<section className={style.container}>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<p>R$ 99.90</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<p>R$ 99.90</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<p>R$ 99.90</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<p>R$ 99.90</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<p>R$ 99.90</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<p>R$ 99.90</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>Produto 1 ipsum dolor sit.</a>
					<button className={style.buy} type='button'>comprar</button>
				</section>
			</section>
		</div>

	)
}