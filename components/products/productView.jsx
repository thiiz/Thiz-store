import ProductsItems from './productItems';
import style from '../../styles/Products.module.css'
import { useEffect } from 'react'
import { setCookie, parseCookies } from 'nookies'


function ProductView({ products, grid }) {
	return (
		<>
			<section className={`${style.container} ${grid === 2 ? style.containerTwo : grid === 3 ? style.containerThree : style.containerFour}`} >
				{products?.map((stock) => {
					return (
						<ProductsItems key={stock.id} stock={stock} grid={grid}/>
					);
				})}
			</section>
		</>

	)
}
export const Product = ProductView