import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RiLockFill } from 'react-icons/ri'
import { useNotify } from '../../../contexts/NotifyContext'
import { patchData } from '../../../utils/fetchData'
import ShowPass from '../../showpass/ShowPass'
import style from '../index.module.css'
import validPassword from './validPassword'
export default function chanchePass({ setSwitchModal, setLoading, recoverData }) {
	const { register, handleSubmit } = useForm()
	const { notifyPromise, notifyPromiseSuccess, notifyPromiseError } = useNotify()
	const [erro, setErro] = useState(false)
	const [showPass, setShowPass] = useState(false)
	const [errorPassword, setErrorPassword] = useState(false)
	const [errorCf, setErrorCf] = useState(false)
	const initialState = { password: '', cf_password: '' }
	const [data, setData] = useState(initialState)
	const { password, cf_password } = data

	const handleChangeInput = e => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}

	const handler = async () => {
		setErro(true)
		notifyPromise()
		const err = validPassword(password, cf_password)
		if (err) return notifyPromiseError({ msg: err }), setLoading(false)
		const res = await patchData('recover/password', { email: recoverData.email, code: recoverData.code, password })
		if (res.err) return notifyPromiseError({ msg: res.err }), setLoading(false)

		return notifyPromiseSuccess({ msg: res.msg }), setSwitchModal("login"), setLoading(false)
	}
	return (
		<>
			<div className={style.loginTitle}>Alterar senha</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Lembrou a senha? <button onClick={() => setSwitchModal("login")} className={style.register}><strong>Faça login.</strong></button></div>
				<form className={style.form} onSubmit={handleSubmit(handler)} onFocus={() => erro && setErro(false)}>
					<label className={`${style.label} ${!errorPassword ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorPassword ? style.iconNormal : style.iconError}`} />
						<input {...register('password', {
							required: " "
						})} onChange={handleChangeInput} className={`${style.input} ${password !== '' ? style.validInput : ''}`} type={showPass ? "text" : "password"} name="password" autoComplete="false" required />
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
						<span className={style.placeHolder}>Nova senha</span>
					</label>
					<label className={`${style.label} ${!errorCf ? style.labelNormal : style.labelError}`}>
						<RiLockFill className={`${style.icon} ${!errorCf ? style.iconNormal : style.iconError}`} />
						<input {...register('cf_password', {
							required: " "
						})} onChange={handleChangeInput} className={`${style.input} ${cf_password !== '' ? style.validInput : ''}`} type="password" name="cf_password" autoComplete="false" required />
						<span className={style.placeHolder}>Confirmar nova senha</span>
					</label>
					{!erro ?
						<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>enviar</button>
						:
						<button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>enviar</button>
					}
				</form>
			</div>
		</>
	)
}