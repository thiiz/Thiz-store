import style from './Search.module.css'
import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
import { SearchProducts } from '../../../lib/SearchProducts';

export default function Input({ setItems, scrollDirection }) {
	const { register, handleSubmit } = useForm()
	const handleSearch = async (data) => {
		if (data.search.length !== 0) {
			const search = await SearchProducts({ search: data.search })
			return setItems(search)
		}
	}
	return (
		<form className={`${style.searchContainer} ${scrollDirection !== 'down' ? style.searchContainerNormal : style.searchContainerSmall}`} onFocus={() => setItems([])} onSubmit={handleSubmit(handleSearch)}>
			<label className={style.label}>
				<BsSearch className={style.icon} />
				<input {...register('search', { required: true })} className={style.search} type='text' autoFocus={true} />
			</label>
		</form>
	)
}