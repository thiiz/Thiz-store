import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from 'apollo-link-context';

export default function Home({ data }) {
  const token = `${process.env.NEXT_PUBLIC_DATO_CMS_READ_ONLY_API_TOKEN}`;
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
          'Authorization': `Bearer ${token}`,
          'cookie': req.header('Cookie'),
        }
      )
    }
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  client.query({
    query: gql`{ allProducts {
    id
    title
    price
    instock
    image {
    url
    responsiveImage(imgixParams: {fit: crop}){      
        src         
        base64
      }
  }
    color
    slug
  }
}`})
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}