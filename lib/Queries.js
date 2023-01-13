import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`query{
	allProducts(first: 30, orderBy: instock_DESC) {
	  id
	  title
	  price
	  oldPrice
	  instock
	  image {
	  responsiveImage(imgixParams: {fm: webp}) {
		src
		base64
	  }
	  colors {
		hex
	  }
  	}
	  slug
	}
	}`

export const VIEW_PRODUCTS_QUERY = gql`query{
	allProducts(first: 100){
	  id
	  title
	  price
	  oldPrice
	  instock
	  image {
		url
		responsiveImage(imgixParams: {fm: webp}) {
		  src
		  base64
		}
		tags
		smartTags
		colors {
			hex
		  }
	  }
	  slug
	  rating
	}
  }`

  export const PREV_SEARCH_PRODUCTS_QUERY = gql`query{
	allProducts(first: 100){
	  id
	  title
	}
  }`