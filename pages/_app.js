import '../styles/globals.css'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import LoginMenuProvider from '../contexts/LoginMenuContext';
import CartProvider from '../contexts/CartContext'
import OpenCartMenuProvider from '../contexts/OpenCartMenuContext'
import NotifyProvider from '../contexts/NotifyContext';
import { ToastContainer, Flip } from 'react-toastify';
import { AuthProvider } from '../contexts/AuthContext'
import Head from 'next/head';
import ModalLoginContextProvider from '../contexts/ModalLoginContext';
import MenuLogin from '../components/login/MenuLogin';
import CartMenu from '../components/cart/CartMenu';
import CookiesConsentPopup from '../components/cookies-consent/CookiesConsentPopup';

function MaeTerra({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthProvider>
        <OpenCartMenuProvider>
          <NotifyProvider>
            <LoginMenuProvider>
              <CartProvider>
                <ModalLoginContextProvider>
                  <Header />
                </ModalLoginContextProvider>
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
                  closeButton
                />
                <MenuLogin />
                <CartMenu />
                <Component {...pageProps} />
              </CartProvider>
            </LoginMenuProvider>
          </NotifyProvider>
        </OpenCartMenuProvider>
        <CookiesConsentPopup />
      </AuthProvider>
      <Footer />
    </>
  )
}

export default MaeTerra