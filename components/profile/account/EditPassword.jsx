import style from './Account.module.css'
import { useState } from 'react'
import ShowPass from '../../showpass/ShowPass'
import { useForm } from 'react-hook-form'
import { useNotify } from '../../../contexts/NotifyContext'
import { patchData } from '../../../utils/fetchData'
import validEditPassword from './validEditPassword'
import { useAuth } from '../../../contexts/AuthContext'

export default function EditPassword() {
	const { auth } = useAuth()
	const { register, setValue, handleSubmit } = useForm();

	const initialState = {
		password: '',
		newPassword: '',
		cf_newPassword: '',
	}
	const [data, setData] = useState(initialState)
	const { password, newPassword, cf_newPassword } = data

	const [showNewPass, setShowNewPass] = useState()
	const [showPass, setShowPass] = useState()
	const { notifyError, notifySuccess } = useNotify()

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value })
	}

	async function handleUpdate() {
		const errMsg = validEditPassword(password, newPassword, cf_newPassword)
		if (errMsg) return notifyError({ msg: errMsg })
		const res = await patchData('edit/password', { password, newPassword }, auth.token)
		if (res.err) return notifyError({ msg: res.err })
		setValue("password", '')
		setValue("newPassword", '')
		setValue("cf_newPassword", '')
		return notifySuccess({ msg: res.msg })
	}

	return (
		<form onSubmit={handleSubmit(handleUpdate)}>
			<div className={style.form}>
				<span className={style.label}>Senha</span>
				<input {...register("password")} className={style.input} onChange={handleChange} type={showPass ? "text" : "password"} name='password' placeholder='Senha' />
				<div className={style.showPass} >
					<ShowPass showPass={showPass} setShowPass={setShowPass} />
				</div>
			</div>
			<div className={style.form}>
				<span className={style.label}>Nova senha</span>
				<input {...register("newPassword")} onChange={handleChange} className={style.input} type={showNewPass ? "text" : "password"} name='newPassword' placeholder='Nova senha' />
				<div className={style.showPass} >
					<ShowPass showPass={showNewPass} setShowPass={setShowNewPass} />
				</div>
			</div>
			<div className={style.form}>
				<span className={style.label}>Confirmar nova senha</span>
				<input {...register("cf_newPassword")} onChange={handleChange} className={style.input} type="password" name='cf_newPassword' placeholder='Confirmar nova senha' />
			</div>
			<div className={style.containerBtn}>
				<button className={style.btn} type='submit'>Alterar</button>
			</div>
		</form>
	)

}