import style from './Input.module.css'
import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
import { SearchProducts } from '../../lib/SearchProducts';

export default function Input({ setSearching, setItems, setFind }) {
	const { register, handleSubmit } = useForm()

	const handleSearch = async (data) => {
		setSearching(true)
		setFind(data.search.replace(/ /g, '+'))
		if (data.search.length !== 0) {
			const search = await SearchProducts({ search: data.search })
			setItems(search)
			return setSearching(searching => !searching)
		}
	}
	return (
		<form className={style.searchContainer} onSubmit={handleSubmit(handleSearch)}>
			<label className={style.label}>
				<BsSearch className={style.icon} />
				<input {...register('search', { required: true, pattern: { value: /[_A-Za-z][_0-9A-Za-z]*/ } })} className={style.search} type='text' autoFocus={true} />
			</label>
		</form>
	)
}