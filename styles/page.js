import styled from "styled-components";

const Page = styled.main`
    z-index: 10;
    position: relative;
    overflow: hidden;
	background-color: ${props => props.theme.bg.default};
`;

export { Page }
