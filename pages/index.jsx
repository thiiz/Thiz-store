import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Head from 'next/head';
import { ProductFiltred } from '../components/filters/Filters';
import client from '../lib/apolloclient'
import { gql } from "@apollo/client";

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
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query Products{
		allProducts(first: 30, orderBy: instock_DESC) {
		  id
		  title
		  price
		  image {
		  url
		  responsiveImage(imgixParams: {fm: webp, fit: crop}) {
			src
			base64
			alt
		  }
		  }
		  color
		  instock
		  slug
		}
		}`}
  )
  return {
    props: { data: data.allProducts },
    revalidate: 15,
  }
}
