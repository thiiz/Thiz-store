import { Container, ButtonToggle, ContainerFilter } from './styleFilters';
import Grid from './grid/Grid';
import OrderBy from './order-by/OrderBy'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useState } from 'react';

export default function Filters({ data, setFilter }) {
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
					<OrderBy setFilter={setFilter} data={data} />
				</div>

			</ContainerFilter>
		</Container>

	)
}