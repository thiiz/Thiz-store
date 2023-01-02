import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RiLockFill } from 'react-icons/ri'
import { useNotify } from '../../../contexts/NotifyContext'
import { patchData } from '../../../utils/fetchData'
import ShowPass from '../../showpass/ShowPass'
import style from '../index.module.css'
import validPassword from './validPassword'
export default function ChangePass({ setSwitchModal, recoverData }) {
	const { register, handleSubmit, setError, clearErrors, formState } = useForm()
	const { errors, isSubmitting } = formState
	const { notifySuccess } = useNotify()
	const [showPass, setShowPass] = useState(false)
	const initialState = { password: '', cf_password: '' }
	const [data, setData] = useState(initialState)
	const { password, cf_password } = data

	const handleChangeInput = e => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}

	const handler = async () => {
		const err = validPassword(password, cf_password)
		if (err) {
			if (err.password) return setError('password', { type: 'custom', message: err.password })
			if (err.cf_password) return setError('cf_password', { type: 'custom', message: err.cf_password })
		}

		const res = await patchData('recover/password', { email: recoverData.email, code: recoverData.code, password })
		if (res.err) {
			return setError('password', { type: 'custom', message: res.err })
		}

		setSwitchModal("login")
		return notifySuccess({ msg: res.msg })
	}
	return (
		<>
			<div className={style.loginTitle}>Alterar senha</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Lembrou a senha? <button onClick={() => setSwitchModal("login")} className={style.register}><strong>Faça login.</strong></button></div>
				<form className={style.form} onSubmit={handleSubmit(handler)} >
					{errors.password && <p className={style.error}>{errors.password.message}</p>}
					<label className={`${style.label} ${!errors.password ? style.labelNormal : style.labelError}`} onFocus={() => clearErrors("password")}>
						<RiLockFill className={`${style.icon} ${!errors.password ? style.iconNormal : style.iconError}`} />
						<input {...register('password', {
							required: true
						})} onChange={handleChangeInput} className={`${style.input} ${password !== '' ? style.validInput : ''}`} type={showPass ? "text" : "password"} name="password" autoComplete="off" />
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
						<span className={style.placeHolder}>Nova senha</span>
					</label>
					{errors.cf_password && <p className={style.error}>{errors.cf_password.message}</p>}
					<label className={`${style.label} ${!errors.cf_password ? style.labelNormal : style.labelError}`} onFocus={() => clearErrors("cf_password")}>
						<RiLockFill className={`${style.icon} ${!errors.cf_password ? style.iconNormal : style.iconError}`} />
						<input {...register('cf_password', {
							required: true
						})} onChange={handleChangeInput} className={`${style.input} ${cf_password !== '' ? style.validInput : ''}`} type="password" name="cf_password" autoComplete="off" />
						<span className={style.placeHolder}>Confirmar nova senha</span>
					</label>
					{!errors.password && !errors.cf_password ?
						<button type='submit' className={`${style.btn} ${isSubmitting ? style.btnLoading : ''}`} disabled={isSubmitting}>
							<span className={style.btnText}>enviar</span>
						</button>
						:
						<button type='button' className={`${style.btn} ${style.btnError}`} disabled={true}>
							<span>enviar</span>
						</button>
					}
				</form>
			</div>
		</>
	)
}