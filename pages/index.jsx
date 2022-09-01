import { request } from '../lib/datocms';
import Banner from "../components/home/banner/Banner";
import Infos from '../components/home/infos/Infos'
import Products from './products';
import { useState } from 'react';
import { getData } from '../lib/queries';

export default function Home({ data }) {
  return (
    <main className="page">
      <Banner />
      <Infos />
      <Products data={data} />
    </main>
  )
}

export async function getStaticProps() {
  const data = await getData()
  return {
    props: { data: data.data }
  };
}
