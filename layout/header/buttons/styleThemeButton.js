import styled from "styled-components";

const Btn = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	font-size: 1.975em;
	padding: 0.238rem;
	border-radius: 50%;
	transition: background-color 400ms;
	position: relative;
	color: inherit;

	&:hover {
	background-color: ${props => props.theme.hover};
}

`;

export { Btn }