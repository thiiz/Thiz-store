import '../styles/globals.css'
import Transition from '../components/transition/Transition';
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from 'apollo-link-context';


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
      }
    )
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function MaeTerra({ Component, pageProps }) {
  return (
    <>
      <Header />
      <NextNProgress
        color="#29D"
        startPosition={0.2}
        stopDelayMs={200}
        height={6}
        showOnShallow={true}
      />
      <Transition>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>\
        <Footer />
      </Transition>
    </>
  )
}

export default MaeTerra