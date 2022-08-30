import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useId } from 'react'
import { useRouter } from 'next/router'
import Select from 'react-select'

export default function Filters() {
	const [sort, setSort] = useState(["RECOMENDADO", "MAIOR VALOR", "MENOR VALOR"])
	const Add = sort.map(Add => Add)

	const options = [
		{ query: 'recomended', label: 'RECOMENDADO' },
		{ query: 'sort=highprice', label: 'MAIOR VALOR' },
		{ query: 'sort=lowprice', label: 'MENOR VALOR' }
	]

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
				<Select /*onChange={e => sorting(e.value)}*/ defaultValue={options[0]} instanceId={useId} options={options} className={style.priceSorting} name="priceSorting">
					{
						Add.map((address, key) => <option key={address} query={key}>{address}</option>)
					}
				</Select>
			</div>
		</>
	)
}