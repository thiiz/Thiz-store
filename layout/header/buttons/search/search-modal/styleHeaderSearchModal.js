import styled from "styled-components";

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	position: absolute;
	right: 0;
	top: 0;
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
	background-color:transparent;
	& svg { transition: 250ms ease-in-out; border-radius: 10%; }
	&:hover{
		 background-color: #dfdfdf;
		  } 
	&:hover svg {
		 padding: .138rem;
		  } 
	&:active svg {
		 transform: scale(0.9); }
`;

export { Header, ResultTitle, Close }