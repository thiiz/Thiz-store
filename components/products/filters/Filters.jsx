import {
	Container,
	ButtonToggle,
	ContainerFilter,
	CLearFiltersButton,
	ContainerTopButtons
} from './styleFilters';
import Grid from './grid/Grid';
import OrderBy from './order-by/OrderBy'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAllProducts } from '../../../lib/hygraph/getProducts';

export default function Filters({ products, setProducts, setPageInfo }) {
	const [isOpen, setIsOpen] = useState(false)
	const { push, pathname, query } = useRouter()

	const clearFilters = () => {
		push(`${pathname}`, undefined, { shallow: true })
		getAllProducts().then((response) => {
			setProducts(response?.products)
			setPageInfo(response?.pageInfo)

		}).catch(err => {
			console.log(err)
			return
		})
		return
	}

	return (
		<Container>
			<ContainerTopButtons>
				<ButtonToggle onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} type="button" id="buttonToggle">
					<span id="text">Filtrar</span>
					<RiArrowDownSLine id="icon" />
				</ButtonToggle>
				{query.term || query.sortBy ? <CLearFiltersButton onClick={clearFilters}>Limpar Filtros</CLearFiltersButton> : ''}
			</ContainerTopButtons>
			<ContainerFilter isOpen={isOpen}>
				<div id="btMid">
					<Grid />
				</div>

				<div id="btRight">
					<OrderBy setProducts={setProducts} products={products} setPageInfo={setPageInfo} />
				</div>

			</ContainerFilter>
		</Container>

	)
}