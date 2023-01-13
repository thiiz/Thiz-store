import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 9.7rem;
  background-color: #fdfdfd;

  @media(min-width: 1280px) {
    margin-top: 5rem;
  }
`;

const TitleContainer = styled.div`
    margin-left: .2rem;
  `;

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 8.85rem;
  line-height: 7.65rem;
  color: #191919;
  display:flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;

  span:last-child{
    color: #fff;
    background-color: #191919;
  }
`;

const MainSubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.65rem;
  color: #000;
  margin-bottom: 5.45rem;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

const ImageContainer = styled.div`
  pointer-events: none;
  position: relative;
  width: 50rem;
  height: 50rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const RightBar = styled.div`
  background-color: #191919;
  position: absolute;
  right: 0;
  height: 100%;
  width: 8.5%;
`
const BottomBar = styled.div`
  height: 3.825rem;
  width: 100%;
  background-color: #191919;
  position: absolute;
  bottom: -1rem;
  z-index: 1;
`

export { BannerContainer, TitleContainer, MainSubTitle, MainTitle, ImageContainer, RightBar, BottomBar }