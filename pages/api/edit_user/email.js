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
		const result = await auth(req, res)
		const { email, password } = req.body
		const user = await Users.findOne({ _id: result.id })
		const emailExist = await Users.findOne({ email })
		if (emailExist) return res.status(400).json({ err: 'Este endereço de email já está sendo utilizado.' })

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) return res.status(400).json({ err: 'Senha incorreta.' })

		await Users.findOneAndUpdate({ _id: result.id }, { email: email })

		res.json({ msg: "Endereço de email atualizado com sucesso!" })

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}