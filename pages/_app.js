import '../styles/globals.css'
import Transition from '../components/transition/Transition';
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
import Router from 'next/router'

export const fixTimeoutTransition = (timeout) => {
  Router.events.on('beforeHistoryChange', () => {
    // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
    // if Next.js is going to remove them or not since we are going to remove the copies ourselves
    // later on when the transition finishes.
    const nodes = document.querySelectorAll('link[rel=stylesheet], style:not([media=x])')
    const copies = [...nodes].map((el) => el.cloneNode(true))

    for (let copy of copies) {
      // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
      // change process.
      copy.removeAttribute('data-n-p')
      copy.removeAttribute('data-n-href')

      // Add duplicated nodes to the DOM.
      document.head.appendChild(copy)
    }

    const handler = () => {
      // Emulate a `.once` method using `.on` and `.off`
      Router.events.off('routeChangeComplete', handler)

      window.setTimeout(() => {
        for (let copy of copies) {
          // Remove previous page's styles after the transition has finalized.
          document.head.removeChild(copy)
        }
      }, timeout)
    }

    Router.events.on('routeChangeComplete', handler)
  })
}
fixTimeoutTransition(1000)
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
                <Transition>
                  <Component {...pageProps} />
                </Transition >
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