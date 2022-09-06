import { gql } from "@apollo/client";

export const VIEW_PRODUCTS_QUERY = gql`query viewProduct{
	allProducts(first: 100){
	  title
	  price
	  instock
	  image {
		url
		responsiveImage(imgixParams: {fit: crop}) {
		  src
		  width
		  height
		  base64
		}
	  }
	  color
	  slug
	}
  }`