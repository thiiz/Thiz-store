import { getData } from '../../lib/queries'

export default async function handler(req, res) {
	console.log('req query', req.query.key)
	if (req.query.key === process.env.SECRET_KEY) {
		const data = await getData()
		return res.status(200).json(data.data.allProducts)
	}
}