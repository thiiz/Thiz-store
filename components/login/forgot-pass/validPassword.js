const validPassword = (password, cf_password) => {

	if (password.length < 6)
		return { password: 'A senha deve ter no minímo 6 caracteres.' }

	if (password !== cf_password)
		return { cf_password: 'As senhas devem ser iguais.' }
}

export default validPassword