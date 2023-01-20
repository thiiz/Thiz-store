import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`query AllProducts($limit: Int) {
	products(first: $limit, orderBy: inStock_DESC) {
	  id
	  images {
		url(transformation: {document: {output: {format: webp}}})
		fileName
	  }
	  name
	  slug
	  price
	  oldPrice
	  description
	  inStock
	  categories {
		name
		slug
	  }
	  brand {
		name
	  }
	}
  }`

export const SLUG_QUERY = gql`query Slug($limit: Int){
	products(first: $limit) {
		slug
	}
} `

export const VIEW_PRODUCT_QUERY = gql`query ViewProducts($limit: Int) {
	products(first: $limit) {
	  id
	  images {
		url(transformation: {document: {output: {format: webp}}})
		fileName
	  }
	  name
	  slug
	  price
	  oldPrice
	  description
	  inStock
	  categories {
		name
		slug
	  }
	  brand {
		name
	  }
	}
  }`

export const PREV_SEARCH_PRODUCTS_QUERY = gql`query Search($search: String!) {
	products(where: {_search: $search}) {
	  id
	  images {
		url(transformation: {document: {output: {format: webp}}})
	  }
	  name
	  slug
	  price
	  oldPrice
	  description
	  inStock
	  categories {
		name
		slug
	  }
	  brand {
		name
	  }
	}
  }`