import { request } from '../lib/datocms';
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from './products';
import { ProductsContext } from '../contexts/productContext'

export default function Home({ data }) {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <ProductsContext.Provider value={{ data }}>
        <Products />
      </ProductsContext.Provider>

    </main>
  )
}

export async function getStaticProps() {
  const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    allProducts(first: $limit) {
      id
		  title
		  price
		  image {
			url
      responsiveImage(imgixParams: {fit: crop}){      
          src         
          base64
        }
		}
      color
		  slug
		}
  }`;
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 100 }
  });
  return {
    props: { data: data.allProducts }
  };
}
