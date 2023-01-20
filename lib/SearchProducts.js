import { gql } from "@apollo/client"
import { request } from "./datocmsRequest"
import { client, getProducts } from "./graphcms"
import { PREV_SEARCH_PRODUCTS_QUERY } from "./Queries"

export async function SearchProducts(search) {
	const { data } = client.query({
		query: gql`{
				products {
				id
				name
				price
				images {
					id
					url(transformation: {document: {output: {format: webp}}})
				}
				slug
				description
			}
		  }
		`,
	})
	return console.log(data.products)
}
