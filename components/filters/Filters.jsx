import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId } from 'react'
import Select from 'react-select'
import ProductView from '../products/productView'
import ProductNotFound from '..//product-not-found/productNotFound'
import { useEffect } from 'react'

export default function Filters({ data }) {
	const products = data.map(product => product)
	const [searching, setSearching] = useState('')
	const [filters, setFilters] = useState(products)
	const formatSearch = searching.toLowerCase()
	const filtring = (filters.filter((product) =>
		product.title?.toLowerCase().includes(formatSearch)
		|| product.title?.toLowerCase().startsWith(...formatSearch)
		|| product.title?.toLowerCase().endsWith(...formatSearch)
		|| product.slug?.toLowerCase().includes(formatSearch)
		|| product.slug?.toLowerCase().startsWith(...formatSearch)
		|| product.slug?.toLowerCase().endsWith(...formatSearch)
		|| product.color?.toLowerCase().includes(formatSearch)
		|| product.color?.toLowerCase().startsWith(...formatSearch)
		|| product.color?.toLowerCase().endsWith(...formatSearch)

	))
	const [filtred, setFiltred] = useState(filtring)
	const [selectedOption, setSelectedOption] = useState('')
	const [load, setLoad] = useState(false)
	const options = [
		{ value: 'instock_DESC', label: 'RECOMENDADO' },
		{ value: 'price_ASC', label: 'MAIOR VALOR' },
		{ value: 'price_DESC', label: 'MENOR VALOR' }
	]
	useEffect(() => {
		if (searching !== ' ') {
			setFiltred(filtring)
			//console.log(filtring)
			if (filtring.length === 0) {
				setLoad(true)
			} else {
				setLoad(false)
			}
		}
		//console.log(load)
	}, [searching])
	return (
		<>
			<div className={style.container}>
				<div className={style.searchContainer}>
					<input onChange={s => setSearching(s.target.value)} value={searching} className={style.search} type='text' placeholder="Pesquisar" />
					<div className={style.searchLupa}>
						<BsSearch />
					</div>
				</div>
			</div>

			<h4>DESTAQUE</h4>
			<div className={style.sortPrice}>
				<span>ORDENAR POR:</span>
				<Select onChange={e => setSelectedOption(e.value)} defaultValue={selectedOption} instanceId={useId} options={options} className={style.priceSorting} name="priceSorting" />
			</div>
			<div>{selectedOption}</div>
			{load && <ProductNotFound search={searching} />}
			<ProductView onChange={''} products={filtred} />
		</>
	)
}