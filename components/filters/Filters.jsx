import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId } from 'react'
import { Product } from '../products/productView'
import ProductNotFound from '..//product-not-found/productNotFound'
import { useEffect, memo } from 'react'
import Select from 'react-select';

export function ProductFiltred({ data }) {
	const products = data.map(product => product)
	const [searching, setSearching] = useState('')
	const filtring = () => {
		const formatSearch = searching.toLowerCase()
		const filterSearch = (products.filter((product) =>
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
		return filterSearch
	}

	const [filtred, setFiltred] = useState(filtring())
	const [selectedOption, setSelectedOption] = useState('')
	const [notfound, setNotfound] = useState(false)
	const options = [
		{ value: '', label: 'RECOMENDADO' },
		{ value: 'price_ASC', label: 'MAIOR VALOR' },
		{ value: 'price_DESC', label: 'MENOR VALOR' }
	]
	useEffect(() => {
		setFiltred(filtring())
		if (searching !== ' ') {
			if (filtred.length === 0) {
				setNotfound(true)
			} else {
				setNotfound(false)
			}
		}
	}, [searching])

	useEffect(() => {
		if (selectedOption === '') {
			setFiltred(filtring())
		}
		if (selectedOption === 'price_ASC') {
			setFiltred(filtring().sort((a, b) => parseFloat(b.price) - (parseFloat(a.price))))
		}
		if (selectedOption === 'price_DESC') {
			setFiltred(filtring().sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))))
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