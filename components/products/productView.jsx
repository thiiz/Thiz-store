import { useState } from 'react';
import ProductsItems from './productItems';
import Filters from '../filters/Filters';
import style from '../../styles/Products.module.css'


export default function ProductView({ item }) {
	const product = item.map(product => product)
	const [stock, setStock] = useState(product)
	return (

		<div className={`${style.content}`} id='produtos'>
			<Filters data={stock}/>
			<section className={style.container} >
				{stock.map((stock) => {
					return (
						<ProductsItems key={stock.id} stock={stock} />
					);
				})}
			</section>
		</div>

	)
}