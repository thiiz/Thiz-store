export default function valid(cep, endereco, bairro, telefone, { setErrorZipCode, setErrorAddress, setErrorMobile, setErrorDistrict }) {
	if (!cep || !endereco || !bairro || !telefone) {
		setErrorZipCode(true)
		setErrorAddress(true)
		setErrorMobile(true)
		setErrorDistrict(true)
		return "Informe todos os campos obrigatórios."
	}


	if (endereco.length < 3) {
		setErrorAddress(true)
		return "Endereço muito curto."
	}

	if (bairro.length < 3) {
		setErrorDistrict(true)
		return "Bairro muito curto."
	}


	if (!validCep(cep)) {
		setErrorZipCode(true)
		return 'Informe um CEP válido.'
	}

	if (!validTelefone(telefone)) {
		setErrorMobile(true)
		return 'Informe um número de telefone válido.'
	}
}

function validCep(cep) {
	const cepRegex = new RegExp(/^\d{5}-?\d{3}$/)
	return cepRegex.test(cep)
}
function validTelefone(telefone) {
	const rgx =
		new RegExp("^((\(([1-9]{2})\))(\s)?(\.)?(\-)?([0-9]{0,1})?([0-9]{4})(\s)?(\.)?(\-)?([0-9]{4})|(([1-9]{2}))(\s)?(\.)?(\-)?([0-9]{0,1})?([0-9]{4})(\s)?(\.)?(\-)?([0-9]{4}))$")
	return rgx.test(telefone)
}