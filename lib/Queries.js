import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`query{
	allProducts(first: 30, orderBy: instock_DESC) {
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
		alt
	  }
	  }
	  color
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
export const FIND_PRODUCTS_QUERY = gql`query{
	allProducts(first: 30){
	  id
	  title
	  price
	  oldPrice
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