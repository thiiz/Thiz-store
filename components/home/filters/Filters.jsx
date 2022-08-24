import style from './Filters.module.css'
import { BsSearch } from 'react-icons/bs'

export default function Filters() {
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
				<select className={style.priceSorting} name="priceSorting">
					<option value="l2h">MENOR VALOR</option>
					<option value="h2l">MAIOR VALOR</option>
				</select>
			</div>
		</>
	)
}