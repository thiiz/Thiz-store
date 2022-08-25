import Image from 'next/image'
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from '../components/home/products/Products'
import style from '../styles/Products.module.css'
import Filters from '../components/home/filters/Filters'


export default function Home({ data }) {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <div className={`${style.content}`} id='produtos'>
        <Filters />
        <section className={style.container}>
          {data.map((item) => {
            return (
              <section className={style.productContainer}>
                <div key={item.id}>
                  <div className={style.imageContainer}>
                    <Image className={style.product} src={item.image} alt='Produto' width='650' height='500px' />
                  </div>
                  <a href='#'>{item.title}</a>
                  <p>R$ {item.price}</p>
                  <button className={style.buy} type='button'>comprar</button>
                </div>
              </section>
            );
          })}
        </section>
      </div>
    </main>
  )
}
export async function getStaticProps() {
  const data = [
    { id: 1, title: 'Primeira roupa de crochê', price: '99,90', image: '/img/products/product2.jpg' },
    { id: 2, title: 'Segunda roupa de crochê', price: '89,90', image: '/img/products/product2.jpg' },
    { id: 4, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 5, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 6, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 7, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 8, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 9, title: 'Terceira roupa de crochê', price: '69,90', image: '/img/products/product2.jpg' },
    { id: 10, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 11, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 12, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 13, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 14, title: 'Terceira roupa de crochê', price: '69,90', image: '/img/products/product2.jpg' },
    { id: 15, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 16, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 17, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 18, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 19, title: 'Terceira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
  ];
  return {
    props: {
      data: data,
    },
  };
}