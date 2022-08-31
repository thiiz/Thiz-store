import { useEffect, useState } from "react"

export default function getProducts({ data }) {
	const products = data.map(product => product)
	const [search, setSearch] = useState(products)
	useEffect(() => {
		console.log('usou o useEffect')
		//setSearch(search)
	}, [data])

		return { search }
	}
