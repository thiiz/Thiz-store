import {ProductFiltred} from "../components/filters/Filters"
import style from '../styles/Products.module.css'


export default function Products({ data }) {
	return (
		<>
			
			<div className={`${style.content} page`}>
				<ProductFiltred data={data} />
			</div>
		</>

	)
}
export async function getStaticProps() {
	const products = await fetch(process.env.PRODUCTS_API)
	const data = await products.json()
	return {
	  props: { data: data },
	  revalidate: 60 * 60 * 24,
	};
  }
  
