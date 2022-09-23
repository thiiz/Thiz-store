import ProductsItems from './productItems';
import style from '../../styles/Products.module.css'


function ProductView({ products }) {
	return (

		<>
			<section className={style.container} >
				{products?.map((stock) => {
					return (
						<ProductsItems key={stock.id} stock={stock} />
					);
				})}
			</section>
		</>

	)
}
export const Product = ProductView