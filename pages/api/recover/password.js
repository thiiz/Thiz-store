import connectDB from '../../../lib/connectDB'
import Users from '../../../models/userModels'
import RecoverAccount from '../../../models/recoverAccountModels'
import { compare, hash } from 'bcrypt'

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
		const { email, code, password } = req.body

		const recoverUser = await RecoverAccount.findOne({ email })
		const verifyCode = recoverUser?.code === code
		if (!verifyCode) return res.status(400).json({ err: 'O código é inválido ou expirou.' })

		const user = await Users.findOne({ email })
		const isEqual = await compare(password, user.password)
		if (isEqual) return res.status(400).json({ err: 'Você já está utilizando essa senha.' })

		const passwordHash = await hash(password, 12)
		await Users.findOneAndUpdate({ _id: user.id }, { password: passwordHash })
		await RecoverAccount.deleteOne({ recoverUser })

		res.json({ msg: "Senha atualizada com sucesso!" })

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}