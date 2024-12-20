import {
	ProductContainer,
	ImageContainer,
	ProductImage,
	Name,
	ContainerPrice,
	Price,
	OldPrice,
	Parcel,
	TextUnavailable
} from './styles/styleProductItems';
import { useRouter } from 'next/router';

export default function ProductsItems({ product, grid }) {
	const router = useRouter()

	const handleViewProduct = () => {
		router.push(`/produto/${product?.slug}`)
	}

	const price = product?.price.toFixed(2).toString().replace('.', ',')
	const oldprice = product?.oldPrice?.toFixed(2).toString().replace('.', ',')
	const calcParcel = (Math.round(product?.price / 6 * 100)) / 100.0;
	const parcel = calcParcel.toString().replace(".", ",");

	return (
		<ProductContainer grid={grid} onClick={handleViewProduct}>
			<ImageContainer grid={grid}>
				<ProductImage className={`${product?.inStock === 0 && "imgUnavailable"}`}
					src={product?.images[0]?.url}
					alt={product?.images[0]?.fileName}
					sizes='100%'
					fill />
			</ImageContainer>
			<Name>{product?.name}</Name>
			<ContainerPrice>
				{product?.inStock !== 0 ?
					<>
						<Price><strong>R$ {price}</strong></Price>
						{product?.oldPrice ?
							<OldPrice>R$ {oldprice}</OldPrice>
							:
							<Parcel>Ou 6X de <span>R$ {parcel}</span></Parcel>
						}
					</>

					: <TextUnavailable>Esgotado</TextUnavailable>}

			</ContainerPrice>
		</ProductContainer>
	)
}
