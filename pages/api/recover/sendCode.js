import Users from '../../../models/userModels'
import RecoverAccount from '../../../models/recoverAccountModels'
import connectDB from '../../../lib/connectDB'
import nodemailer from 'nodemailer'
import SendEmailCode from '../../../utils/sendEmailCodeRecover'


const codeSixDigits = () => {
	const minm = 100000;
	const maxm = 999999;
	return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

connectDB()

export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await sendCode(req, res)
			break;
	}
}
const sendCode = async (req, res) => {
	try {
		const { email } = req.body
		const code = codeSixDigits()
		const user = await Users.findOne({ email })
		if (!user) return res.status(400).json({ err: 'Endereço de email não encontrado.' })

		const emailExistInForgotPass = await RecoverAccount.findOne({ email })
		if (emailExistInForgotPass) return res.status(302).json({ info: 'Um código de 6 dígitos foi enviado, verifique seu email.' })


		const newRecover = new RecoverAccount({
			email, code: code
		})
		await SendEmailCode(email, { code: code, name: user.name })
		await newRecover.save()
		res.json({
			msg: "Success!",
		});

	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
}