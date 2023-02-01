import { client } from "../../../lib/hygraph/graphcmsWISHLIST";
import { DISCONNECT_PRODUCT_TO_WISHLIST } from "../../../lib/hygraph/Mutations";


export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await removeProductToWishlist(req, res)
			break;
	}
}

const removeProductToWishlist = async (req, res) => {
	try {
		const userEmail = req.body.userEmail
		const productID = req.body.productID

		await client.mutate({
			mutation: DISCONNECT_PRODUCT_TO_WISHLIST,
			variables: {
				userEmail: userEmail,
				productID: productID
			}
		})
		res.json({
			msg: "Produto removido da lista de desejos"
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
}