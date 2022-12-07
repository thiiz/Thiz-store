import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotify } from '../../../contexts/NotifyContext';
import { patchData } from '../../../utils/fetchData';
import style from './Account.module.css'
import validName from './validName';
export default function Name() {
	const [editName, setEditName] = useState(false)
	const { auth, setAuth } = useAuth()
	const { notifyError, notifySuccess } = useNotify()
	const { register, setValue, handleSubmit } = useForm();
	const initialState = {
		name: auth.user.name,
	}
	const [data, setData] = useState(initialState)
	const { name } = data
	const cancelName = () => {
		setData({ ...data, name: '' })
		setValue("name", auth.user.name)
		setEditName(false)
	}
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value })
	}
	async function handleUpdate() {
		if (auth.user.name === name) return notifyError({ msg: "Você já está utilizando este nome." })
		const errEmail = validName(name)
		if (errEmail) return notifyError({ msg: errEmail })
		const res = await patchData('edit/name', data, auth.token)
		if (res.err) return notifyError({ msg: res.err })

		setEditName(false)
		setAuth({ token: auth.token, user: res.user })
		return notifySuccess({ msg: res.msg })
	}

	return (
		<form onSubmit={handleSubmit(handleUpdate)}>
			<div className={style.form}>
				<span htmlFor='name' className={style.label}>nome</span>
				<label className={style.inputContainer}>
					<input {...register("name")} className={`${style.input} ${style.nameInput}`} type="text" onChange={handleChange} defaultValue={auth.user.name} name='name' placeholder='Primeiro nome' disabled={!editName && true} />
					{editName ?
						<button onClick={() => cancelName()} type='button' className={style.editBtn}> <MdCancel /></button>
						:
						<button onClick={() => setEditName(true)} type='button' className={style.editBtn}> <FiEdit /></button>
					}
				</label>
			</div>
			{editName &&
				<div className={style.containerBtn}>
					<button className={style.btn} type='submit'>Alterar</button>
				</div>
			}
		</form>
	)
}