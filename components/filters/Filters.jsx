import style from './Filters.module.css'
import { useState, useId, useEffect, useMemo } from 'react'
import ProductView from '../products/productView'
import Select from 'react-select';
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useIsLarge } from '../../lib/MediaQuery'
import Grid from './grid/Grid';

export function ProductFiltred({ data }) {
	const desktop = useIsLarge()
	const options = [
		{ value: 'default', label: 'RECOMENDADO' },
		{ value: 'price_DESC', label: 'MAIOR VALOR' },
		{ value: 'price_ASC', label: 'MENOR VALOR' }
	]
	const [selectedOption, setSelectedOption] = useState(undefined)
	const [grid, setGrid] = useState(Math.floor(parseCookies().GRID || 4))
	const [filtred, setFiltred] = useState([])
	const item = data?.map(product => product)
	useMemo(() => {
		setFiltred(item);
	}, [data])

	const handleChangeSortBy = (option) => {
		setSelectedOption(option);

		if (parseCookies().AcceptedCookies === "all") {
			setCookie(null, 'SORT_BY', option.value, {
				maxAge: 86400,
				path: '/',
			})
		};
	}
	useEffect(() => {
		if (parseCookies().SORT_BY === options[1].value) {
			setSelectedOption(options[1])
			return
		}
		if (parseCookies().SORT_BY === options[2].value) {
			setSelectedOption(options[2])
			return
		}
		setSelectedOption(options[0])
	}, [])

	useEffect(() => {
		if (selectedOption?.value === options[0].value) {
			setFiltred(item)
			destroyCookie(null, 'SORT_BY', {
				path: '/'
			})
			return
		}
		if (selectedOption?.value === options[1].value) {
			setFiltred(item?.sort((a, b) => parseFloat(b.price) - (parseFloat(a.price))))
			return
		}
		if (selectedOption?.value === options[2].value) {
			setFiltred(item?.sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))))
			return
		}
	}, [selectedOption])

	return (
		<div className={style.container}>
			<div className={style.sortPrice} id='filterProducts'>
				<h3 className={style.titleProducts}>PRODUTOS</h3>
				<div>
					<span>ORDENAR POR:</span>
					<Select
						onChange={(option) => handleChangeSortBy(option)}
						value={selectedOption}
						instanceId={useId}
						options={options}
						className={style.priceSorting}
						name="priceSorting"
						isSearchable={false} />
				</div>
			</div>
			<div className={style.filterOptions}>
				<Grid desktop={desktop} grid={grid} setGrid={setGrid} />
			</div>
			<ProductView products={filtred} grid={grid} />
		</div>
	)
}