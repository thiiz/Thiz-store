import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from './products'


export default function Home() {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <Products />
    </main>
  )
}