import style from '../index.module.css'
import { HeaderBtns, CloseButton, ReturnButton } from '../styles/styleHeaderBtns'
import { useState } from 'react'
import { MdEmail, MdKeyboardBackspace } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { postData } from '../../../utils/fetchData'
import { useNotify } from '../../../contexts/NotifyContext'
import { validateEmail } from '../../../utils/validateEmail'
import { ContainerForm, Title } from '../styles/styleForms'

export default function ForgotPass({ setSwitchModal, setRecoverData }) {
	const { notifySuccess, notifyInfo } = useNotify()
	const { register, setValue, handleSubmit, watch, setError, setFocus, clearErrors, formState } = useForm({
		mode: "onSubmit",
		shouldFocusError: true,
		defaultValues: { email: '' }
	});

	const { errors, isSubmitting } = formState

	const handleChangeInput = e => {
		const { name, value } = e.target
		setValue(name, value)

		if (errors.email) clearErrors('email')
	}

	const onSubmit = async (data) => {
		if (!validateEmail(data.email)) return setError('email', { type: 'custom', message: 'Endereço de email inválido.' })
		const res = await postData('recover/sendCode', data)

		if (res.err) return setError('email', { type: 'custom', message: res.err })

		setRecoverData(prev => ({ ...prev, ["email"]: data.email }));
		if (res.info) {
			setSwitchModal("verifyRecoverCode")
			notifyInfo({ msg: res.info })
			return
		}
		setSwitchModal("verifyRecoverCode")
		return notifySuccess({ msg: res.msg })
	}

	return (
		<>
			<ReturnButton onClick={() => setSwitchModal("login")}>
				<MdKeyboardBackspace />
			</ReturnButton>
			<Title><span>Encontre sua conta</span></Title>
			<ContainerForm onSubmit={handleSubmit(onSubmit)}>
				<span style={{ textAlign: "center", fontSize: ".9rem", fontFamily: "Roboto, Arial, sans-serif", color: "#8d8d8d" }}>
					Insira o endereço de e-mail. Você receberá um código para confirmar que é você.
				</span>
				<div
					className={style.inputGroup}
					style={errors.email ? { borderColor: "#ff0000" } : {}}
				>
					<MdEmail onClick={() => setFocus('email')} className={style.icon} style={errors.email ? { color: "#ff0000" } : {}} />
					<input {...register('email', { required: 'Insira seu endereço de email' })}
						onChange={handleChangeInput}
						className={`${style.input} ${errors.email ? style.inputError : style.inputNormal}`}
						type="email"
						name="email"
						autoComplete="email"
						autoFocus
						disabled={isSubmitting}
					/>
					<label
						className={`${style.placeHolder} ${watch('email') !== '' ? style.topPlaceholder : ''}`}
						style={errors.email ? { color: "#ff0000" } : {}}
					>
						{errors.email?.message || 'Email'}
					</label>
				</div>
				{!errors.email ?
					<button type='submit' className={`${style.btn} ${isSubmitting ? style.btnLoading : ''}`} disabled={isSubmitting}>
						<span className={style.btnText}>enviar</span>
					</button>
					:
					<button type='button' className={`${style.btn} ${style.btnError}`} disabled={true}>
						<span className={style.btnText}>enviar</span>
					</button>
				}
			</ContainerForm>
		</>
	)
}