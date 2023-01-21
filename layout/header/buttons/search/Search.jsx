import SearchModal from './search-modal/SearchModal';
import { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { Container, Button, Form, SearchInput } from './styleSearch'
import { useForm } from 'react-hook-form';
import { searchProducts } from '../../../../lib/searchProducts';
import { setCookie } from 'nookies';


export default function Search({ scrolldirection }) {
	const [items, setItems] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [find, setFind] = useState()
	const [searching, setSearching] = useState(false)
	const { register, handleSubmit } = useForm()
	const searchRef = useRef();

	const onSubmit = async (data) => {
		setItems([])
		setSearching(true)
		setFind(data?.search)
		if (data.search.length !== 0) {
			const products = await searchProducts({ search: data.search })
			setItems(products)
			return setSearching(searching => !searching)
		}
	}
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<Container ref={searchRef} onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}>
			<Form
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(true);
				}}
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<Button scrolldirection={scrolldirection} type="submit" isOpen={isOpen}>
					<GoSearch />
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
				<SearchModal scrolldirection={scrolldirection} find={find} data={items} searching={searching} setItems={setItems} setIsOpen={setIsOpen} />
			}
		</Container>
	)
}
