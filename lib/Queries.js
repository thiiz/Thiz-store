import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`query Products{
	allProducts(first: 30, orderBy: instock_DESC) {
	  id
	  title
	  price
	  instock
	  image {
  	  url
	  responsiveImage(imgixParams: {fm: webp}) {
		src
		base64
		alt
	  }
	  }
	  color
	  slug
	}
	}`

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