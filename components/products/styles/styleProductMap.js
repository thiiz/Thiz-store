import styled, { css } from 'styled-components';

const Container = styled.section`
	height: 100%;
	gap: 1.8vw 1.6vw;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 0 1.875em 5vh 1.875em;
	font-size: 100%;
	background-color: inherit;
	${props => {
		switch (props.grid) {
			case 2:
				return css`
					width: 80%;	
				`;
			case 3:
				return css`
					width: 90%;
				`;
			default:
				return css`
					width: 100%;
				`
		}
	}}

@media (max-width: 590px) {
	&{
		gap: 3vh 2vw;
		padding-bottom: 4.375em;
	}
	}

@media (max-width: 1331px) {
	&{
		font-size: 80%;
	}
	}


@media (min-width: 1332px) and (max-width: 1533px) {
	&{
		font-size: 100%;
	}
}

@media (min-width: 1534px) {
	&{
		font-size: 115%;
	}
}
`;

export { Container }