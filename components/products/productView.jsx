import ProductsItems from './productItems';
import style from '../../styles/Products.module.css'
import { useIsLarge } from '../../lib/MediaQuery';


function ProductView({ products, grid }) {
	const desktop = useIsLarge()
	return (
		<>
			<section className={`${style.container} ${desktop ? grid === 2 ? style.containerTwo : grid === 3 ? style.containerThree : style.containerFour : ''}`} >
				{products?.map((stock) => {
					return (
						<ProductsItems key={stock.id} stock={stock} grid={grid} />
					);
				})}
			</section>
		</>

	)
}
export const Product = ProductView