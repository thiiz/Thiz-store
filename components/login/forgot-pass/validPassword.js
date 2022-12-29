const validPassword = (password, cf_password) => {

	if (password.length < 6)
		return 'A senha deve ter no minímo 6 caracteres.'

	if (password !== cf_password)
		return 'As senhas devem ser iguais.'
}

export default validPassword