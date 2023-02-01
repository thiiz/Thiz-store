import style from './index.module.css'
import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import { IoShield } from 'react-icons/io5'
import { ImUser, ImUserPlus } from 'react-icons/im'
import { useForm } from 'react-hook-form'
import valid from './valid'
import { postData } from '../../utils/fetchData'
import { useState } from 'react'
import ShowPass from '../showpass/ShowPass'
import { useNotify } from '../../contexts/NotifyContext'
import { ContainerForm, Title } from './styles/styleForms'
import { createUserWishlist } from '../../lib/hygraph/wishlist'

export default function Register({ setSwitchModal }) {
	const [showPass, setShowPass] = useState(false)
	const { register, watch, formState, handleSubmit, clearErrors, setError, setValue, setFocus } = useForm({
		mode: 'onSubmit',
		shouldFocusError: true,
		defaultValues: { name: '', secondName: '', email: '', password: '', cf_password: '' }
	})
	const { errors, isSubmitting, } = formState
	const { notifySuccess, notifyError } = useNotify()

	const handleChangeInput = e => {
		const { name, value } = e.target
		setValue(name, value)

		if (errors.name || errors.secondName || errors.email || errors.password || errors.cf_password)
			clearErrors(name)
	}

	const onSubmit = async (data) => {
		const check = valid(data.name, data.secondName, data.email, data.password, data.cf_password)
		if (check) {
			if (check.err === "name") return setError('name', { type: 'custom', message: check.msg })
			if (check.err === "secondName") return setError('secondName', { type: 'custom', message: check.msg })
			if (check.err === "email") return setError('email', { type: 'custom', message: check.msg })
			if (check.err === "password") return setError('password', { type: 'custom', message: check.msg })
			if (check.err === "cf_password") return setError('cf_password', { type: 'custom', message: check.msg })
		}
		if (data.terms !== "ok")
			return setError('terms', { type: 'custom', message: "Você deve aceitar nossa política de privacidade e os termos de uso para continuar" })

		const res = await postData('auth/register', data)

		if (res.err) {
			if (res.err === 'Endereço de email indisponível.') return setError('email', { type: 'custom', message: res.err })
			if (res.err) return notifyError({ msg: "Falha ao se cadastrar, por favor tente mais tarde" })
		}
		await postData('wishlist/create', { userEmail: data.email }).catch((err) => { console.log(err) })

		setSwitchModal("login")
		return notifySuccess({ msg: res.msg })
	}

	return (
		<>
			<Title>Criar conta</Title>
			<div>
				<ContainerForm onSubmit={handleSubmit(onSubmit)}>
					<div className={style.nameInput}>
						<label
							className={style.inputGroup}
							style={errors.name ? { borderColor: "#ff0000" } : {}}
						>
							<ImUser className={`${style.icon} ${style.iconUser}`} style={errors.name ? { color: "#ff0000" } : {}} />
							<input {...register('name', { required: 'Digite seu nome' })}
								onChange={handleChangeInput}
								className={`${style.input} ${errors.name ? style.inputError : style.inputNormal}`}
								type="text"
								name="name"
								autoComplete="given-name"
								autoFocus
								disabled={isSubmitting}
							/>
							<label className={`${style.placeHolder} ${watch('name') !== '' ? style.topPlaceholder : ''}`} style={errors.name ? { color: "#ff0000" } : {}}>
								{errors.name?.message || 'Nome'}
							</label>
						</label>

						<label
							className={style.inputGroup}
							style={errors.secondName ? { borderColor: "#ff0000" } : {}}
						>
							<ImUserPlus className={`${style.icon} ${style.iconUser}`} style={errors.secondName ? { color: "#ff0000" } : {}} />
							<input {...register('secondName', { required: 'Seu sobrenome' })}
								onChange={handleChangeInput}
								className={`${style.input} ${errors.secondName ? style.inputError : style.inputNormal}`}
								type="text"
								name="secondName"
								autoComplete="family-name"
								disabled={isSubmitting}
							/>
							<label className={`${style.placeHolder} ${watch('secondName') !== '' ? style.topPlaceholder : ''}`} style={errors.secondName ? { color: "#ff0000" } : {}}>
								{errors.secondName?.message || 'Sobrenome'}
							</label>
						</label>
					</div>

					<label
						className={style.inputGroup}
						style={errors.email ? { borderColor: "#ff0000" } : {}}
					>
						<MdEmail className={style.icon} style={errors.email ? { color: "#ff0000" } : {}} />
						<input {...register('email', { required: 'Insira um enderço de email valido' })}
							onChange={handleChangeInput}
							className={`${style.input} ${errors.email ? style.inputError : style.inputNormal}`}
							type="email"
							name="email"
							autoComplete="email"
							disabled={isSubmitting}
						/>
						<label
							className={`${style.placeHolder} ${watch('email') !== '' ? style.topPlaceholder : ''}`}
							style={errors.email ? { color: "#ff0000" } : {}}
						>
							{errors.email?.message || 'Email'}
						</label>
					</label>

					<label className={style.inputGroup}
						style={errors.password ? { borderColor: "#ff0000" } : {}}					>
						<RiLockFill className={style.icon} style={errors.password ? { color: "#ff0000" } : {}} />
						<input {...register('password', { required: 'Crie uma senha' })}
							onChange={handleChangeInput}
							className={`${style.input} ${errors.password ? style.inputError : style.inputNormal}`}
							type={showPass ? "text" : "password"}
							name="password"
							autoComplete="new-password"
							disabled={isSubmitting}
						/>
						<label
							className={`${style.placeHolder} ${watch('password') !== '' ? style.topPlaceholder : ''}`}
							style={errors.password ? { color: "#ff0000" } : {}}
						>
							{errors.password?.message || 'Senha'}
						</label>
						<ShowPass showPass={showPass} setShowPass={setShowPass} />
					</label>

					<label
						className={style.inputGroup}
						style={errors.cf_password ? { borderColor: "#ff0000" } : {}}
					>
						<IoShield className={style.icon} style={errors.cf_password ? { color: "#ff0000" } : {}} />
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
							onClick={() => setFocus('cf_password')}
						>
							{errors.cf_password?.message || 'Confirmar senha'}
						</label>
					</label>
					<div>
						{errors.terms && <p style={{ padding: "0 26px" }} className={style.error}>{errors.terms.message}</p>}
						<label id={style.politicaTermos}>
							<input {...register('terms')}
								style={errors.terms ? { outline: "2px solid red", outlineOffset: "1px" } : {}}
								onChange={() => clearErrors("terms")}
								type="checkbox" id={style.terms}
								name="terms"
								value="ok"
								disabled={isSubmitting}
							/>
							<div className={style.containerTerms}>
								<span>Ao se cadastrar você concorda com a nossa </span>
								<a className={style.link} href="#">Política de Privacidade</a>
								<span> e os </span>
								<a className={style.link} href="#">Termos de uso</a>
								<span>.</span>
							</div>
						</label>
					</div>
					{!errors.name && !errors.secondName && !errors.email && !errors.password && !errors.cf_password && !errors.terms ?
						<button type='submit' className={`${style.btn} ${isSubmitting ? style.btnLoading : ''}`} disabled={isSubmitting}>
							<span className={style.btnText}>criar conta</span>
						</button>
						:
						<button type='button' className={`${style.btn} ${style.btnError}`} disabled={true}>
							<span className={style.btnText}>criar conta</span>
						</button>
					}
				</ContainerForm>
				<div className={style.switchContainer}>
					<span className={style.or}>Ou</span>
					<button onClick={() => setSwitchModal("login")} type='button' className={style.switchBtn}>Fazer login</button>
				</div>
			</div>
		</>
	)
}