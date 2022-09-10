import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId, useMemo } from 'react'
import { Product } from '../products/productView'
import ProductNotFound from '../product-not-found/productNotFound'
import { useEffect } from 'react'
import Select from 'react-select';
import { setCookie, parseCookies } from 'nookies'

export function ProductFiltred({ data }) {
	const [filtred, setFiltred] = useState([])
	const item = data.map(product => product)
	useMemo(() => {
		setFiltred(item);
	}, [data])
	const [searching, setSearching] = useState('')
	const filtring = () => {
		const formatSearch = searching.toLowerCase()
		const filterSearch = (item?.filter((product) =>
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

	const [selectedOption, setSelectedOption] = useState(parseCookies().SORT_BY)
	const [notfound, setNotfound] = useState(false)
	const [option, setOption] = useState(null)
	const options = [
		{ value: 'default', label: 'RECOMENDADO' },
		{ value: 'price_ASC', label: 'MAIOR VALOR' },
		{ value: 'price_DESC', label: 'MENOR VALOR' }
	]
	useEffect(() => {
		setFiltred(filtring())
		if (searching !== '') {
			if (filtred.length === 0) {
				setNotfound(true)
			} else {
				setNotfound(false)
			}
		}
	}, [searching])

	useEffect(() => {
		if (selectedOption === 'default') {
			setFiltred(filtring())
			setCookie(null, 'SORT_BY', 'default', {
				maxAge: 86400,
				path: '/',
			})
			setOption(0)
		}
		if (selectedOption === 'price_ASC') {
			setFiltred(filtring().sort((a, b) => parseFloat(b.price) - (parseFloat(a.price))))
			setCookie(null, 'SORT_BY', 'price_ASC', {
				maxAge: 86400,
				path: '/',
			})
			setOption(1)
		}
		if (selectedOption === 'price_DESC') {
			setFiltred(filtring().sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))))
			setCookie(null, 'SORT_BY', 'price_DESC', {
				maxAge: 86400,
				path: '/',
			})
			setOption(2)
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
			<div className={style.sortPrice}>
				<h3 className={style.titleProducts} id='filterProducts'>PRODUTOS</h3>
				<div>
					<span>ORDENAR POR:</span>
					{option &&(
						<Select onChange={e => setSelectedOption(e.value)} hideSelectedOptions={true} defaultValue={options[option]} instanceId={useId} options={options} className={style.priceSorting} name="priceSorting" isSearchable={false} />
					)}
				</div>
			</div>
			{notfound && <ProductNotFound search={searching} />}
			<Product onChange={''} products={filtred} />
		</>
	)
}