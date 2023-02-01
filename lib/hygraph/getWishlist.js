import { client } from "./graphcmsQUERY"
import { USER_WISHLIST } from "./Queries"

export async function getWishlist({ userEmail }) {
	const { data } = await client.query({
		query: USER_WISHLIST,
		variables: {
			userEmail,
		}
	})
	return data.wishlist?.products
}

