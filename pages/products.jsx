import { ProductFiltred } from "../components/filters/Filters"
import style from '../styles/Products.module.css'
import { useQuery, gql } from '@apollo/client'


const PRODUCTS_QUERY = gql`{ allProducts(first: 30) {
	id
	title
	price
	instock
	image {
	url
	responsiveImage(imgixParams: {fit: crop}){      
		src         
		base64
	  }
  }
	color
	slug
  }
  }`

export default function Products() {
	const { data, loading, error } = useQuery(PRODUCTS_QUERY, { fetchPolicy: 'cache-and-network' })

	if (loading) return <div>LOADING...</div>
	console.log('data;', data.allProducts)
	return (
		<>

			<div className={`${style.content} page`}>
				<ProductFiltred data={data.allProducts} />
			</div>
		</>

	)
}

