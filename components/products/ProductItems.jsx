import {
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
} from './styles/styleProductItems';
import { useRouter } from 'next/router';
import WishlistBtn from './wishlistButton/WishlistBtn';

export default function ProductsItems({ product, productsIdsInWishlist, grid }) {
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
			<BtContainer>
				<ContainerPrice onClick={handleViewProduct}>
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
				<WishlistBtn productID={product.id} productsIdsInWishlist={productsIdsInWishlist} />
			</BtContainer>
		</ProductContainer>
	)
}
