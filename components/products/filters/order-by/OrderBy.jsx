import { ContainerLabel, OrderBySpan } from './styleOrderBy'
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useEffect, useId, useState } from "react";
import Select from 'react-select';


export default function OrderBy({ data, setFilter }) {
	const options = [
		{ value: 'default', label: 'RECOMENDADO' },
		{ value: 'price_DESC', label: 'MAIOR VALOR' },
		{ value: 'price_ASC', label: 'MENOR VALOR' }
	]
	const [selectedOption, setSelectedOption] = useState(undefined)

	const handleChangeSortBy = (option) => {
		setSelectedOption(option);

		if (parseCookies().AcceptedCookies === "all") {
			setCookie(null, 'SORT_BY', option.value, {
				maxAge: 86400,
				path: '/',
			})
		};
	}

	useEffect(() => {
		if (parseCookies().SORT_BY === options[1].value) {
			setSelectedOption(options[1])
			return
		}
		if (parseCookies().SORT_BY === options[2].value) {
			setSelectedOption(options[2])
			return
		}
		setSelectedOption(options[0])
	}, [])

	useEffect(() => {
		if (selectedOption?.value === options[1].value) {
			setFilter(data?.sort((a, b) => parseFloat(b.price) - (parseFloat(a.price))))
			return
		}
		if (selectedOption?.value === options[2].value) {
			setFilter(data?.sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))))
			return
		}
		if (selectedOption?.value === options[0].value) {
			setFilter(data)
			destroyCookie(null, 'SORT_BY', {
				path: '/'
			})
		}
	}, [selectedOption])
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