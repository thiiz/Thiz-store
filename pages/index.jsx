import { request } from '../lib/datocms';
import { useRouter } from 'next/router'
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Filters from '../components/filters/Filters'
import Products from './products';
import ProductView  from "../components/products/productView"


export default function Home({ data }) {
  const products = data.allProducts;
  const router = useRouter()
  console.log(products)



  return (
    <main className="page">
      <Banner />
      <Infos />
      <ProductView item={products} />
    </main>
  )
}


export async function getStaticProps() {
  const HOMEPAGE_QUERY = `query HomePage {
    allProducts(orderBy: price_ASC) {
      id
		  title
		  price
		  image {
      responsiveImage(imgixParams: {fit: crop}){                
          src         
          base64
        }
		}
		  slug
		}
  }`;
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { }
  });
  return {
    props: { data }
  };
}