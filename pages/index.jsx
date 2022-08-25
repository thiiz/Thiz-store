import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from '../components/home/products/Products'


export default function Home() {
  return (
    <main className="page">
      <Banner />
      <Infos />
    </main>
  )
}