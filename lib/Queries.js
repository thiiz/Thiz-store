import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`query AllProducts($search: String = "", $limit: Int, $sort: ProductOrderByInput = inStock_DESC) {
	products(first: $limit, where: {_search: $search}, orderBy: $sort) {
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

export const SEARCH_PAGE_PRODUCTS_QUERY = gql`query Search($search: String = "", $limit: Int, $order: ProductOrderByInput) {
	products(first: $limit, where: {_search: $search}, orderBy: $order) {
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