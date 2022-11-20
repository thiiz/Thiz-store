import client from '../lib/apolloclient'
import { gql } from "@apollo/client";

export async function useSearch({ search }) {
	const { data } = await client.query({
		query: gql`query Products{
		  allProducts(first: 100, filter: {title: {matches: {pattern: "${search}"}}}) {
			  id
			  title
			  price
			  image {
		  url
			  responsiveImage(imgixParams: {fm: webp}) {
				src
				base64
				alt
			  }
			  }
			  color
			  instock
			  slug
			}
			}`
	})
	return { data: data.allProducts }
}
