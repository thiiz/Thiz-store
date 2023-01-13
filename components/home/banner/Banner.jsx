import Image from 'next/image';
import { BannerContainer, TitleContainer, MainSubTitle, MainTitle, ImageContainer, RightBar, BottomBar } from './styleBanner'
import { shimmer, toBase64 } from '../../../utils/loadImage';

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
						width={1280}
						height={1980}
						blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 800))}`}
						placeholder={"blur"}
					/>
				</ImageContainer>
				<RightBar />
				<BottomBar />
			</BannerContainer >
		</>
	);
}