import { GraphQLClient } from "graphql-request";
import { memo } from "react";


export function request({ query, variables, includeDrafts, excludeInvalid, }) {
	const headers = {
		authorization: `Bearer ${process.env.DATO_CMS_READ_ONLY_API_TOKEN}`,
	};
	if (includeDrafts) {
		headers['X-Include-Drafts'] = 'true';
	}
	if (excludeInvalid) {
		headers['X-Exclude-Invalid'] = 'true';
	}
	const client = new GraphQLClient('https://graphql.datocms.com', { headers });
	return client.request(query, variables);
}
//(orderBy: price_ASC)

export default memo({ request })