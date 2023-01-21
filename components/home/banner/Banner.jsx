import Image from 'next/image';
import { BannerContainer, TitleContainer, MainSubTitle, MainTitle, ImageContainer, RightBar, BottomBar, RightContainer } from './styleBanner'
import { rgbDataURL } from '../../../utils/blurImage';

export default function Banner() {

	return (
		<>

			<BannerContainer>
				<div id='title'>
					<MainTitle>
						<span>THE</span>
						<span>CRYSTAL</span>
						<span>PROJECT</span>
					</MainTitle>
					<MainSubTitle>Lorem ipsum dolor, sit amet consectetur elite.</MainSubTitle>
				</div>
				<RightContainer>
					<ImageContainer id='image'>
						<Image src='/thiz_this_is_girl_with_background_transparent.png' alt='girl looking left with background transparent'
							width={1318}
							height={1318}
							blurDataURL={rgbDataURL(255, 255, 255)}
							placeholder="blur"
						/>
					</ImageContainer>
					<RightBar />
				</RightContainer>
				<BottomBar id='bottomBar' />
			</BannerContainer >
		</>
	);
}