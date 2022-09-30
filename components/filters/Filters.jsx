import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId, useMemo } from 'react'
import { Product } from '../products/productView'
import ProductNotFound from '../product-not-found/productNotFound'
import { useEffect } from 'react'
import Select from 'react-select';
import { setCookie, parseCookies } from 'nookies'
import { useIsLarge } from '../../lib/MediaQuery'

export function ProductFiltred({ data }) {
	const desktop = useIsLarge()
	const [filtred, setFiltred] = useState([])
	const item = data.map(product => product)
	const [grid, setGrid] = useState(4)
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
		}
		if (selectedOption === 'price_ASC') {
			setFiltred(filtring().sort((a, b) => parseFloat(b.price) - (parseFloat(a.price))))
			setCookie(null, 'SORT_BY', 'price_ASC', {
				maxAge: 86400,
				path: '/',
			})
		}
		if (selectedOption === 'price_DESC') {
			setFiltred(filtring().sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))))
			setCookie(null, 'SORT_BY', 'price_DESC', {
				maxAge: 86400,
				path: '/',
			})
		}
	}, [selectedOption])
	return (
		<div className={style.container}>
			<div className={style.searchContainer} id='filterProducts'>
				<input onChange={s => setSearching(s.target.value)} value={searching} className={style.search} type='text' placeholder="Pesquisar" />
				<div className={style.searchLupa}>
					<BsSearch />
				</div>
			</div>
			<div className={style.sortPrice}>
				<h3 className={style.titleProducts}>PRODUTOS</h3>
				{desktop ?
					<div className={style.gridContainer}>
						<button onClick={() => setGrid(2)} className={style.gridButtonOption}><span className={`${style.gridOption} ${grid === 2 ? style.gridOptionActive : ''}`}></span><span className={`${style.gridOption} ${grid === 2 ? style.gridOptionActive : ''}`}></span></button>
						<button onClick={() => setGrid(3)} className={style.gridButtonOption}><span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span><span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span><span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span></button>
						<button onClick={() => setGrid(4)} className={style.gridButtonOption}><span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span><span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span><span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span><span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span></button>
					</div> : ''}
				<div>
					<span>ORDENAR POR:</span>
					<Select onChange={e => setSelectedOption(e.value)} hideSelectedOptions={true} defaultValue={selectedOption} instanceId={useId} options={options} className={style.priceSorting} name="priceSorting" isSearchable={false} />
				</div>
			</div>
			{notfound && <ProductNotFound search={searching} />}
			<Product onChange={''} products={filtred} grid={grid} />
		</div>
	)
}