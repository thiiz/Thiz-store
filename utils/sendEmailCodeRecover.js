import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.USERMAIL,
		pass: process.env.PASSMAIL
	},

});
export default async function SendEmailCode(email, { code, name }) {
	const date = new Date()
	const send = await transporter.sendMail({
		from: '"Mae Terra 🌍" <ecommercethiz@gmail.com>', // sender address
		to: email, // list of receivers
		subject: "Seu código de verificação do ecommerce para redefinir a senha.", // Subject line
		text: `${code}`, // plain text body
		html: `
		<body style="margin:0;padding:0;">
			<p>
				olá, <span style="color: #0352fc">${name},</span>
			</p>
			<span> Alguém está tentando alterar a senha no Ecommerce. </span><span>Insira o seguinte código para continuar: <strong>${code}</strong>
			<p>
				<span style="fontStyle: italic, fontWeight: bold">Observe que este código expirará em ${new Date(date.setHours(date.getHours() + 1))}</span>
			</p>
		</body > `,
	})
}	