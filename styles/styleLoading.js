import styled, { keyframes } from 'styled-components';

const btnLoadingSpinner = keyframes`
from {
transform: rotate(0turn);
}

to {
transform: rotate(1turn);
}
`;

const BtnLoading = styled.button`
position: relative;
border: none;

& .btnText {
	color: ${props => props.theme.text.contrast};
	transition: all 200ms;
}

& .btnText {
	visibility: hidden;
	opacity: 0;
}

&::after {
	content: "";
	position: absolute;
	width: 1rem;
	height: 1rem;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border: 4px solid transparent;
	border-top-color: ${props => props.theme.bg.contrast};
	border-radius: 50%;
	animation: ${btnLoadingSpinner} 1s ease infinite;
}
`;

export default BtnLoading