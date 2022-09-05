import Banner from '../components/home/banner/Banner'
import Infos from '../components/home/infos/Infos'
import style from '../styles/Products.module.css'
import Head from 'next/head';
import { ProductFiltred } from '../components/filters/Filters';
import useSWR from 'swr'



export default function Home({allProducts}) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(process.env.PRODUCTS_API, fetcher, { fallbackData: allProducts, refreshInterval: 10000 })
  if (error) return console.log('data: ', data)
  if (!data) return <div>loading...</div>
  return (
    <>
      <Head>
        <title>Mãe Terra - Loja de crochê</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Loja de Crochê - MãeTerra"></meta>
      </Head>
      <main className="page">
        <Banner />
        <Infos />
        <div className={style.content}>
          <ProductFiltred data={data} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const products = await fetch(process.env.PRODUCTS_API)
  const data = await products.json()
  return {
    props: { allProducts: data },
    revalidate: 1,
  };
}
