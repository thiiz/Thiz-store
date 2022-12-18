import style from './Search.module.css'
import styleBtn from '../../layout/header/Header.module.css'
import SearchModal from './search-modal/SearchModal';
import { useState } from 'react';
import Input from './Input';
import { GrSearch } from 'react-icons/gr';
import { useScrollDirection } from '../../lib/useScrollDirection';

export default function Search() {
	const [items, setItems] = useState([])
	const [search, setSearch] = useState(false)
	const [find, setFind] = useState(null)
	const [searching, setSearching] = useState(false)
	const scrollDirection = useScrollDirection()
	
	return (
		<div className={style.container}>
			<button className={`${styleBtn.btn} ${styleBtn.btnInfo}`} onClick={() => setSearch(search => !search)}><GrSearch /></button>
			{search &&
				<div className={`${style.content} ${scrollDirection !== 'down' ? style.contentNormal : style.contentSmall}`}>
					<Input setFind={setFind} setItems={setItems} setSearching={setSearching} />
					<SearchModal find={find} scrollDirection={scrollDirection} data={items} searching={searching} setItems={setItems} setSearch={setSearch} />
				</div>
			}
		</div>
	)
}
