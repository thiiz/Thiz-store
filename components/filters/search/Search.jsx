import style from './Search.module.css'
import SearchModal from './SearchModal';
import { useState } from 'react';
import Input from './Input';
import { GrSearch } from 'react-icons/gr';
import { useScrollDirection } from '../../../lib/useScrollDirection';

export default function Search() {
	const [items, setItems] = useState([])
	const [search, setSearch] = useState(false)
	const scrollDirection = useScrollDirection()

	return (
		<div className={style.container}>
			<button className={style.btn} onClick={() => setSearch(search => !search)}><GrSearch /></button>
			{search &&
				<div className={`${style.content} ${scrollDirection !== 'down' ? style.contentNormal : style.contentSmall}`}>
					<Input scrollDirection={scrollDirection} setItems={setItems} />
					<SearchModal scrollDirection={scrollDirection} data={items} setItems={setItems} setSearch={setSearch} />
				</div>
			}
		</div>
	)
}
