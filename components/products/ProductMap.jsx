import { Container } from './styles/styleProductMap';
import ProductsItems from './ProductItems';
import { useIsLarge } from '../../lib/MediaQuery';
import { useProductsGrid } from '../../contexts/productsGridContext';


export default function ProductMap({ products }) {
	const { grid } = useProductsGrid()
	const desktop = useIsLarge()
	return (
		<Container grid={desktop ? grid : ''} >
			{products?.map((product) => {
				return (
					<ProductsItems key={product.id} product={product} grid={grid} />
				);
			})}
		</Container>
	)
}
