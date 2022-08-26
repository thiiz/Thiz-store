import Image from 'next/image'
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import style from '../styles/Products.module.css'
import Filters from '../components/home/filters/Filters'
import { getAllProducts } from '../lib/dato-cms';

function Home({ products }) {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <div className={`${style.content}`} id='produtos'>
        <Filters />
        <section className={style.container}>
          {products.map((product) => {
            return (
              <section key={product.id} className={style.productContainer}>
                <div>
                  <div className={style.imageContainer}>
                    <Image className={style.product} src={product.image.url} alt='Produto' width='650px' height='500px' />
                  </div>
                  <a href='#'>{product.title}</a>
                  <p>R$ {product.price}</p>
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
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
    revalidate: 25,
  }
}
export default Home;