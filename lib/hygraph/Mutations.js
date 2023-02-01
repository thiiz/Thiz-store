import { gql } from "@apollo/client";

export const CREATE_WISHLIST = gql`
mutation CreateUserWishlist($userEmail: String!) {
	createWishlist(data: {userEmail: $userEmail}) {
	  userEmail
	}
	publishWishlist(where: {userEmail: $userEmail}, to: PUBLISHED) {
		id
	}
  }
`
export const CONNECT_PRODUCT_TO_WISHLIST = gql`mutation UpdateWishlist($userEmail: String!, $productID: ID!) {
	updateWishlist(
	  data: {products: {connect: {where: {id: $productID}}}}
	  where: {userEmail: $userEmail}
	) {
	  id
	  userEmail
	}
	publishWishlist(where: {userEmail: $userEmail}, to: PUBLISHED) {
	  id
	}
  }
`
export const DISCONNECT_PRODUCT_TO_WISHLIST = gql`mutation DisconnectProductToWishlist($userEmail: String!, $productID: ID!) {
	updateWishlist(
	  data: {products: {disconnect: {id: $productID}}}
	  where: {userEmail: $userEmail}
	) {
	  id
	  userEmail
	}
	publishWishlist(where: {userEmail: $userEmail}, to: PUBLISHED) {
		id
	  }
	}
`