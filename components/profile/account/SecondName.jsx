import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotify } from '../../../contexts/NotifyContext';
import { patchData } from '../../../utils/fetchData';
import style from './Account.module.css'
import validName from './validName';
export default function SecondName() {
	const [editSecondName, setEditSecondName] = useState(false)
	const { auth, setAuth } = useAuth()
	const { notifyError, notifySuccess } = useNotify()
	const { register, setValue, handleSubmit } = useForm();
	const initialState = {
		secondName: auth.user.secondName,
	}
	const [data, setData] = useState(initialState)
	const { secondName } = data
	const cancelSecondName = () => {
		setData({ ...data, secondName: '' })
		setValue("secondName", auth.user.secondName)
		setEditSecondName(false)
	}
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value })
	}
	async function handleUpdate() {
		const errEmail = validName({ name: secondName })
		if (errEmail) return notifyError({ msg: errEmail })
		const res = await patchData('edit_user/secondName', data, auth.token)
		if (res.err) return notifyError({ msg: res.err })

		setEditSecondName(false)
		setAuth({ token: auth.token, user: res.user })
		return notifySuccess({ msg: res.msg })
	}

	return (
		<form onSubmit={handleSubmit(handleUpdate)}>
			<div className={style.form}>
				<label htmlFor='secondName' className={style.label}>segundo nome</label>
				<label className={style.inputContainer}>
					<input {...register("secondName")} className={`${style.input} ${style.nameInput}`} type="text" onChange={handleChange} defaultValue={auth.user.secondName} name='secondName' placeholder='Segundo nome' disabled={!editSecondName && true} />
					{editSecondName ?
						<button onClick={() => cancelSecondName()} type='button' className={style.editBtn}> <MdCancel /></button>
						:
						<button onClick={() => setEditSecondName(editSecondName => !editSecondName)} type='button' className={style.editBtn}> <FiEdit /></button>
					}
				</label>
			</div>
			{editSecondName &&
				<div className={style.containerBtn}>
					<button className={style.btn} type='submit'>Alterar</button>
				</div>
			}
		</form>
	)
}