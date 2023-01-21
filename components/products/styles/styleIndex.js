import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 11.25rem;
	background-color: ${props => props.theme.bg.default};
	color: ${props => props.theme.text.default}
`

const ProductsTitle = styled.h1`
	font-size: 2.2rem;
	font-family: 'Oswald', sans-serif;
	color: inherit;
`

export { Container, ProductsTitle }