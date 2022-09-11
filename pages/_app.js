import '../styles/globals.css'
import Transition from '../components/transition/Transition';
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import CartProvider from '../contexts/CartContext'
import OpenCartMenuProvider from '../contexts/OpenCartMenuContext'

function MaeTerra({ Component, pageProps }) {
  return (
    <>
      <OpenCartMenuProvider>
        <CartProvider>
          <Header />
          <NextNProgress
            color="#29D"
            startPosition={0.2}
            stopDelayMs={200}
            height={6}
            showOnShallow={true}
          />
          <Transition>
            <Component {...pageProps} />
            <Footer />
          </Transition >
        </CartProvider>
      </OpenCartMenuProvider>
    </>
  )
}

export default MaeTerra