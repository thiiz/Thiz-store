const validPassword = (password, newPassword, cf_newPassword) => {

	if (!password)
		return 'Por favor insira sua senha para confirmar as alterações.'

	if (newPassword.length < 6)
		return 'A sua nova senha deve ter no minímo 6 caracteres.'

	if (newPassword !== cf_newPassword)
		return 'As senhas devem ser iguais.'
}

export default validPassword