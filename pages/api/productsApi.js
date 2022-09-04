import { getData } from '../../lib/queries'

export default async function handler(req, res) {
	// Check for secret to confirm this is a valid request
	if (req.method === 'GET') {
		const data = await getData()
		return res.status(200).json(data.data.allProducts)
	  } 
}