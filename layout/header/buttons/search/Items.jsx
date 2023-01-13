import { Container, ContainerImg, Price, ProductImg, Title } from './styleItem'
import { useRouter } from "next/router";
import { toBase64, shimmer } from '../../../../utils/loadImage'


export default function Items({ item }) {
	const { push } = useRouter()
	const handleViewProduct = () => {
		push(`/produto/${item?.slug}`)
	}
	return (
		<Container>
			<ContainerImg onClick={handleViewProduct}>
				<ProductImg
					src={item?.image.url}
					alt={item?.title}
					width={128}
					height={120}
					blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(105, 120))}`}
					placeholder="blur"
				/>
			</ContainerImg>
			<Title onClick={handleViewProduct}>{item.title}</Title>
			<Price>R${item.price.toFixed(2).toString().replace(".", ",")}</Price>
		</Container>
	)
}