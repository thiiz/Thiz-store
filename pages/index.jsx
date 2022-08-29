import { sortLow, getAllProducts } from '../lib/dato-cms';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import style from '../styles/Products.module.css'
import Filters from '../components/filters/Filters'
import { useState } from 'react';
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
  const products = await fetch(`${process.env.BASE_URL_DEV}/api/productsApi`) 
  const data = await products.json()
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