import { ProductContainer, ImageContainer, ProductImage, Name, ContainerPrice, DivBar, Price, OldPrice, Parcel } from './styles/styleProductItems';
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
		<ProductContainer grid={grid}>
			<ImageContainer grid={grid} onClick={handleViewProduct}>
				<ProductImage className={`${product?.inStock === 0 && "imgUnavailable"}`}
					src={product?.images[0]?.url}
					alt={product?.images[0]?.fileName}
					sizes='100%'
					fill />
			</ImageContainer>
			<Name onClick={handleViewProduct}>{product?.name}</Name>
			<ContainerPrice>
				<DivBar />
				<Price><strong>R$ {price}</strong></Price>
				{product?.oldPrice ?
					<OldPrice><strong>R$ {oldprice}</strong></OldPrice>
					:
					<Parcel>ou 6X <strong>R$ {parcel}</strong></Parcel>
				}
			</ContainerPrice>
		</ProductContainer>
	)
}
