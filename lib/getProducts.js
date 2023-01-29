import { client } from "./graphcms"
import {
	PREV_SEARCH_PRODUCTS_QUERY,
	RELATED_CATEGORY_PRODUCTS_QUERY,
	PAGINATION_PRODUCTS_QUERY
} from "./Queries"


export async function getAllProducts(search, limit, sort, skip) {
	const { data } = await client.query({
		query: PAGINATION_PRODUCTS_QUERY,
		variables: {
			search: search,
			limit: limit,
			sort: sort,
			skip: skip || 0
		}
	})
	const products = data?.productsConnection.edges.map(({ node }) => node);
	const pageInfo = data?.productsConnection.pageInfo
	return {
		products,
		pageInfo,
	}
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