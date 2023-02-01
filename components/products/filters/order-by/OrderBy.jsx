import { ContainerLabel, OrderBySpan } from './styleOrderBy'
import { useEffect, useId, useState } from "react";
import Select from 'react-select';
import { getAllProducts } from '../../../../lib/hygraph/getProducts';
import { useRouter } from 'next/router';

export default function OrderBy({ products, setProducts, setPageInfo }) {
	const { query, push, pathname, isReady } = useRouter()
	const term = query.term;
	const sortBy = query.sortBy;
	const isSearch = term?.length >= 0
	const items = products?.map(product => product)
	const options = [
		{ value: 'inStock_DESC', label: 'RECOMENDADO' },
		{ value: 'price_DESC', label: 'MAIOR VALOR' },
		{ value: 'price_ASC', label: 'MENOR VALOR' }
	]
	const [selectedOption, setSelectedOption] = useState(undefined)

	const handleChangeSortBy = (option) => {
		if (option.value === selectedOption.value) return
		const sort = option.value
		const search = term
		if (option.value === options[0].value) {
			if (isSearch) {
				push({ query: { term: term } }, undefined, { shallow: true })
			} else {
				push(`${pathname}`, undefined, { shallow: true })
			}
			getAllProducts(search, sort).then((response) => {
				setProducts(response?.products)
				setPageInfo(response?.pageInfo)

			}).catch(err => {
				console.log(err)
				return
			})
			return
		}


		if (isSearch) {
			push({ query: { term: term, sortBy: sort } })
			if (option.value === options[1].value) {
				setProducts(items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)))
				return
			}
			if (option.value === options[2].value) {
				setProducts(items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
				return
			}
		}

		push({ query: { sortBy: sort } })
		getAllProducts(search, sort).then((response) => {
			setProducts(response?.products)
			setPageInfo(response?.pageInfo)
		}).catch(err => {
			console.log(err)
			return
		})
		return
	}

	useEffect(() => {
		if (!isReady) return
		if (!sortBy)
			return setSelectedOption(options[0])

		if (sortBy === options[1].value) {
			setSelectedOption(options[1])
			return
		}
		if (sortBy === options[2].value) {
			setSelectedOption(options[2])
			return
		}
	}, [isReady, sortBy])

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