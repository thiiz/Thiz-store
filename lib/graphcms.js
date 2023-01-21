import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: process.env.GRAPHCMS_READ_ONLY_URI,
	cache: new InMemoryCache(),
})

export { client }