import connectDB from '../../../lib/connectDB'
import Users from '../../../models/userModels'
import { compare } from 'bcrypt'
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
		const result = await auth(req, res)
		const { email, password } = req.body
		const user = await Users.findOne({ _id: result.id })
		const newEmail = await Users.findOne({ email })
		if (newEmail) return res.status(400).json({ err: 'Este endereço de email está indisponível.' })

		const isMatch = await compare(password, user.password)
		if (!isMatch) return res.status(400).json({ err: 'Senha incorreta.' })

		await Users.findOneAndUpdate({ _id: result.id }, { email: email })

		const userUpdated = await Users.findOne({ _id: result.id })

		res.json({
			msg: "Endereço de email atualizado com sucesso!",
			user: {
				name: userUpdated.name,
				secondName: userUpdated.secondName,
				email: userUpdated.email,
				role: userUpdated.role,
				root: userUpdated.root
			}
		})

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}