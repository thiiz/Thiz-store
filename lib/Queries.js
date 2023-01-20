
export const PRODUCTS_QUERY = `query($limit: IntType){
	allProducts(first: $limit, orderBy: instock_DESC) {
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

export const VIEW_PRODUCTS_QUERY = `query($limit: IntType){
	allProducts(first: $limit){
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

export const PREV_SEARCH_PRODUCTS_QUERY = `query SearchProducts($limit: IntType, $search: String") {
	allProducts(first: $limit, filter: {title: {matches: {pattern: $search}}}) {
	  id
	  title
	  price
	  oldPrice
	  image {
		responsiveImage(imgixParams: {fm: webp}) {
		  src
		  base64
		}
		url
		smartTags
		tags
	  }
	  slug
	}
  }`

export const SLUG_QUERY = `query Slug($limit: IntType){
	allProducts(first: $limit) {
	  slug
	}
}`