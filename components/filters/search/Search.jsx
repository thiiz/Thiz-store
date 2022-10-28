import style from './Search.module.css'
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";

export default function Search({ searching, setSearching }) {
	return (
		<form className={style.searchContainer}>
			<label className={style.label}>
				<BsSearch className={style.icon} />
				<input onChange={s => setSearching(s.target.value)} value={searching} className={style.search} type='text' />
			</label>
		</form>
	)
}
