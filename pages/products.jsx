import Filters from "../components/filters/Filters"
import { request } from '../lib/datocms';
import style from '../styles/Products.module.css'


export default function Products({ data }) {
	return (
		<div className={style.content}>
			<Filters data={data} />
		</div>
	)
}
export async function getStaticProps() {
	const PRODUCTSPAGE_QUERY = `query HomePage($limit: IntType) {
		allProducts(first: $limit) {
		id
			title
			price
			image {
			  responsiveImage(imgixParams: {fit: crop}){ 
				  src          
				  bgColor 
				  base64
				}
		  }
			defaultVisible
			slug
		  }
	}`;
	const data = await request({
		query: PRODUCTSPAGE_QUERY,
		variables: { limit: 100 }
	});
	return {
		props: { data: data.allProducts }
	};
}
