import { request } from '../../lib/datocms'


export default async function handler(req, res) {
	const HOMEPAGE_QUERY = `query HomePage {
		
		allProducts(first: "50") {
			id
			title
		  },
		}`;
	const data = await request({
		query: HOMEPAGE_QUERY,
		variables: {}
	});
	if (req.method === 'GET') {
		res.status(200).json(data.allProducts)
	} else {
		res.status(400).json({ message: `method not alowed` })
	}
}
