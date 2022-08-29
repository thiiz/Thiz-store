import ProductView  from "../components/products/productView"
import { request } from '../lib/datocms';


export default function Products({ data }) {
	return (
		<>
			<ProductView item={data} />
		</>
	)
}
export async function getStaticProps() {
	const HOMEPAGE_QUERY = `query HomePage {
	  allProducts {
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
		  _allProductsMeta {
			count
	  }
	}`;
	const data = await request({
	  query: HOMEPAGE_QUERY,
	  variables: { }
	});
	return {
	  props: { data: data.allProducts }
	};
  }
