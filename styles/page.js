import styled from "styled-components";

const Page = styled.main`
	display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
    top: 0;
    position: relative;
    overflow: hidden;
	background-color: ${props => props.theme.bg.default}
`;

export { Page }
