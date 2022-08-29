import { getAllProducts } from '../../lib/dato-cms'


export default async function handler(req, res) {
	console.log('chamou api')
	const query = `
	{
		allProducts {
		  id
		  title
		  price
		  image {url}
		  defaultVisible
		  slug
		  instock
		}
	  }
	`
	const data = await getAllProducts({ query })
	if (req.method === 'GET') {
		res.status(200).json(data)
	}else{
		res.status(400).json({ message: `method not alowed` })
	}
}
