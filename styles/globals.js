import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%
  }

  button {
    user-select: none;
    cursor: pointer;
  }

  img {
    object-fit: cover;
  }

  body {
    max-width: 100vw;
  }

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 0;
    position: relative;
    overflow: hidden;
  }

  .marginFooter {
    margin-bottom: 14.563rem;
  }

  .background::after {
    content: "";
    display: block;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
        #A4E9F9 0%,
        #C5AEF2 50%,
        #8578EA 100%);
    z-index: -1;
  }

  .Toastify {
    text-align: center;
  }

  .backdrop {
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: -1;
    position: absolute;
    transition: background-color 250ms ease;
  }

  @media (max-width: 590px) {
    .marginFooter {
      margin-bottom: 29.813rem;
    }
  }
  
  @media (max-width: 785px) {
      html {
        font-size: 70%
      }
    }

  @media (max-width: 935px) {
    html {
      font-size: 80%
    }
  }

  @media (max-width: 1024px){
    html {
        font-size: 95%
      }
  }
  `
export default GlobalStyle