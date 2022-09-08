import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
	uri: 'https://graphql.datocms.com/',
});
const authLink = setContext((_, { headers }) => {
	return {
		headers: Object.assign(
			headers || {},
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS_READ_ONLY_API_TOKEN}`,
			}
		)
	}
});
const defaultOptions = {
	watchQuery: {
		// fetchPolicy: "cache-and-network",
		fetchPolicy: "no-cache",
		errorPolicy: "ignore",
	},
	query: {
		// fetchPolicy: "network-only",
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	},
};

const client = new ApolloClient({
	ssrMode: typeof window === 'undefined',
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
	defaultOptions,
});
export default client