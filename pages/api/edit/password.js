import connectDB from '../../../lib/connectDB'
import Users from '../../../models/userModels'
import { compare, hash } from 'bcrypt'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
	switch (req.method) {
		case "PATCH":
			await password(req, res)
			break;
	}
}

const password = async (req, res) => {
	try {
		const result = await auth(req, res)
		const { password, newPassword } = req.body
		const user = await Users.findOne({ _id: result.id })

		const isMatch = await compare(password, user.password)
		if (!isMatch) return res.status(400).json({ err: 'Senha incorreta.' })

		const isEqual = await compare(newPassword, user.password)
		if (isEqual) return res.status(400).json({ err: 'Você já está utilizando essa senha.' })
		
		const passwordHash = await hash(newPassword, 12)
		await Users.findOneAndUpdate({ _id: result.id }, { password: passwordHash })

		res.json({ msg: "Senha atualizada com sucesso!" })

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}