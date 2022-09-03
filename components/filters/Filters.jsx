import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId } from 'react'
import { Product } from '../products/productView'
import ProductNotFound from '..//product-not-found/productNotFound'
import { useEffect, useContext, memo } from 'react'
import Select from 'react-select';

function Filters({ data }) {
	const products = data.allProducts.map(product => product)
	const [searching, setSearching] = useState('')
	const [filters, setFilters] = useState(products)
	const formatSearch = searching.toLowerCase()
	const filterSearch = (filters.filter((product) =>
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



	const [filtred, setFiltred] = useState(filterSearch)
	const [selectedOption, setSelectedOption] = useState('')
	const [notfound, setNotfound] = useState(false)
	const options = [
		{ value: '', label: 'RECOMENDADO' },
		{ value: 'price_ASC', label: 'MAIOR VALOR' },
		{ value: 'price_DESC', label: 'MENOR VALOR' }
	]
	useEffect(() => {
		if (searching !== ' ') {
			setFiltred(filterSearch)
			//console.log(filtring)
			if (filterSearch.length === 0) {
				setNotfound(true)
			} else {
				setNotfound(false)
			}
		}
	}, [searching])

	useEffect(() => {
		if (selectedOption === '') {
			setFiltred(filterSearch)
		}
		if (selectedOption === 'price_ASC') {
			setFiltred(filterSearch.sort((a,b) => parseFloat(b.price) - (parseFloat(a.price))))
		}
		if (selectedOption === 'price_DESC') {
			setFiltred(filterSearch.sort((a,b) => (parseFloat(a.price) - parseFloat(b.price))))
		}

	}, [selectedOption])

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
			{notfound && <ProductNotFound search={searching} />}
			<Product onChange={''} products={filtred} />
		</>
	)
}

export const ProductFiltred = memo(Filters)