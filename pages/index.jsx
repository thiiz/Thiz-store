import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from './products'
import Filters from '../components/home/filters/Filters'
import style from '../styles/Products.module.css'
import Image from 'next/image'
import Product from '../public/img/products/product2.jpg'
import Product2 from '../public/img/products/product.webp'
import { GetStaticProps } from "next";

export async function getStaticProps() {
  // fetch the blog posts from the mock API
  const res = await fetch('http://localhost:3000/api/product-list');
  const dados = await res.json();

  return {
    props: {
      pic: Product,
      title: dados.title,
      price: dados.price,

      pic2: Product2,
      title2: dados.title2,
      price2: dados.price2,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 35, // In seconds
  }
}


export default function Home({ pic, pic2, title, title2, price, price2 }) {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <div className={style.content} id='produtos'>
        <Filters />
        <section className={style.container}>
          <section className={style.productContainer}>
            <div className={style.imageContainer}>
              <Image className={style.product} src={pic} alt='Produto' height='450' />
            </div>
            <a href='#'>{title}</a>
            <p>R$ {price}</p>
            <button className={style.buy} type='button'>comprar</button>
          </section>
          <section className={style.productContainer}>
            <div className={style.imageContainer}>
              <Image className={style.product} src={pic} alt='Produto' />
            </div>
            <a href='#'>{title2}</a>
            <p>R$ {price2}</p>
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

    </main>
  )
}