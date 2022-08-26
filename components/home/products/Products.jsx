import Image from 'next/image'
import style from '../../../styles/Products.module.css'
import Filters from '../filters/Filters'

export default function Products({ products }) {
  return (
    <div className={`${style.content}`} id='produtos'>
      <Filters />
      <section className={style.container} >
        {products.map((product) => {
          const handleClick = () => {
            router.push(`/product/${product.slug}`)
          }
          return (
            <section key={product.id} className={style.productContainer}>
              <div>
                <div className={style.imageContainer} onClick={handleClick}>
                  <Image className={style.product} src={product.image.url} alt='Produto' width='650px' height='500px' />
                </div>
                <p onClick={handleClick} className={style.title}>{product.title}</p>
                <p>R$ {product.price}</p>
                <button className={style.buy} type='button'>comprar</button>
              </div>
            </section>
          );
        })}
      </section>
    </div>
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