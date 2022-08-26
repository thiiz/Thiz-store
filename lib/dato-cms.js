
const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATO_CMS_READ_ONLY_API_TOKEN

async function fetchCmsAPI(query, { variables } = {}) {
	const res = await fetch(API_URL, {
		method: 'POST',
		headers: {

			authorization: `Bearer ${API_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		})
	})

	const json = await res.json()
	if (json.errors) {
		throw new Error('Failed to fetch API')
	}

	return json.data
}

export async function getAllProducts() {
	const data = await fetchCmsAPI(`
	{
		allProducts {
		  id
		  title
		  price
		  image {
			url
			width
			height
		}
		  defaultVisible
		}
	  
		_allProductsMeta {
		  count
		}
	  }
	`)

	return data.allProducts
}

export default getAllProducts