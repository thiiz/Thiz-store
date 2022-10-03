import '../styles/globals.css'
import Transition from '../components/transition/Transition';
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import CartProvider from '../contexts/CartContext'
import OpenCartMenuProvider from '../contexts/OpenCartMenuContext'
import NotifyProvider from '../contexts/NotifyContext';
import { ToastContainer, Flip } from 'react-toastify';
import { DataProvider } from '../contexts/GlobalState'

//Política de Cookies Usamos cookies para garantir que você obtenha a melhor experiência em nosso site.

function MaeTerra({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <DataProvider>
        <OpenCartMenuProvider>
          <NotifyProvider>
            <CartProvider>
              <Header />
              <NextNProgress
                color="#0099ff"
                startPosition={0.2}
                stopDelayMs={200}
                height={6}
                showOnShallow={true}
              />
              <ToastContainer
                position
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                onClick
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                progress={undefined}
                transition={Flip}
                theme="colored"
                limit={3}
              />
              <Transition>
                <Component {...pageProps} />
                <Footer />
              </Transition >
            </CartProvider>
          </NotifyProvider>
        </OpenCartMenuProvider>
      </DataProvider>
    </>
  )
}

export default MaeTerra