import Banner from "../components/home/banner/Banner";
import Head from 'next/head';
import Highlights from "../components/home/highlights/Highlights";
import { Page } from "../styles/page";
export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial | Thiz</title>
      </Head>
      <Page>
        <Banner />
        <Highlights />
      </Page>
      <div className="marginFooter"></div>
    </>
  )
}