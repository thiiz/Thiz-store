const validPassword = (password, cf_password) => {

	if (password.length < 6)
		return { err: "password", msg: 'A senha deve ter no minímo 6 caracteres.' }

	if (password !== cf_password)
		return { err: "cf_password", msg: 'As senhas devem ser iguais.' }
}

export default validPassword