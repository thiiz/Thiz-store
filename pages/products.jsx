import {ProductFiltred} from "../components/filters/Filters"
import style from '../styles/Products.module.css'
import { getData } from '../lib/queries';
import { useState } from "react";


export default function Products({ data }) {
	return (
		<>
			
			<div className={style.content}>
				<ProductFiltred data={data} />
			</div>
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
