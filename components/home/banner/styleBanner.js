import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 5.1rem;
  width: 100vw;
  height: 26.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #d3f3fa 0%, #fafafc 50%, #b7b3e7 100%);
`;

const MainTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  font-size: 6.55rem;
  line-height: 5.25rem;
  color: #000;
`;

const MainTitleSpan = styled.span`
  font-family: 'Oswald', sans-serif;
  color: #0099ff;
`;

const MainSubTitle = styled.div`
  font-weight: 400;
  font-size: 1.65rem;
  font-family: 'Oswald', sans-serif;
  color: #000;
  margin-bottom: 1.25rem;
`;


export { Container, MainSubTitle, MainTitle, MainTitleSpan }