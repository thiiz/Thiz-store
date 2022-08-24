import style from '../styles/Products.module.css'
import Image from 'next/image'
import Product from '../public/img/products/product2.jpg'


export default function Produtos({ title, price }) {
	return (
		<div className={`${style.content} page`}>
			<section className={style.container}>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' width="21" height="21" />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
				<section className={style.productContainer}>
					<Image className={style.product} src={Product} alt='Produto' />
					<a href='#'>{title}</a>
					<p>R$ {price}</p>
					<button className={style.buy} type='button'>comprar</button>
				</section>
			</section>
		</div>
	);
}
