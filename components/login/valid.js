import { validateEmail } from '../../utils/validateEmail'
const valid = (name, secondName, email, password, cf_password) => {

	if (name.length < 3)
		return { err: "name", msg: 'Muito curto' }

	if (name.length > 32)
		return { err: "name", msg: 'Muito longo' }

	if (secondName.length < 3)
		return { err: "secondName", msg: 'Muito curto' }

	if (secondName.length > 32)
		return { err: "secondName", msg: 'Muito longo' }

	if (!validateEmail(email))
		return { err: "email", msg: 'Endereço de email inválido' }

	if (password.length < 6)
		return { err: "password", msg: 'A senha deve ter no minímo 6 caracteres' }

	if (cf_password !== password)
		return { err: "cf_password", msg: 'As senhas devem ser iguais' }
}

export default valid