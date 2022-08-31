import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId } from 'react'
import Select from 'react-select'
import ProductView from '../products/productView'

export default function Filters({ data }) {
	const filters = data.map(product => product)
	const [searching, setSearching] = useState('')
	const [selectedOption, setSelectedOption] = useState('')
	const options = [
		{ value: 'instock_DESC', label: 'RECOMENDADO' },
		{ value: 'price_ASC', label: 'MAIOR VALOR' },
		{ value: 'price_DESC', label: 'MENOR VALOR' }
	]
	const filtred = (filters.filter((product) => product.title.includes(searching)))

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
			<ProductView products={filtred} />
		</>
	)
}