import { Container, ButtonToggle, ContainerFilter } from './styleFilters';
import Grid from './grid/Grid';
import OrderBy from './order-by/OrderBy'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useCallback, useState } from 'react';
import { useMemo } from 'react';

export default function Filters({ products, setProducts, initialProducts }) {
	const [isOpen, setIsOpen] = useState(false)

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
					<OrderBy setProducts={setProducts} products={products} initialProducts={initialProducts} />
				</div>

			</ContainerFilter>
		</Container>

	)
}