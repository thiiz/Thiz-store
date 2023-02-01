import { client } from "./graphcmsWISHLIST";
import { CONNECT_PRODUCT_TO_WISHLIST, CREATE_WISHLIST, DISCONNECT_PRODUCT_TO_WISHLIST } from "./Mutations";

export async function createUserWishlist(email) {
	await client.mutate({
		mutation: CREATE_WISHLIST,
		variables: {
			userEmail: email,
		}
	})
}

