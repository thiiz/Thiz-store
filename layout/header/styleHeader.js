import styled, { css } from "styled-components";
const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 11;
	background-color: ${props => props.theme.bg.layout};
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
`;

export { HeaderContainer }