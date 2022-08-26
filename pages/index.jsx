import Image from 'next/image'
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import style from '../styles/Products.module.css'
import Filters from '../components/home/filters/Filters'

function Home({ data }) {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <div className={`${style.content}`} id='produtos'>
        <Filters />
        <section className={style.container}>
          {data.map((item) => {
            return (
              <section key={item.id} className={style.productContainer}>
                <div>
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
    { id: 2, title: 'Segunda roupa de crochê', price: '89,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
    { id: 4, title: 'Quarta roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 5, title: 'Quinta roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
    { id: 6, title: 'Sexta roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 7, title: 'Sétima roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
    { id: 8, title: 'Oitava roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 9, title: 'Nona roupa de crochê', price: '69,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
    { id: 10, title: 'Décima roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 11, title: 'Décima primeira roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 12, title: 'Décima segunda de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 13, title: 'Décima terceira de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 14, title: 'Décima quarta de roupa crochê', price: '69,90', image: '/img/products/product2.jpg' },
    { id: 15, title: 'Décima quinta de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 16, title: 'Décima sexta de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 17, title: 'Décima sétima roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 18, title: 'Décima oitava roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
    { id: 19, title: 'Décima nona roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
  ];
  return {
    props: {
      data: data,
    },
  }
}
export default Home;