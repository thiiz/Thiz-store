import { request } from '../lib/datocms';
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from './products';


export default function Home({ data }) {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <Products data={data} />
    </main>
  )
}


export async function getStaticProps() {
  const HOMEPAGE_QUERY = `query HomePage {
    allProducts(first: "30", orderBy: price_ASC) {
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
		  slug
		}
  }`;
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { }
  });
  return {
    props: { data: data.allProducts }
  };
}