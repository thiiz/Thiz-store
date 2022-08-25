import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from '../components/home/products/Products'
import Transition from '../components/transition/Transition';


export default function Home() {
  return (
    <Transition>
      <main className="page">
        <Banner />
        <Infos />
        <Products />
      </main>
    </Transition>
  )
}