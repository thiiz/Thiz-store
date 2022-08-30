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
	const productsApi = await fetch('http://localhost:3000/api/productsApi')
	const data = await productsApi.json()
	return {
	  props: { data: data }
	};
  }