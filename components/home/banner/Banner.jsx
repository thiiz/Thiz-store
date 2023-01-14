import Image from 'next/image';
import { BannerContainer, TitleContainer, MainSubTitle, MainTitle, ImageContainer, RightBar, BottomBar } from './styleBanner'
import { rgbDataURL } from '../../../utils/blurImage';

export default function Banner() {

	return (
		<>

			<BannerContainer>
				<TitleContainer>
					<MainTitle>
						<span>THE</span>
						<span>CRYSTAL</span>
						<span>PROJECT</span>
					</MainTitle>
					<MainSubTitle>Lorem ipsum dolor, sit amet consectetur elite.</MainSubTitle>
				</TitleContainer>
				<ImageContainer>
					<Image src='/thiz_this_is_girl_with_background_transparent.png' alt='girl looking left with background transparent'
						width={1224}
						height={1224}
						blurDataURL={rgbDataURL(255, 255, 255)}
						placeholder="blur"
					/>
				</ImageContainer>
				<RightBar />
				<BottomBar />
			</BannerContainer >
		</>
	);
}