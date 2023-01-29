import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 11.25rem;
	margin-bottom: 5rem;
	background-color: ${props => props.theme.bg.default};
	color: ${props => props.theme.text.default};
	font-family: "Roboto", Arial, Helvetica, sans-serif;	
`

const ProductsTitle = styled.h1`
	font-size: 2.2rem;
	font-family: 'Oswald', sans-serif;
	color: inherit;
`
const PaginationButton = styled.button`
	margin-bottom: 5rem;
	border: none;
	border-radius: .1rem;
	color: ${props => props.theme.text.contrast};
	background-color: ${props => props.theme.bg.variant};
	padding: .72rem 5.9rem;
	font-family: inherit;
	font-size: .96rem;
	font-weight: 500;
	transition: all 200ms ease;
	&:hover{
		background-color: ${props => props.theme.hover.variant}
	}
	&:active{
		scale: .98
	}
`

const ProductsNull = styled.span`
	font-size: 1.43rem;
`

export { Container, ProductsTitle, PaginationButton, ProductsNull }