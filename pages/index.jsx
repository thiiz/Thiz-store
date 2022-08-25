import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from '../components/home/products/Products'


export default function Home() {
  return (
    <div className="page">
      <Banner />
      <Infos />
      <Products />
    </div>
  )
}