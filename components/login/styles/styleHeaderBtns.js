import styled from "styled-components";


const HeaderBtns = styled.button`
	position: absolute;
	background-color: transparent;
	border: none;
	border-radius: 50%;
	padding: .375rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: ease 250ms;
	user-select: none;
	top: 4px;

	& svg {
	transition: 400ms ease-in-out;
	color: #000;
	border-radius: 10%;
}

	&:hover svg {
	padding: .188rem;
}


	&:hover {
	background-color: #57575760;
}
`;

const CloseButton = styled(HeaderBtns)`
	right: 6px;
	font-size: 1.54rem;
`
const ReturnButton = styled(HeaderBtns)`
	font-size: 1.65rem;
	left: 6px;
`
export { CloseButton, ReturnButton }