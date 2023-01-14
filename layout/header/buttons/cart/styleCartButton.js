import styled, { css } from 'styled-components'

const CountCartItems = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-color: #000;
	border-radius: 50%;
	position: absolute;
	transition: 250ms ease;
	user-select: none;

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

export { CountCartItems }