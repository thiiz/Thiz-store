import Products from '../components/home/products/Products'
import Transition from '../components/transition/Transition';




export default function Produtos() {
	return (
		<Transition>
			<div className="page">
				<Products />
			</div>
		</Transition>
	);
}
