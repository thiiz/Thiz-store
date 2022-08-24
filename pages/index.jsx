import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Filters from '../components/home/filters/Filters'
import style from '../styles/Products.module.css'
import Image from 'next/image'
import Product from '../public/img/products/product2.jpg'
import AnimatePresence from 'framer-motion'


export default function Home() {
  return (
    <AnimatePresence>
      <main className="page">
        <Banner />
        <Infos />
        <div className={style.content} id='produtos'>
          <Filters />
          <section className={style.container}>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
            <section className={style.productContainer}>
              <div className={style.imageContainer}>
                <Image className={style.product} src={Product} alt='Produto' height='450' />
              </div>
              <a href='#'>Roupa de Crochê azul</a>
              <p>R$ 99.90</p>
              <button className={style.buy} type='button'>comprar</button>
            </section>
          </section>
        </div>
      </main>
    </AnimatePresence>
  )
}