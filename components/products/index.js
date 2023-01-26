import ProductsGridProvider from "../../contexts/productsGridContext";
import Filters from './filters/Filters'
import ProductMap from "./ProductMap";
import { Container, ProductsTitle, PaginationButton } from './styles/styleIndex'

export default function Products({ products, setProducts, title, initialProducts }) {

	return (
		<Container>
			<ProductsTitle>{title}</ProductsTitle>
			<ProductsGridProvider>
				<Filters initialProducts={initialProducts} products={products} setProducts={setProducts} />
				<ProductMap products={products} />
			</ProductsGridProvider>
			<PaginationButton>VER MAIS</PaginationButton>
		</Container>
	)
}