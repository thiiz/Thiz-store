import { gql } from "@apollo/client";

export const VIEW_PRODUCTS_QUERY = gql`query viewProduct{
	allProducts(first: 100){
	  id
	  title
	  price
	  instock
	  image {
		url
		responsiveImage(imgixParams: {fm: webp, maxH: "350", maxW: "200"}) {
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