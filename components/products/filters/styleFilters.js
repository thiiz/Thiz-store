import styled, { css } from "styled-components"

const Container = styled.div`
	width: 76%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`

const ButtonToggle = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 7.2rem;
	column-gap: .3rem;
	padding: .5rem .9rem;
	border: 1px solid ${props => props.theme.bg.contrast};
	background-color: transparent;
	color: ${props => props.theme.text.default};
	margin-bottom: 2rem;
	& #text {
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		font-weight: 600;
		font-size: 1.15rem;
	}
	& #icon{
		font-size: 1.7rem;
		transition: 350ms cubic-bezier(.785,.135,.15,.86);
		${props => {
		switch (props.isOpen) {
			case true:
				return css`
						transform: rotateZ(180deg);
					`;
			default: {
				return css`
				    transform: rotateZ(0deg);
				`;
			}
		}
	}}
	}
`;

const ContainerFilter = styled.div`
	display: grid; 
	align-items: center;
    justify-items: center;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: 
	'one two three'
	'four five six';
	margin-bottom: 2rem;
	position: relative;
	width: 100%;
	border: transparent;
	transition: all .45s cubic-bezier(.785,.135,.15,.86);
	${props => {
		switch (props.isOpen) {
			case true:
				return css`
						border-top: 1px solid ${props => props.theme.bg.layout};
						border-bottom: 1px solid ${props => props.theme.bg.layout};
						height: 10rem;
					`;
			default: {
				return css`
						height: 0rem;
						overflow: hidden;
					`;
			}
		}
	}
	}

	& #five{
		grid-area: five;
	}

	& #six {
		grid-area: six;
	}	
`;

export { Container, ButtonToggle, ContainerFilter }