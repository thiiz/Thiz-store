import style from './Account.module.css'
import { useAuth } from '../../../contexts/AuthContext'
import { useState, useEffect } from 'react'
import ShowPass from '../../showpass/ShowPass'
import { FiEdit } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { useNotify } from '../../../contexts/NotifyContext'
import validEmail from './validEmail'
import { getData, patchData } from '../../../utils/fetchData'
import { useRouter } from 'next/router'

export default function Email() {
	const { auth, setAuth } = useAuth()
	const { register, setValue, handleSubmit } = useForm();
	const initialState = {
		email: '',
		password: '',
	}
	const [data, setData] = useState(initialState)
	const { email, password } = data

	const [showPass, setShowPass] = useState()
	const { notifyError, notifySuccess } = useNotify()
	const [editEmail, setEditEmail] = useState(false)
	const cancelEmail = () => {
		setData({ ...data, email: '' })
		setValue("email", auth.user.email)
		setEditEmail(false)
	}
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value })
	}
	async function handleUpdate(e) {
		e.preventDefault()
		const errEmail = validEmail(email)
		if (errEmail) return notifyError({ msg: errEmail })
		const res = await patchData('edit_user/email', data, auth.token)
		if (res.err) return notifyError({ msg: res.err })

		setEditEmail(false)
		return notifySuccess({ msg: res.msg })
	}

	return (
		<form onSubmit={handleSubmit(handleUpdate)}>
			<div className={style.form}>
				<label htmlFor='email' className={style.label}>email</label>
				<label className={style.inputContainer}>
					<input {...register("email")} className={style.input} type="text" onChange={handleChange} defaultValue={auth.user.email} name='email' placeholder='Endereço email' disabled={!editEmail && true} />
					{editEmail ?
						<button onClick={() => cancelEmail()} type='button' className={style.editBtn}> <MdCancel /></button>
						:
						<button onClick={() => setEditEmail(editEmail => !editEmail)} type='button' className={style.editBtn}> <FiEdit /></button>
					}
				</label>
			</div>
			{editEmail &&
				<>
					<div className={style.form}>
						<label htmlFor='password' className={style.label}>Senha</label>
						<input {...register("password")} onChange={handleChange} className={style.input} type={showPass ? "text" : "password"} name='password' placeholder='Senha' />
						<div className={style.showPass} >
							<ShowPass showPass={showPass} setShowPass={setShowPass} />
						</div>
					</div>
					<div className={style.containerBtn}>
						<button type='submit' onClick={handleUpdate}>Salvar</button>
					</div>
				</>
			}
		</form>
	)
}