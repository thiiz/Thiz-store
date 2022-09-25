import '../styles/globals.css'
import Transition from '../components/transition/Transition';
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import CartProvider from '../contexts/CartContext'
import OpenCartMenuProvider from '../contexts/OpenCartMenuContext'
import NotifyProvider from '../contexts/NotifyContext';
import { ToastContainer } from 'react-toastify';


function MaeTerra({ Component, pageProps }) {
  return (
    <>
      <OpenCartMenuProvider>
        <NotifyProvider>
          <CartProvider>
            <Header />
            <NextNProgress
              color="#29D"
              startPosition={0.2}
              stopDelayMs={200}
              height={6}
              showOnShallow={true}
            />
            <ToastContainer
              position="bottom-left"
              autoClose={3500}
              hideProgressBar={false}
              newestOnTop={false}
              onClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              transition
              theme
            />
            <Transition>
              <Component {...pageProps} />
              <Footer />
            </Transition >
          </CartProvider>
        </NotifyProvider>
      </OpenCartMenuProvider>
    </>
  )
}

export default MaeTerra