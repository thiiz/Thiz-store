import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import LoginModalProvider from '../contexts/LoginModalContext';
import CartProvider from '../contexts/CartContext'
import OpenCartMenuProvider from '../contexts/OpenCartMenuContext'
import NotifyProvider from '../contexts/NotifyContext';
import { ToastContainer, Flip } from 'react-toastify';
import { AuthProvider } from '../contexts/AuthContext'
import Head from 'next/head';
import UserModalContextProvider from '../contexts/UserModalContext';
import ModalLogin from '../components/login/index';
import CartMenu from '../components/cart/CartMenu';
import CookiesConsentPopup from '../components/cookies-consent/CookiesConsentPopup';
import ThemeContextProvider from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';

function MaeTerra({ Component, pageProps: { session, ...pageProps } }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeContextProvider>
        <AuthProvider>
          <OpenCartMenuProvider>
            <NotifyProvider>
              <LoginModalProvider>
                <CartProvider>
                  {isMounted && <Header />}
                  <NextNProgress
                    color="#0099ff"
                    startPosition={0.1}
                    stopDelayMs={150}
                    height={6}
                    showOnShallow={true}
                  />
                  <ToastContainer
                    position
                    pauseOnFocusLoss={false}
                    autoClose={3500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    draggable
                    pauseOnHover
                    progress={undefined}
                    transition={Flip}
                    theme
                    limit={3}
                    closeButton
                  />
                  <ModalLogin />
                  <CartMenu />
                  {isMounted && <Component {...pageProps} />}
                </CartProvider>
              </LoginModalProvider>
            </NotifyProvider>
          </OpenCartMenuProvider>
          <CookiesConsentPopup />
        </AuthProvider>
        {isMounted && <Footer />}
      </ThemeContextProvider>
    </>
  )
}

export default MaeTerra