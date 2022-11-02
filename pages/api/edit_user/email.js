import connectDB from '../../../lib/connectDB'
import Users from '../../../models/userModels'
import bcrypt from 'bcrypt'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
	switch (req.method) {
		case "PATCH":
			await email(req, res)
			break;
	}
}

const email = async (req, res) => {
	try {
		console.log("req body")
		const { email, password } = req.body
		console.log("result")
		const result = await auth(req, res)
		const id = result.id;
		console.log("user")
		const user = await Users.findOne({ id })
		const newUser = await Users.findOne({ email })
		if (newUser) return res.status(400).json({ err: 'Este endereço de email já está sendo utilizado.' })

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) return res.status(400).json({ err: 'Senha incorreta.' })

		await Users.findOneAndUpdate({ _id: result.id }, { email: email })

		res.json({ msg: "Atualizado com sucesso!" })

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}