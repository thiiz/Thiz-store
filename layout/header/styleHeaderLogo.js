import Link from 'next/link';
import styled, { css } from 'styled-components';

const ContainerLogo = styled(Link)`
  position: relative;
  transition: 50ms ease;
  ${(props) => {
    switch (props.scrolldirection) {
      case "down":
        return css`
          width: 5.5em;
          height: 2.25em;
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