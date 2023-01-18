import styled from "styled-components";

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	position: relative;
    top: 0;
	z-index: 1;
`

const ResultTitle = styled.span`
		margin-left: .4rem;
	font-size: .943rem;
`
const Close = styled.button`
	border: none;
	border-radius: 50%;
	padding: .335rem;
	font-size: 1.55rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: ease 250ms;
	user-select: none;
	color: ${props => props.theme.text.default};
	background-color:transparent;
	& svg { transition: 250ms ease-in-out; border-radius: 10%; }
	&:hover{
		 background-color: ${props => props.theme.hover};
		  } 
	&:hover svg {
		 padding: .138rem;
		  } 
	&:active svg {
		 transform: scale(0.9); }
`;

export { Header, ResultTitle, Close }