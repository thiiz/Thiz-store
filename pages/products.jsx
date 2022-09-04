import {ProductFiltred} from "../components/filters/Filters"
import style from '../styles/Products.module.css'
import { getData } from '../lib/queries';
import { useState } from "react";


export default function Products({ data }) {
	const [orderBy, setOrderBy] = useState("")
	return (
		<>
			
			<div className={style.content}>
				<ProductFiltred data={data} />
			</div>
		</>

	)
}
export async function getStaticProps({orderBy}) {
	const data = await getData({orderBy})
	return {
	  props: { data: data.data },
	  revalidate: 60 * 60 * 24,
	};
  }
