import { gql } from "@apollo/client";

export const PAGINATION_PRODUCTS_QUERY = gql`query PaginationProducts($search: String = "", $limit: Int = 12, $sort: ProductOrderByInput = inStock_DESC, $skip: Int = 0) {
	productsConnection(first: $limit, where: {_search: $search}, orderBy: $sort, skip: $skip) {
	  edges {
		cursor
		node {
		  id
		  name
		  price
		  oldPrice
		  inStock
		  images {
			fileName
			url(transformation: {document: {output: {format: webp}}})
		  }
		  slug
		  brands {
			name
		  }
		}
	  }
	  pageInfo {
		endCursor
		hasNextPage
		hasPreviousPage
		pageSize
		startCursor
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
	  brands {
		name
	  }
	}
  }`

export const PREV_SEARCH_PRODUCTS_QUERY = gql`query Search($search: String!) {
	products(where: {_search: $search}) {
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
	  brands {
		name
	  }
	}
  }`

export const RELATED_CATEGORY_PRODUCTS_QUERY = gql`query RelatedCategoryProducts($name: String,  $limit: Int) {
	categories(where: {name: $name}) {
	  products(first: $limit) {
		id
		name
		images {
			url(transformation: {document: {output: {format: webp}}})
			fileName
		}
		description
		inStock
		oldPrice
		price
		slug
	  }
	}
  }`