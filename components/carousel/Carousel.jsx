
import { Conteiner, ContainerCarousel } from './styleCarousel';
import CarouselItems from './CarouselItems'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


export default function CarouselMap({ products, title }) {
	const items = products?.map((product, index) => {
		return <CarouselItems data-value={index} key={product.id} product={product} />
	})

	const responsive = {
		0: { items: 2 },
		568: { items: 3 },
		1024: { items: 4, itemsFit: 'undefined', },
	};
	return (
		<Conteiner>
			<h2>{title}</h2>
			<ContainerCarousel>
				<AliceCarousel
					responsive={responsive}
					mouseTracking
					items={items}
					paddingLeft={50}
					paddingRight={50}
					infinite
					controlsStrategy="alternate"
					disableButtonsControls
				/>
			</ContainerCarousel>
		</Conteiner>
	);
}