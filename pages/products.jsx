import ProductView  from "../components/products/productView"
import { request } from '../lib/datocms';


export default function Products({ data }) {
	return (
		<>
			<ProductView item={data} />
		</>
	)
}
export async function getStaticProps() {
	const productsApi = await fetch('http://localhost:3000/api/productsApi')
	const data = await productsApi.json()
	return {
	  props: { data: data }
	};
  }
