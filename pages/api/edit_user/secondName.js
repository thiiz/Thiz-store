import connectDB from '../../../lib/connectDB'
import Users from '../../../models/userModels'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
	switch (req.method) {
		case "PATCH":
			await secondName(req, res)
			break;
	}
}

const secondName = async (req, res) => {
	try {
		const result = await auth(req, res)
		const { secondName } = req.body
		await Users.findOneAndUpdate({ _id: result.id }, { secondName: secondName })
		const user = await Users.findOne({ _id: result.id })

		res.json({
			msg: "Sobrenome atualizado com sucesso!",
			user: {
				name: user.name,
				secondName: user.secondName,
				email: user.email,
				role: user.role,
				root: user.root
			}
		})

	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}