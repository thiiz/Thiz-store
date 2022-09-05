import { request } from "./datocms";
import { gql } from "graphql-request";

export async function getData() {
  const QUERY = gql`query All($limit: IntType, $orderBy: [ProductModelOrderBy]) {
    allProducts(first: $limit, orderBy: $orderBy) {
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
  }`;
  const data = await request({
    query: QUERY,
    variables: {
      limit: 100,
      orderBy: 'instock_DESC',
    }
  });
  return { data }
}