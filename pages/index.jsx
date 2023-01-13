import Banner from "../components/home/banner/Banner";
import Head from 'next/head';
import Highlights from "../components/home/highlights/Highlights";
export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial - THIZ</title>
      </Head>
      <div className="page">
        <Banner />
        <Highlights />
      </div>
      <div className="marginFooter"></div>
    </>
  )
}