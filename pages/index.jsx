import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from '../components/home/products/Products'
import { usePresence } from "framer-motion"
import { useEffect } from "react";


export default function Home() {
  const [isPresent, safeToRemove] = usePresence()
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])
  return (
    <main className="page">
      <Banner />
      <Infos />
      <Products />
    </main>
  )
}