import '../styles/globals.css'
import Transition from '../components/transition/Transition';
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Transition>
        <Component {...pageProps} />
        <Footer />
      </Transition>
    </>
  )
}

export default MyApp