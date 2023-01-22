import SearchModal from './search-modal/SearchModal';
import { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { Container, Button, Form, SearchInput } from './styleSearch'
import { useForm } from 'react-hook-form';
import { searchProducts } from '../../../../lib/searchProducts';

export default function Search({ scrolldirection }) {
	const [items, setItems] = useState(undefined)
	const [isOpen, setIsOpen] = useState(false)
	const [find, setFind] = useState(undefined)
	const [loading, setLoading] = useState(false)
	const { register, handleSubmit } = useForm()
	const searchRef = useRef();

	const onSubmit = (data) => {
		setItems(undefined)
		setLoading(true)
		setFind(data?.search)
		if (data.search.length !== 0) {
			searchProducts({ search: data.search }).then((response) =>
				setItems(response.products) & setLoading(false)).catch((err) => console.log(err))
			return
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
			{isOpen && find &&
				<SearchModal scrolldirection={scrolldirection} find={find} setFind={setFind} items={items} loading={loading} setItems={setItems} setIsOpen={setIsOpen} />
			}
		</Container>
	)
}
