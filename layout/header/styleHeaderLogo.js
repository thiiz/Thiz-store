import styled, { css } from 'styled-components';

const ContainerLogo = styled.div`
 position: relative;
  
  transition: 50ms ease;
  ${(props) => {
    switch (props.scrollDirection) {
      case "down":
        return css`
          width: 5.5em;
          height: 2.25em;
          margin-top: -2px;
          `;
      default:
        return css`
          width: 6.9em;
          height: 2.947em;
        `;
    }
  }}
    `;

export { ContainerLogo }