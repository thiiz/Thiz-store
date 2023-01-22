import { useMemo, useState } from "react";
import ProductsGridProvider from "../../contexts/productsGridContext";
import Filters from './filters/Filters'
import ProductMap from "./ProductMap";
import { Container, ProductsTitle } from './styles/styleIndex'

export default function Products({ data, title }) {
	const [filter, setFilter] = useState([])

	useMemo(() => {
		setFilter(data);
	}, [data])
	return (
		<Container>
			<ProductsTitle>{title}</ProductsTitle>
			<ProductsGridProvider>
				<Filters data={data} filter={filter} setFilter={setFilter} />
				<ProductMap products={filter} />
			</ProductsGridProvider>
		</Container>
	)
}