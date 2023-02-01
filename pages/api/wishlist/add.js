import { client } from "../../../lib/hygraph/graphcmsWISHLIST";
import { CONNECT_PRODUCT_TO_WISHLIST } from "../../../lib/hygraph/Mutations";


export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await addProductToWishlist(req, res)
			break;
	}
}

const addProductToWishlist = async (req, res) => {
	try {
		const userEmail = req.body.userEmail
		const productID = req.body.productID

		await client.mutate({
			mutation: CONNECT_PRODUCT_TO_WISHLIST,
			variables: {
				userEmail: userEmail,
				productID: productID
			}
		})
		
		res.json({
			msg: "Produto adicionado a lista de desejos"
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
}