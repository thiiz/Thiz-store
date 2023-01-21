import Image from "next/image";
import styled, { css } from "styled-components";

const ProductContainer = styled.div`
	text-align: center;
	padding: 0 .5em .5em .5em;
	border-radius: 8px;
	font-family: 'Varela Round', 'Arial', sans-serif;
	color: ${props => props.theme.text.default};
	${props => {
		switch (props.grid) {
			case 2:
				return css`
					width: 30.813em;
				`;
			case 3:
				return css`
					width: 22.563em;
				`;
			default:
				return css`
					width: 18.875em;
				`;
		}
	}}
`;

const ImageContainer = styled.div`
transition: ease-in-out 200ms;
	user-select: none;
	border-radius: 8px;
	position: relative;
	cursor: pointer;
	transition: 250ms ease-in-out;
	${props => {
		switch (props.grid) {
			case 2:
				return css`
					height: 29.875em;
				`;
			case 3:
				return css`
					height: 21.313em;
				`;
			default:
				return css`
					height: 17.313em;
				`;
		}
	}}
	& .imgUnavailable{
		filter: gray;
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
	}
`;

const ProductImage = styled(Image)`
	transition: ease-in-out 200ms;
	user-select: none;
	border-radius: 8px;

	&:hover{
		box-shadow: 0 0 5px #000000cc;
		scale: 1.05;
	}
`;
const Name = styled.p`
	font-size: 1.063em;
	text-decoration: none;
	margin-bottom: 20px;
	margin-top: 10px;
	cursor: pointer;
	text-transform: capitalize;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const DivBar = styled.div`
	width: 25px;
	height: 2px;
	background-color: ${props => props.theme.bg.variant};
	position: absolute;
	top: -10px;
	left: 50%;
	margin-left: -.625em;
`;

const ContainerPrice = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	column-gap: 1rem;
`;
const Price = styled.p`
	font-size: 1.125em;
	font-family: 'Roboto', sans-serif;	
`;

const OldPrice = styled.p`
text-decoration: line-through;
	font-weight: lighter;
	font-size: .82rem;
	color: ${props => props.theme.disable};
`;

const Parcel = styled.p`
	margin: .188em 0;
	font-size: .725em;
	color: ${props => props.theme.disable};
	font-weight: 600;
`;

export { ProductContainer, ImageContainer, ProductImage, Name, DivBar, ContainerPrice, Price, OldPrice, Parcel }

