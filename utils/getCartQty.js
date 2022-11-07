import { useCart } from "../contexts/CartContext";

export const getCartQty = () => {
	let qty = 0;
	const { cart } = useCart()
	for (const item of cart) {
		qty += item.qty;
	}
	return qty
}