import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_GRAPHCMS_READ_ONLY_URI
});

const authLink = setContext((_, { headers }) => {
	const token = process.env.NEXT_PUBLIC_GRAPHCMS_QUERY_TOKEN
	return {
		headers: {
			...headers,
			authorization: `Bearer ${token}`,
		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

export { client }