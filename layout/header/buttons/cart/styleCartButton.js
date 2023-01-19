import styled, { css } from 'styled-components'

const CountCartItems = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.text.contrast};
	background-color: ${props => props.theme.bg.contrast};
	border-radius: 50%;
	position: absolute;
	transition: 250ms ease;
	user-select: none;
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 600;
	${props => {
		switch (props.scrolldirection) {
			case 'down':
				return css`
					width: 0.958rem;
					height: 0.958rem;
					font-size: 0.646rem;
					bottom: 1.8em;
					left: 1.938em;
				`;
			default:
				return css`
					width: 1.125rem;
					height: 1.125rem;
					font-size: 0.75rem;
					bottom: 1.888em;
					left: 2.13em;`
		}
	}}
`;

const Btn = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	font-size: 1.625em;
	padding: 0.438rem;
	border-radius: 50%;
	transition: background-color 400ms;
	position: relative;
	color: inherit;

	&:hover {
	background-color: ${props => props.theme.hover};
}

`;
export { CountCartItems, Btn }