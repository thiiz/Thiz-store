import styled, { css } from 'styled-components';

const Container = styled.section`
	background-color: inherit;
	display: grid;
	padding-inline: 2rem;
	margin-bottom: 140px;
	${props => {
		switch (props.grid) {
			case 2:
				return css`
				grid-template-columns: repeat(2, minmax(0px, 1fr));
				gap: 9.5rem 1rem;
				font-size: 160%;
				`
			case 3:
				return css`
				grid-template-columns: repeat(3, minmax(0px, 1fr));
			    gap: 7.5rem 1.5rem;
				font-size: 145%;
         		`
			default:
				return css`
				grid-template-columns: repeat(4, minmax(0px, 1fr));
				gap: 6.5rem 2rem;
				font-size: 116%;
				`
		}
	}}


`;

export { Container }