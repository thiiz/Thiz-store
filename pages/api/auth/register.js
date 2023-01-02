import connectDB from '../../../lib/connectDB'
import Users from '../../../models/userModels'
import valid from '../../../components/login/valid'
import { hash } from 'bcrypt'

connectDB()

export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await register(req, res)
			break;
	}
}

const register = async (req, res) => {
	try {
		const { name, secondName, email, password, cf_password } = req.body

		const errMsg = valid(name, secondName, email, password, cf_password)
		if (errMsg) return res.status(400).json({ err: errMsg })

		const user = await Users.findOne({ email })
		if (user) return res.status(400).json({ err: 'Endereço de email indisponível.' })

		const passwordHash = await hash(password, 12)

		const newUser = new Users({
			name, secondName, email, password: passwordHash, cf_password
		})

		await newUser.save()
		res.json({ msg: "Cadastrado com sucesso!" })

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}