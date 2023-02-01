import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProductContainer = styled(motion.div)`
	padding: .5em;
	cursor: pointer;
	border-radius: 8px;
	font-family: 'Roboto', 'Arial', sans-serif;
	color: ${props => props.theme.text.default};
	height: 20.666em;
	width: 21.966em;
`

const ImageContainer = styled.div`
transition: ease-in-out 200ms;
	user-select: none;
	position: relative;
	transition: 250ms ease-in-out;
	width: 100%;
	height: 100%;
	& img{
		object-fit: cover;
	}

					
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
	margin-bottom: 5px;
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

const BtContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	TextUnavailable,
	BtContainer,
}

