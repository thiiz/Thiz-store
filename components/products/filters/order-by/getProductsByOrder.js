import { client } from "../../../../lib/graphcms";
import { ALL_PRODUCTS_QUERY } from "../../../../lib/Queries";


export const getProductsByOrder = async (order) => {
	console.log(order)
	const { data } = await client.query({
		query: ALL_PRODUCTS_QUERY,
		variables: {
			order: order,
			limit: 16
		}
	})
	return { products: data?.products }
}