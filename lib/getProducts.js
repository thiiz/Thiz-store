import { client } from "./graphcms"
import {
	SEARCH_PAGE_PRODUCTS_QUERY,
	PREV_SEARCH_PRODUCTS_QUERY,
	RELATED_CATEGORY_PRODUCTS_QUERY,
	ALL_PRODUCTS_QUERY
} from "./Queries"


export async function getAllProducts(sort, limit) {
	const { data } = await client.query({
		query: ALL_PRODUCTS_QUERY,
		variables: {
			sort: sort,
			limit: limit
		}
	})
	return { products: data?.products }
}
export async function getSearchPageProducts({ search, limit, order }) {
	const { data } = await client.query({
		query: SEARCH_PAGE_PRODUCTS_QUERY,
		variables: {
			search: search,
			limit: limit,
			order: order
		}
	})
	return { products: data?.products }
}

export async function getPrevSearchProducts({ search }) {
	const { data } = await client.query({
		query: PREV_SEARCH_PRODUCTS_QUERY,
		variables: { search: search }
	})
	return { products: data?.products }
}

export const getProductsCategoryRelated = async ({ name, limit }) => {
	const { data } = await client.query({
		query: RELATED_CATEGORY_PRODUCTS_QUERY,
		variables: {
			limit: limit,
			name: name,
		}
	})
	return { products: data?.categories[0]?.products }
}