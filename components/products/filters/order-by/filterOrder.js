export const lowToHighSort = (allProducts) => {
	const filteringProducts = allProducts.sort((a, b) => (parseFloat(a.price) - parseFloat(b.price)))
	let uniqueIds = new Set();

	let uniqueProducts = filteringProducts.filter(product => {
		if (uniqueIds.has(product.id)) {
			return false;
		} else {
			uniqueIds.add(product.id);
			return true;
		}
	});
	return uniqueProducts
}
export const highToLowSort = (allProducts) => {
	const filteringProducts = allProducts.sort((a, b) => (parseFloat(b.price) - parseFloat(a.price)))
	let uniqueIds = new Set();

	let uniqueProducts = filteringProducts.filter(product => {
		if (uniqueIds.has(product.id)) {
			return false;
		} else {
			uniqueIds.add(product.id);
			return true;
		}
	});
	return uniqueProducts
}