import styled, { css } from 'styled-components';

const ContainerLogo = styled.div`
  transition: 80ms ease;
  ${(props) => {
    switch (props.scrollDirection) {
      case "down":
        return css`
          width: 5.295em;
          margin-top: 0;
          `;
      default:
        return css`
          width: 6.9em;
          margin-top: 3px;
        `;
    }
  }}
    `;

export { ContainerLogo }