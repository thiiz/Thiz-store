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
	const productsApi = await fetch(process.env.PRODUCTS_API)
	const data = await productsApi.json()
	return {
	  props: { data: data }
	};
  }
