import { client } from "../../../lib/hygraph/graphcmsWISHLIST";
import { CREATE_WISHLIST } from "../../../lib/hygraph/Mutations";


export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await createUserWishlist(req, res)
			break;
	}
}

const createUserWishlist = async (req, res) => {
	try {
		const userEmail = req.body.userEmail
		await client.mutate({
			mutation: CREATE_WISHLIST,
			variables: {
				userEmail: userEmail,
			}
		})

		res.status(204).send()

	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
}