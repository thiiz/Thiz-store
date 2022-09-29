const valid = (name, email, password, cf_password, terms) => {

	if(!name || !email || !password || !cf_password)
	return 'all'

	if(name.length < 3)
	return 'O nome de usúario é muito curto.'

	if(!validateEmail(email))
	return 'Endereço de email inválido.'

	if(password.length < 6)
	return 'A senha deve ter no minímo 6 caracteres.'

	if(password !== cf_password)
	return 'As senhas devem ser iguais.'
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid