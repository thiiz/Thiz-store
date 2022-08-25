import style from '../styles/Products.module.css'
import Image from 'next/image'
import Product from '../public/img/products/product2.jpg'
import Filters from '../components/home/filters/Filters'
import Products from '../components/home/products/Products'



export default function Produtos() {
	return (
		<div className="page">
			<Products />
		</div>
	);
}
