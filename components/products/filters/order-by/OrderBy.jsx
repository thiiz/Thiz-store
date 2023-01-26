import { ContainerLabel, OrderBySpan } from './styleOrderBy'
import { useEffect, useId, useState } from "react";
import Select from 'react-select';
import { getAllProducts } from '../../../../lib/getProducts';
import { useRouter } from 'next/router';
import { highToLowSort, lowToHighSort } from './filterOrder';

export default function OrderBy({ products, setProducts, initialProducts }) {
	const { query, push, pathname, isReady } = useRouter()
	const term = query.term;
	const sortBy = query.sortBy;
	const isSearchPage = term?.length >= 0
	const items = products?.map(product => product)
	const options = [
		{ value: 'inStock_DESC', label: 'RECOMENDADO' },
		{ value: 'price_DESC', label: 'MAIOR VALOR' },
		{ value: 'price_ASC', label: 'MENOR VALOR' }
	]
	const [selectedOption, setSelectedOption] = useState(undefined)

	const handleChangeSortBy = (option) => {
		setSelectedOption(option);
		const sort = option.value
		const limit = 12
		if (option.value === options[0].value) {

			getAllProducts(sort, limit).then((response) => {
				const allProducts = response?.products
				setProducts(allProducts)

			}).catch(err => {
				console.log(err)
				return
			})

			if (isSearchPage) {
				push({ query: { term: term } })
				return
			}
			push(`${pathname}`, undefined, { shallow: true })
			setProducts(initialProducts)
			return
		}

		if (isSearchPage) {
			push({ query: { term: term, sortBy: option.value } }, undefined, { shallow: true })
			setProducts(items?.sort((a, b) => parseFloat(b.price) - (parseFloat(a.price))))
			return
		}

		push({ query: { sortBy: option.value } })
		getAllProducts(sort, limit).then((response) => {
			const allProducts = response?.products

			setProducts(allProducts)
			return

		}).catch(err => {
			console.log(err)
			return
		})
	}

	useEffect(() => {
		if (!isReady) return
		if (!sortBy)
			return setSelectedOption(options[0])

		if (sortBy === options[1].value) {
			setSelectedOption(options[1])
			return
		}
		setSelectedOption(options[2])
	}, [isReady])

	return (
		<ContainerLabel>
			<OrderBySpan>ORDENAR POR:</OrderBySpan>
			<Select
				onChange={(option) => handleChangeSortBy(option)}
				value={selectedOption}
				instanceId={useId}
				options={options}
				className="Select"
				classNamePrefix="Select"
				name="priceSorting"
				isSearchable={false} />
		</ContainerLabel>
	)
}