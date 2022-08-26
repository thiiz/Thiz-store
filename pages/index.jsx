import { getAllProducts } from '../lib/dato-cms';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import style from '../styles/Products.module.css'
import Filters from '../components/home/filters/Filters'

function Home({ products }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${products.slug}`)
  }
  return (
    <main className="page">
      <Banner />
      <Infos />
      <div className={`${style.content}`} id='produtos'>
        <Filters />
        <section className={style.container} onClick={handleClick}>
          {products.map((product) => {
            return (
              <section key={product.id} className={style.productContainer}>
                <div>
                  <div className={style.imageContainer}>
                    <Image className={style.product} src={product.image.url} alt='Produto' width='650px' height='500px' />
                  </div>
                  <a href='#'>{product.title}</a>
                  <p>R$ {product.price}</p>
                  <p>R$ {product.slug}</p>
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
    revalidate: 120,
  }
}
export default Home;