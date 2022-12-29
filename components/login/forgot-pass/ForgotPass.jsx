import style from '../index.module.css'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { postData } from '../../../utils/fetchData'
import { useNotify } from '../../../contexts/NotifyContext'
import Loader from '../../recover-account-loader/Loader'
export default function ForgotPass({ setSwitchModal, setLoading, setRecoverData }) {
	const [erro, setErro] = useState(false)
	const { register, handleSubmit } = useForm()
	const { notifyPromise, notifyPromiseSuccess, notifyPromiseError, notifyPromiseInfo } = useNotify()
	const initialState = { email: '' }
	const [data, setData] = useState(initialState)
	const { email } = data

	async function handler() {
		notifyPromise()
		setLoading(true)
		if (!validateEmail(data.email)) return notifyPromiseError({ msg: 'Endereço de email inválido.' }), setLoading(false), setErro(true)

		const res = await postData('recover/sendCode', data)

		if (res.err) {
			setErro(true)
			return notifyPromiseError({ msg: res.err }), setLoading(false)
		}
		setRecoverData({ email: data.email, code: '' })
		if (res.info) {
			setLoading(false)
			setSwitchModal("verifyRecoverCode")
			return notifyPromiseInfo({ msg: res.info })
		}
		return notifyPromiseSuccess({ msg: "Email enviado com sucesso." }), setSwitchModal("verifyRecoverCode"), setLoading(false)
	}

	const handleChangeInput = e => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}
	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	return (
		<>
			<div className={style.loginTitle}><span>Encontre sua conta</span></div>
			<form className={style.form} onSubmit={handleSubmit(handler)} onFocus={() => erro && setErro(false)}>
				<span style={{ textAlign: "center", fontSize: ".9rem", fontFamily: "Roboto, Arial, sans-serif", color: "#8d8d8d" }}>Insira o endereço de e-mail. Você receberá um código para confirmar que é você.</span>
				<label className={`${style.label} ${erro ? style.labelError : style.labelNormal}`} style={{ marginBottom: ".3rem" }}>
					<MdEmail className={`${style.icon} ${erro ? style.iconError : style.iconNormal}`} />
					<input {...register('email', {
						required: " "
					})} onChange={handleChangeInput} className={`${style.input} ${email !== '' ? style.validInput : ''}`} type="email" name="email" autoComplete="false" required />
					<span className={style.placeHolder}>Email</span>
				</label>
				{!erro ?
					<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>enviar</button>
					:
					<button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>enviar</button>
				}
			</form>
		</>
	)
}