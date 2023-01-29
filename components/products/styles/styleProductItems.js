import Image from "next/image";
import styled, { css } from "styled-components";

const ProductContainer = styled.div`
	padding: 0 .5em .5em .5em;
	cursor: pointer;
	border-radius: 8px;
	font-family: 'Roboto', 'Arial', sans-serif;
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
`

const ImageContainer = styled.div`
transition: ease-in-out 200ms;
	user-select: none;
	position: relative;
	transition: 250ms ease-in-out;
	& img{
		object-fit: cover;
	}
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
`

const ProductImage = styled(Image)`
	transition: ease-in-out 200ms;
	user-select: none;

	&:hover{
		box-shadow: 0 0 5px #000000cc;
		scale: 1.05;
	}
`

const Name = styled.p`
	font-size: .963em;
	font-weight: 300;
	text-decoration: none;
	margin-bottom: 7px;
	margin-top: 10px;
	text-transform: capitalize;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const ContainerPrice = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	column-gap: 1rem;
`

const Price = styled.p`
	font-size: .925em;
`

const OldPrice = styled.p`
	text-decoration: line-through;
	font-weight: 300;
	font-size: .785em;
	color: ${props => props.theme.disable};
`

const Parcel = styled.p`
	margin: .188em 0;
	font-size: .625em;
	color: ${props => props.theme.disable};
	font-weight: 300;
`

const TextUnavailable = styled.span`
	font-family: "Varela Round", Arial, Helvetica, sans-serif;
`

export {
	ProductContainer,
	ImageContainer,
	ProductImage,
	Name,
	ContainerPrice,
	Price,
	OldPrice,
	Parcel,
	TextUnavailable
}

