import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdKeyboardBackspace } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { useNotify } from '../../../contexts/NotifyContext'
import { patchData } from '../../../utils/fetchData'
import ShowPass from '../../showpass/ShowPass'
import style from '../index.module.css'
import validPassword from './validPassword'

export default function ChangePass({ setSwitchModal, recoverData }) {
	const { register, watch, handleSubmit, setValue, setError, setFocus, clearErrors, formState } = useForm({
		mode: 'onSubmit',
		shouldFocusError: true,
		defaultValues: { password: '', cf_password: '' }
	})
	const { errors, isSubmitting } = formState
	const { notifySuccess } = useNotify()
	const [showPass, setShowPass] = useState(false)

	const handleChangeInput = e => {
		const { name, value } = e.target
		setValue(name, value)

		if (errors.password || errors.cf_password) clearErrors(name)
	}

	useEffect(() => {
		console.log('errors:', errors)
		if (errors.password) setFocus('password')
		if (errors.cf_password) setFocus('cf_password')
	}, [errors.password]);

	const onSubmit = async (data) => {
		const check = validPassword(data.password, data.cf_password)
		if (check) {
			if (check.err === "password") return setError('password', { type: 'custom', message: check.msg })
			if (check.err === "cf_password") return setError('cf_password', { type: 'custom', message: check.msg })
		}

		const res = await patchData('recover/password', { email: recoverData.email, code: recoverData.code, password: data.password })
		if (res.err) {
			return setError('password', { type: 'custom', message: res.err })
		}

		setSwitchModal("login")
		return notifySuccess({ msg: res.msg })
	}
	return (
		<div className={style.formContainer}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)} >
				<div
					className={style.inputGroup}
					style={errors.password ? { borderColor: "#ff0000" } : {}}
				>
					<RiLockFill onClick={() => setFocus('password')} className={style.icon} style={errors.password ? { color: "#ff0000" } : {}} />
					<input {...register('password', { required: 'Crie uma nova senha' })}
						onChange={handleChangeInput}
						className={`${style.input} ${errors.password ? style.inputError : style.inputNormal}`}
						type={showPass ? "text" : "password"}
						name="password"
						autoComplete="new-password"
						autoFocus
						disabled={isSubmitting}
					/>
					<label
						className={`${style.placeHolder} ${watch('password') !== '' ? style.topPlaceholder : ''}`}
						style={errors.password ? { color: "#ff0000" } : {}}
					>
						{errors.password?.message || "Nova senha"}
					</label>
					<ShowPass showPass={showPass} setShowPass={setShowPass} />
				</div>
				<div
					className={style.inputGroup}
					style={errors.cf_password ? { borderColor: "#ff0000" } : {}}
				>
					<RiLockFill onClick={() => setFocus('cf_password')} className={style.icon} style={errors.cf_password ? { color: "#ff0000" } : {}} />
					<input {...register('cf_password', { required: 'Digite novamente sua senha' })}
						onChange={handleChangeInput}
						className={`${style.input} ${errors.cf_password ? style.inputError : style.inputNormal}`}
						type="password"
						name="cf_password"
						autoComplete="off"
						disabled={isSubmitting}
					/>
					<label
						className={`${style.placeHolder} ${watch('cf_password') !== '' ? style.topPlaceholder : ''}`}
						style={errors.cf_password ? { color: "#ff0000" } : {}}
					>
						{errors.cf_password?.message || "Confirmar nova senha"}
					</label>
				</div>
				{!errors.password && !errors.cf_password ?
					<button type='submit' className={`${style.btn} ${isSubmitting ? style.btnLoading : ''}`} disabled={isSubmitting}>
						<span className={style.btnText}>enviar</span>
					</button>
					:
					<button type='button' className={`${style.btn} ${style.btnError}`} disabled={true}>
						<span className={style.btnText}>enviar</span>
					</button>
				}
			</form>
		</div>
	)
}