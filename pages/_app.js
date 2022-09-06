import '../styles/globals.css'
import Transition from '../components/transition/Transition';
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import ProductsContextProvider from '../contexts/productsContext';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient'

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
          <ProductsContextProvider>
            <Component {...pageProps} />
          </ProductsContextProvider>
        </ApolloProvider>
        <Footer />
      </Transition>
    </>
  )
}

export default MaeTerra