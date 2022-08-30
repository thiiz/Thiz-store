const filterSearch = ({router, page, sort, search}) => {
	const path = router.pathname;
	const query = router.query;
	if(page) query.sort = sort;
	if(search) query.search = search;
	if(sort) query.sort = sort;
	

	router.push(({
		pathname: path,
		query: query
	}))
}