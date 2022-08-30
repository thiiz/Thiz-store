import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useEffect, useId } from 'react'
import Select from 'react-select'

export default function Filters() {
	const [selectedOption, setSelectedOption] = useState('')
	const [search, setSearch] = useState('')
	const options = [
		{ value: 'instock_DESC', label: 'RECOMENDADO' },
		{ value: 'price_ASC', label: 'MAIOR VALOR' },
		{ value: 'price_DESC', label: 'MENOR VALOR' }
	]
	useEffect(() => {
		
	}, [search])

	function searching(){
		
	}

	return (
		<>
			<div className={style.container}>
				<div className={style.searchContainer}>
					<input onChange={s => setSearch(s.target.value)} className={style.search} type='text' placeholder="Pesquisar" />
					<div className={style.searchLupa}>
						<BsSearch />
					</div>
				</div>
			</div>

			<h4>DESTAQUE</h4>
			<div className={style.sortPrice}>
				<span>ORDENAR POR:</span>
				<Select onChange={e => setSelectedOption(e.value)} defaultValue={selectedOption} instanceId={useId} options={options} className={style.priceSorting} name="priceSorting"/>
			</div>
			<div>{selectedOption}</div>
		</>
	)
}