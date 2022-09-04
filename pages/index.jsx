import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import style from '../styles/Products.module.css'
import { getData } from '../lib/queries';
import Head from 'next/head';
import { ProductFiltred } from '../components/filters/Filters';


export default function Home({ data }) {
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
  const data = await getData()
  return {
    props: { data: data.data },
    revalidate: 60 * 60 * 24,
  };
}
