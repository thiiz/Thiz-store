import { client } from "./graphcms"
import { PREV_SEARCH_PRODUCTS_QUERY } from "./Queries"

export async function searchProducts({ search }) {
	const { data } = await client.query({
		query: PREV_SEARCH_PRODUCTS_QUERY,
		variables: { search: search }
	})
	return { data: data?.products }
}
