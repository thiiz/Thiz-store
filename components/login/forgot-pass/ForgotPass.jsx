import style from '../index.module.css'
import { useState } from 'react'
import { MdEmail, MdKeyboardBackspace } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { postData } from '../../../utils/fetchData'
import { useNotify } from '../../../contexts/NotifyContext'
import { validateEmail } from '../../../utils/validateEmail'

export default function ForgotPass({ setSwitchModal, setRecoverData }) {
	const { notifySuccess, notifyInfo } = useNotify()
	const { register, handleSubmit, setError, clearErrors, formState } = useForm()
	const { errors, isSubmitting } = formState
	const initialState = { email: '' }
	const [data, setData] = useState(initialState)
	const { email } = data

	async function handler() {
		if (!validateEmail(data.email)) return setError('email', { type: 'custom', message: 'Endereço de email inválido.' })

		const res = await postData('recover/sendCode', data)

		if (res.err) return setError('email', { type: 'custom', message: res.err })

		setRecoverData({ email: data.email, code: '' })
		if (res.info) {
			setSwitchModal("verifyRecoverCode")
			notifyInfo({ msg: res.info })
			return
		}
		setSwitchModal("verifyRecoverCode")
		return notifySuccess({ msg: res.msg })
	}


	const handleChangeInput = e => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}

	return (
		<>
			<button style={{ transform: `translate(0, -7px)` }} onClick={() => setSwitchModal("login")} className={`${style.returnLogin} ${style.topBtn} `}><MdKeyboardBackspace /></button>
			<div className={style.loginTitle}><span>Encontre sua conta</span></div>
			<form className={style.form} onSubmit={handleSubmit(handler)}>
				<span style={{ textAlign: "center", fontSize: ".9rem", fontFamily: "Roboto, Arial, sans-serif", color: "#8d8d8d" }}>Insira o endereço de e-mail. Você receberá um código para confirmar que é você.</span>
				{errors.email && <p className={style.error}>{errors.email.message}</p>}
				<label className={`${style.label} ${!errors.email ? style.labelNormal : style.labelError}`} style={{ marginBottom: ".3rem" }} onFocus={() => clearErrors('email')}>
					<MdEmail className={`${style.icon} ${!errors.email ? style.iconNormal : style.iconError}`} />
					<input {...register('email', {
						required: true
					})} onChange={handleChangeInput} className={`${style.input} ${email !== '' ? style.validInput : ''}`} type="email" name="email" autoComplete="false" />
					<span className={style.placeHolder}>Email</span>
				</label>
				{!errors.email ?
					<button type='submit' className={`${style.btn} ${isSubmitting ? style.btnLoading : ''}`} disabled={isSubmitting}>
						<span className={style.btnText}>enviar</span>
					</button>
					:
					<button type='button' className={`${style.btn} ${style.btnError}`} disabled={true}>
						<span>enviar</span>
					</button>
				}
			</form>
		</>
	)
}