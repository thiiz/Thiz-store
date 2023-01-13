import SearchModal from './search-modal/SearchModal';
import { useEffect, useRef, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Container, Button, Form, SearchInput, Content } from './styleSearch'
import { useForm } from 'react-hook-form';
import { SearchProducts } from '../../../../lib/SearchProducts';
import { setCookie } from 'nookies';


export default function Search({ scrollDirection }) {
	const [items, setItems] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [find, setFind] = useState(null)
	const [searching, setSearching] = useState(false)
	const { register, handleSubmit } = useForm()
	const searchRef = useRef();

	const onSubmit = async (data) => {
		setItems([])
		setSearching(true)
		setFind(data.search.replace(/ /g, '+'))
		if (data.search.length !== 0) {
			const items = await SearchProducts({ search: data.search })
			setItems(items)
			return setSearching(searching => !searching)
		}
	}
	useEffect(() => {
		function handleClickOutside(event) {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [searchRef]);

	return (
		<Container ref={searchRef}>
			<Form
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(true);
				}}
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<Button scrollDirection={scrollDirection} type="submit" isOpen={isOpen}>
					<GrSearch />
				</Button>

				{isOpen &&
					<SearchInput
						autoFocus
						isOpen={isOpen}
						placeholder="Encontre um poduto"
						{...register('search', { required: true, pattern: { value: /[_A-Za-z][_0-9A-Za-z]*/ } })}
					/>}
			</Form>
			{isOpen &&
				<Content scrollDirection={scrollDirection}>
					<SearchModal find={find} scrollDirection={scrollDirection} data={items} searching={searching} setItems={setItems} setIsOpen={setIsOpen} />
				</Content>}
		</Container>
	)
}
