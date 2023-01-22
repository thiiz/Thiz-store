import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GRAPHCMS_READ_ONLY_URI,
	cache: new InMemoryCache(),
})

export { client }