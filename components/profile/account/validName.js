const valid = (name, secondName) => {

	if (!name || !secondName)
		return 'all'

	if (name.length < 3)
		return 'O seu primeiro nome é muito curto.'

	if (secondName.length < 3)
		return 'O seu segundo nome é muito curto.'
}

export default valid