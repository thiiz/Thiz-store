import { getAllProducts } from '../lib/dato-cms';
import { useRouter } from 'next/router'
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Filters from '../components/filters/Filters'
import Products from './products';


function Home({ products }) {
  const router = useRouter()



  return (
    <main className="page">
      <Banner />
      <Infos />
      <Products products={products}/>
    </main>
  )
}



export async function getStaticProps() {
  const data = await getAllProducts()
  return {
    props: {
      products: data.map((data) => ({
        id: data.id,
        title: data.title,
        price: data.price,
        image: data.image,
        slug: data.slug,
        instock: data.instock,
      })),
    },
    // revalidate: 1,
  }
}

export default Home;