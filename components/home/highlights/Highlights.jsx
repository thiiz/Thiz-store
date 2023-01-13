import Image from 'next/image'
import FancyButton from './FancyButton'
import { Container, BlackContainer, WhiteContainer, TitleContainer, Title, SubTitle, InfoContainer, TextContainer, Text, ImageContainer } from './styleHighlights'

export default function Highlights() {
	return (
		<Container>
			<BlackContainer>
				<TitleContainer>
					<Title>PRODUCT</Title>
				</TitleContainer>
				<TextContainer>
					<Text textColor='#fff'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam modi atque voluptas eaque nulla saepe minima illo minus vitae tempora sapiente eos ipsa quia praesentium.</Text>
				</TextContainer>
			</BlackContainer>
			<WhiteContainer>
				<InfoContainer>
					<SubTitle>PRODUCT TITLE</SubTitle>
					<TextContainer>
						<Text textColor='#000'>Ipsum lorem dolor sit amet consectetur adipisicing elit totam modi atque voluptas eaque nulla saepe minima.</Text>
					</TextContainer>
					<FancyButton text={"ver mais"} />
				</InfoContainer>
				<ImageContainer>
					<Image
						src="/thxz_beautiful_girl_flashy_banner_homepage_modern_ultra_realist_887c248c-21b9-4b9b-9725-51e1d5672ce6_digital_art_x4_light_ai.jpg"
						alt='banner_for_homepage_website_e-commerce'
						width={1980}
						height={1920} />
				</ImageContainer>
			</WhiteContainer>
		</Container >
	)
}