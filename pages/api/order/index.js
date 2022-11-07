import connectDB from '../../../lib/connectDB'
import Orders from '../../../models/orderModels'
import auth from '../../../middleware/auth'
import { SiteClient } from 'datocms-client'

connectDB()

export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await createOrder(req, res)
			break;
		case "GET":
			await getOrders(req, res)
			break;
	}
}

const getOrders = async (req, res) => {
	try {
		const result = await auth(req, res)

		let orders;
		if (result.role !== 'admin') {
			orders = await Orders.find({ user: result.id }).populate("user", "-password")
		} else {
			orders = await Orders.find().populate("user", "-password")
		}

		res.json({ orders })
	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}

const createOrder = async (req, res) => {
	try {
		const result = await auth(req, res)
		const { address, mobile, cart, total } = req.body

		const newOrder = new Orders({
			user: result.id, address, mobile, cart, total
		})

		cart.filter(item => {
			return sold(item._id, item.quantity, item.instock, item.sold)
		})

		await newOrder.save()

		res.json({
			msg: 'Order success! We will contact you to confirm the order.',
			newOrder
		})

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}

const sold = async (item) => {
	const client = new SiteClient(process.env.NEXT_PUBLIC_DATO_CMS_FULL_ACCESS_API_TOKEN);

	const productId = item.id;
	const product = await client.items.update(productId, {
		instock: item.instock - item.qty,
	});
	console.log(product);

}
