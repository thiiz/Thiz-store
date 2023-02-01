import { Container } from './styles/styleProductMap';
import ProductsItems from './ProductItems';
import { useIsLarge } from '../../lib/MediaQuery';
import { useProductsGrid } from '../../contexts/productsGridContext';
import { useAuth } from '../../contexts/AuthContext';
import { getWishlist } from '../../lib/hygraph/getWishlist';
import { useEffect, useState } from 'react';


export default function ProductMap({ products }) {
	const { grid } = useProductsGrid()
	const desktop = useIsLarge()
	const { auth } = useAuth()
	const [productsIdsInWishlist, setProductsIdsInWishlist] = useState([]);

	useEffect(() => {
		const productIDS = products.map(product => product.id)
		if (!auth.user) return
		getWishlist({ userEmail: auth.user.email }).then((productsInWishlist) => {
			const inWishlistProductsIds = productIDS.filter(idObject => {
				return productsInWishlist.some(obj => obj.id === idObject);
			});
			setProductsIdsInWishlist(inWishlistProductsIds)
		}).catch((err) => {
			console.error(err)
		})
	}, [auth]);

	return (
		<Container grid={desktop ? grid : ''} >
			{products?.map((product) => {
				return (
					<ProductsItems key={product.id} product={product} productsIdsInWishlist={productsIdsInWishlist} />
				);
			})}
		</Container>
	)
}
