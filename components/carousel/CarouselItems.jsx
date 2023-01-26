import Image from "next/image";
import { Container, ImageContainer, Name, Price } from "./styleCarouselItems";
export default function CarouselItems({ product }) {
	return (
		<Container>
			<ImageContainer>
				<Image style={{ userSelect: "none" }} src={product?.images[0]?.url} alt={"imagem do produto"} fill sizes="100%" />
			</ImageContainer>
			<Name>{product?.name}</Name>
			<Price>{product?.price}</Price>
		</Container >
	)
}