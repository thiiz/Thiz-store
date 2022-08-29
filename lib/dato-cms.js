const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATO_CMS_READ_ONLY_API_TOKEN


async function fetchCmsAPI(query, { variables } = {}) {
	const res = await fetch(API_URL, {
		method: 'POST',
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${API_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		})
	})

	const json = await res.json()

	return json.data
}
//(orderBy: price_ASC)
export async function getAllProducts() {
	const data = await fetchCmsAPI(`
	{
		allProducts {
		  id
		  title
		  price
		  image {
			url
		}
		  defaultVisible
		  slug
		  instock
		}
	  }
	`)
	return data.allProducts
}
export async function sortLow() {
	const data = await fetchCmsAPI(`
	{
		allProducts(orderBy: price_ASC) {
		  id
		  title
		  price
		  image {
			url
		}
		  defaultVisible
		  slug
		}
	  
		_allProductsMeta {
		  count
		}
	  }
	`)

	return data.allProducts
}
export async function sortHigh() {
	const data = await fetchCmsAPI(`
	{
		allProducts(orderBy: price_DESC) {
		  id
		  title
		  price
		  image {
			url
		}
		  defaultVisible
		  slug
		}
	  
		_allProductsMeta {
		  count
		}
	  }
	`)

	return data.allProducts
}

export default { getAllProducts, sortLow, sortHigh }
