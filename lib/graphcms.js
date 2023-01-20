import { ApolloClient, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
	uri: process.env.URI_GRAPHCMS,
	cache: new InMemoryCache(),
})

export { client }