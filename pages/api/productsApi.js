import { request } from '../../lib/datocms'


export default async function handler(req, res) {
	const PRODUCTSAPI_QUERY = `query ProductsApi {
		allProducts(first: 100) {
		  id
			  title
			  price
			  image {
				url
		  responsiveImage(imgixParams: {fit: crop}){      
			  src         
			  base64
			}
			}
			  slug
			}
	  }`
	const data = await request({
		query: PRODUCTSAPI_QUERY,
		variables: {}
	});
	if (req.method === 'GET') {
		res.status(200).json(data.allProducts)
	} else {
		res.status(400).json({ message: `method not alowed` })
	}
}
