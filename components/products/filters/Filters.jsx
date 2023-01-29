import {
	Container,
	ButtonToggle,
	ContainerFilter,
	CLearFiltersButton
} from './styleFilters';
import Grid from './grid/Grid';
import OrderBy from './order-by/OrderBy'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAllProducts } from '../../../lib/getProducts';

export default function Filters({ products, setProducts, setPageInfo }) {
	const [isOpen, setIsOpen] = useState(false)
	const { push, pathname, query } = useRouter()

	const clearFilters = async () => {
		push(`${pathname}`, undefined, { shallow: true })
		const { products } = await getAllProducts()
		setProducts(products)
	}

	return (
		<Container>
			<ButtonToggle onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} type="button" id="buttonToggle">
				<span id="text">Filtrar</span>
				<RiArrowDownSLine id="icon" />
			</ButtonToggle>
			<ContainerFilter isOpen={isOpen}>
				<div id="five">
					<Grid />
				</div>

				<div id="six">
					<OrderBy setProducts={setProducts} products={products} setPageInfo={setPageInfo} />
				</div>

			</ContainerFilter>
			{query.term || query.sortBy ? <CLearFiltersButton onClick={clearFilters}>Limpar Filtros</CLearFiltersButton> : ''}
		</Container>

	)
}