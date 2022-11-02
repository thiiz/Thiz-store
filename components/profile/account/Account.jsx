import style from './Account.module.css'
import { useAuth } from '../../../contexts/AuthContext'
import { useState, useEffect } from 'react'
import ShowPass from '../../showpass/ShowPass'
import { FiEdit } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { useNotify } from '../../../contexts/NotifyContext'
import validName from './validName'
import validEmail from './validEmail'
import { postData } from '../../../utils/fetchData'
import Email from './Email'
export default function Account() {
	const { auth } = useAuth()
	const { register, setValue, handleSubmit } = useForm();
	const initialState = {
		email: auth.user.email,
		password: '',
	}
	const [data, setData] = useState(initialState)
	const { email, password } = data

	const [showNewPass, setShowNewPass] = useState()
	const [showPass, setShowPass] = useState()
	const { notifyError, notifySuccess } = useNotify()
	const [editName, setEditName] = useState(false)
	const [editSecondName, setEditSecondName] = useState(false)
	const [update, setUpdate] = useState(false)

	const cancelName = () => {
		setData({ ...data, name: auth.user.name })
		setValue("name", auth.user.name)
		setEditName(false)
	}
	const cancelSecondName = () => {
		setData({ ...data, secondName: auth.user.secondName })
		setValue("secondName", auth.user.secondName)
		setEditSecondName(false)
	}
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value })
	}
	async function handleUpdate(e) {
		e.preventDefault()
		const res = await postData('edit_user/email', data)
		if (res.err === "This user does not exist." || res.err === "Incorrect password.") return notifyError({ msg: res.err })
		if (email !== auth.user.email) {
			const errEmail = validEmail(email, password)
			if (errEmail) return notifyError({ msg: errEmail })
		}


	}

	return (
		<div className={style.container}>
			<div className={style.containerTitle}>
				<h2 className={style.Title}>Detalhes da conta</h2>
			</div>
			<div className={style.content}>
				<form onSubmit={handleSubmit([])}>
					<div className={style.form}>
						<label htmlFor='name' className={style.label}>primeiro nome</label>
						<label className={style.inputContainer}>
							<input {...register("name")} className={`${style.input} ${style.nameInput}`} type="text" onChange={handleChange} defaultValue={auth.user.name} name='name' placeholder='Primeiro nome' disabled={!editName && true} />
							{editName ?
								<button onClick={() => cancelName()} type='button' className={style.editBtn}> <MdCancel /></button>
								:
								<button onClick={() => setEditName(true)} type='button' className={style.editBtn}> <FiEdit /></button>
							}
						</label>
					</div>
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
				<button type='submit' onClick={() => {}}>Salvar</button>
				</form>
				<Email />
			</div>
			<div className={style.containerTitle}>
				<h2 className={style.Title}>Altarar senha</h2>
			</div>
			<div className={style.content}>
				<div className={style.form}>
					<label htmlFor='oldPassword' className={style.label}>Senha</label>
					<input className={style.input} type="password" name='oldPassword' placeholder='Senha' />
					<div className={style.showPass} >
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
					</div>
				</div>
				<div className={style.form}>
					<label htmlFor='newPassword' className={style.label}>Nova senha</label>
					<input className={style.input} type="password" name='newPassword' placeholder='Nova senha' disabled={true} />
					<div className={style.showPass} >
						<ShowPass showPass={showNewPass} setShowPass={setShowNewPass} />
					</div>
				</div>
				<div className={style.form}>
					<label htmlFor='cf_newPassword' className={style.label}>Confirmar nova senha</label>
					<input className={style.input} type="password" name='cf_newPassword' placeholder='Confirmar nova senha' disabled={true} />
				</div>
			</div>
		</div >
	)
}