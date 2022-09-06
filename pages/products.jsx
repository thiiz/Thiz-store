import { ProductFiltred } from "../components/filters/Filters"
import style from '../styles/Products.module.css'


export default function Products() {
	
	return (
		<>

			<div className={`${style.content} page`}>
				<ProductFiltred />
			</div>
		</>

	)
}

