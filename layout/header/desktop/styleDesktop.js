import styled, { css } from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 0fr 1fr;
	align-items: center;
	transition: 250ms ease;
	${(props) => {
		switch (props.scrolldirection) {
			case "down":
				return css`
					font-size: 75%;
					height: 3.125em;	
				`;
			default: {
				return css`
					font-size: 100%;
					height: 5em;
				`
			}
		}

	}}
	@media(min-width: 1280px) {
		${(props) => {
		switch (props.scrolldirection) {
			case 'down':
				return css`
					padding: 0 10rem;
				`
			default: {
				return css`
				 padding: 0 11rem;`
			}
		}
	}}
}
	@media(min-width: 500px) and (max-width: 1279px) {
		${(props) => {
		switch (props.scrolldirection) {
			case 'small':
				return css`
					padding: 0 .5rem;
				`
			default: {
				return css`
				 padding: 0 1rem;`
			}
		}
	}}
}
`

const ContainerButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export { Container, ContainerButtons }