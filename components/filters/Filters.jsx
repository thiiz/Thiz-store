import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import { changeSort } from '../../lib/dato-cms'

export default function Filters(e) {
	const [sort, setSort] = useState('')

	const sorting = (e) => {
		setSort(e)
	}
	return (
		<>
			<div className={style.container}>
				<div className={style.searchContainer}>
					<input className={style.search} type='text' placeholder="Pesquisar" />
					<div className={style.searchLupa}>
						<BsSearch />
					</div>
				</div>
			</div>
			<h4>DESTAQUE</h4>
			<div className={style.sortPrice}>
				<span>ORDENAR POR:</span>
				<select onChange={e => sorting(e.target.value)} className={style.priceSorting} name="priceSorting">
					<option value="(orderBy: price_DESC)">MENOR VALOR</option>
					<option value="(orderBy: price_ASC)">MAIOR VALOR</option>
				</select>
				<span>{sort}</span>
			</div>
		</>
	)
}