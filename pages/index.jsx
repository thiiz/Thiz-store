import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Head from 'next/head';
import { ProductFiltred } from '../components/filters/Filters';
import client from '../lib/apolloclient'
import { HOMEPAGE_QUERY } from "../lib/Queries";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Mãe Terra - Página Inicial</title>
      </Head>
      <div className="page">
        <Banner />
        <Infos />
        <ProductFiltred data={data} />
      </div>
      <div className="marginFooter"></div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: HOMEPAGE_QUERY
  }
  )
  return {
    props: { data: data.allProducts },
    revalidate: 60 * 60 * 24,
  }
}
