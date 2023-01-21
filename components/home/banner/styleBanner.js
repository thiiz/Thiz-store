import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 50rem;
  background-color: inherit;
  display: grid; 
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: center;
#title {
   z-index: 3;
   position: relative;
   grid-row-start: 1;
   grid-column-start: 1;

   grid-row-end: 2;
   grid-column-end: 2;
   
}
#image {
  grid-row-start: 1;
   grid-column-start: 2;
   grid-row-end: 2;
   grid-column-end: 3;
}
#bottomBar {
   grid-row-start: 2;
   grid-column-start: 1;
   grid-row-end: 3;
   grid-column-end: 3;
   
}
  @media(min-width: 1280px) {
    margin-top: 5.03rem;
  }
`;

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 8.85rem;
  line-height: 7.85rem;
  color: ${props => props.theme.text.default};
  display:flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  z-index: 3;

  span:last-child{
    color: ${props => props.theme.text.contrast};
    background-color: ${props => props.theme.bg.contrast};
  }
`;

const MainSubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.65rem;
  color: ${props => props.theme.text.default};
  margin-bottom: 5.45rem;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  z-index: 3;
`;

const RightContainer = styled.div`
  position: relative;
  display: flex;
`;
const ImageContainer = styled.div`
  pointer-events: none;
  position: relative;
  width: 55rem;
  height: 51rem;
  min-width: 43rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: -3rem;
`

const RightBar = styled.div`
  height: 100%;
  width: 100vw;
  background-color: ${props => props.theme.bg.variant};
  position: absolute;
  left: 40rem;
  z-index: 1;
`
const BottomBar = styled.div`
  width: 100%;
  height: 1.855rem;
  background-color: ${props => props.theme.bg.variant};
  position: absolute;
  bottom: 1rem;
  z-index: 1;
`

export { BannerContainer, MainSubTitle, MainTitle, RightContainer, ImageContainer, RightBar, BottomBar }