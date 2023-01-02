import Users from '../../../models/userModels'
import RecoverAccount from '../../../models/recoverAccountModels'
import connectDB from '../../../lib/connectDB'
import { compare } from 'bcrypt'

connectDB()

export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await getCode(req, res)
			break;
	}
}

const getCode = async (req, res) => {
	try {
		const { email, code } = req.body
		const data = await RecoverAccount.findOne({ email })

		const isMatch = code === data?.code

		if (!isMatch) return res.status(400).json({ err: 'Código inválido ou expirou.' })
		if (!data) return res.status(400).json({ err: 'Endereço de email não encontrado.' })

		res.json({
			msg: "Código confirmado.",
			email: email
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
}