import '../styles/globals.css'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      
        <Component {...pageProps} />
        
      <Footer />
    </>
  )
}

export default MyApp