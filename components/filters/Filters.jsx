import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId, useMemo } from 'react'
import ProductView from '../products/productView'
import ProductNotFound from '../product-not-found/productNotFound'
import { useEffect } from 'react'
import Select from 'react-select';
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useIsLarge } from '../../lib/MediaQuery'

export function ProductFiltred({ data }) {
	const desktop = useIsLarge()
	const options = [
		{ value: 'default', label: 'RECOMENDADO' },
		{ value: 'price_ASC', label: 'MAIOR VALOR' },
		{ value: 'price_DESC', label: 'MENOR VALOR' }
	]
	const [notfound, setNotfound] = useState(false)
	const [selectedOption, setSelectedOption] = useState(undefined)
	const [filtred, setFiltred] = useState([])
	const item = data.map(product => product)
	const [grid, setGrid] = useState(Math.floor(parseCookies().GRID || 4))
	useMemo(() => {
		setFiltred(item);
	}, [data])

	const [searching, setSearching] = useState('')
	const filtring = () => {
		const formatSearch = searching.toLowerCase()
		const filterSearch = (item?.filter((product) =>
			product.title?.toLowerCase().includes(formatSearch)
			|| product.color?.toLowerCase().includes(formatSearch)
		))
		return filterSearch
	}

	const HandelChangeSortBy = (option) => {
		setSelectedOption(option);
	};

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
		if (parseCookies().AcceptedCookies === "all") {
			if (grid === 4) {
				destroyCookie(null, 'GRID', { path: '/' })
				return
			}
			setCookie(null, 'GRID', grid, {
				maxAge: 86400,
				path: '/',
			})
		}
	}, [grid])

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

		if (selectedOption?.value === options[0].value) {
			setFiltred(filtring())
			if (parseCookies().AcceptedCookies === "all") {
				destroyCookie(null, 'SORT_BY', {
					path: '/'
				})
				return
			}
		}
		if (selectedOption?.value === options[1].value) {
			setFiltred(filtring().sort((a, b) => parseFloat(b.price) - (parseFloat(a.price))))
			if (parseCookies().AcceptedCookies === "all") {
				setCookie(null, 'SORT_BY', "price_ASC", {
					maxAge: 86400,
					path: '/',
				})
				return
			}
		}
		if (selectedOption?.value === options[2].value) {
			setFiltred(filtring().sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))))
			if (parseCookies().AcceptedCookies === "all") {
				setCookie(null, 'SORT_BY', "price_DESC", {
					maxAge: 86400,
					path: '/',
				})
				return
			}
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
				{desktop &&
					<div className={style.gridContainer}>
						<button onClick={() => setGrid(2)} className={style.gridButtonOption}>
							<span className={`${style.gridOption} ${grid === 2 ? style.gridOptionActive : ''}`}></span>
							<span className={`${style.gridOption} ${grid === 2 ? style.gridOptionActive : ''}`}></span>
						</button>
						<button onClick={() => setGrid(3)} className={style.gridButtonOption}>
							<span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span>
							<span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span>
							<span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span>
						</button>
						<button onClick={() => setGrid(4)} className={style.gridButtonOption}>
							<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
							<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
							<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
							<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
						</button>
					</div>}
				<div>
					<span>ORDENAR POR:</span>
					<Select
						onChange={(option) => HandelChangeSortBy(option)}
						value={selectedOption}
						instanceId={useId}
						options={options}
						className={style.priceSorting}
						name="priceSorting"
						isSearchable={false} />
				</div>
			</div>
			{notfound ? <ProductNotFound search={searching} /> : ''}
			<ProductView onChange={''} products={filtred} grid={grid} />
		</div>
	)
}