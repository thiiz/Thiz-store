import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`query {
	allProducts(first: 30, orderBy: instock_DESC) {
	  id
	  title
	  price
	  instock
	  image {
		url
		responsiveImage(imgixParams: {fit: crop}) {
		  src
		  base64
		}
	  }
	  color
	  slug
	}
  }`