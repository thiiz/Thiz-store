import style from '../styles/Checkout.module.css'
import { useEffect, useState } from "react"
import { useNotify } from "../contexts/NotifyContext"
import { useLoginMenu } from "../contexts/LoginMenuContext"
import Paypal from '../components/pagamento/Paypal'
import { getData } from '../utils/fetchData'
import { useAuth } from '../contexts/AuthContext'
import Head from "next/head"
import { useForm } from "react-hook-form";
import { BsPhoneFill, BsGeoAltFill } from 'react-icons/bs'
import { FaSearchLocation } from 'react-icons/fa'
import { RiRoadMapFill } from 'react-icons/ri'
import { MdOutlineLocationCity } from 'react-icons/md'
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'



export default function Pagamento({ amount }) {
	const { notifyError } = useNotify()
	const { setToggleLoginMenu } = useLoginMenu()
	const { auth } = useAuth()
	const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm();
	const [zipCode, setzipCode] = useState()
	const [mobile, setMobile] = useState()

	const [errorAll, setErrorAll] = useState(false)
	const [errorZipCode, setErrorZipCode] = useState(false)
	const [errorAddress, setErrorAddress] = useState(false)
	const [errorDistrict, setErrorDistrict] = useState(false)
	const [errorMobile, setErrorMobile] = useState(false)

	const [btn, setBtn] = useState(true)
	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			getData('auth/accessToken').then(res => {
				if (res.err) return localStorage.removeItem("firstLogin")
			})
		} else {
			notifyError({ msg: "Você precisa fazer login para acessar essa página." })
			setToggleLoginMenu(true)
		}
	}, [])
	const checkZip = async (zip) => {
		const zipCode = zip.target.value.replace(/\D/g, '');
		if (zipCode.length === 8) {
			const fetchAddress = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
			const address = await fetchAddress.json()
			if (address.erro) {
				return setErrorZipCode(true), notifyError({ msg: "Por favor informe um CEP válido." })
			}
			setErrorZipCode(false)
			setFocus("complemento")
			if (address.bairro !== "") {
				setValue("bairro", address.bairro)
			} else {
				setFocus("bairro")
			}
			if (address.localidade !== "") {
				setValue("endereço", `${address.logradouro !== "" ? address.logradouro + "," : ''} ${address.localidade}, ${address.uf} `)
			} else {
				setFocus("endereço")
			}
			return console.log(address)
		}
	}
	const handleInfos = (data) => {
		const phoneNumber = isPossiblePhoneNumber(`+ 55${data.mobile}`)
		if (phoneNumber) {
			console.log(phoneNumber)
		}
		console.log(data)
	}
	return (
		<>
			{Object.keys(auth).length === 0 ? '' :
				<div className="page">
					<Head>
						<title>Mãe Terra - Pagamento</title>
					</Head>
					<div className={style.container}>
						<h1 className={style.title}>FINALIZAR COMPRA</h1>
						<form onSubmit={handleSubmit(handleInfos)} className={style.form}>
							{errors.zipCode?.message.length > 1 && <p className={style.error}>{errors.zipCode && errors.zipCode.message}</p>}
							<label className={`${style.label} ${!errorZipCode ? style.labelNormal : style.labelError}`}>
								<BsGeoAltFill className={`${style.icon} ${!errorZipCode ? style.iconNormal : style.iconError}`} />
								<input {...register("cep", {
									required: " ",
									pattern: {
										value: /^[0-9]+$/,
										message: 'Utilize apenas números.',
									}
								})} placeholder="CEP (obrigatório)" className={style.input} onFocus={() => errorZipCode ? setErrorZipCode(false) : ''} onBlur={checkZip} maxlength={8} minLength={8} inputMode="numeric" />
							</label>
							<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
								<RiRoadMapFill className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
								<input {...register("endereço", {
									required: " ",
								})} inputMode="text" placeholder="Endereço (obrigatório)" className={style.input} maxlength={32} />
							</label>
							<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
								<FaSearchLocation className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
								<input {...register("bairro", {
									required: " ",
								})} inputMode="text" placeholder="Bairro (obrigatório)" className={style.input} maxlength={32} />
							</label>
							<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
								<MdOutlineLocationCity className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
								<input {...register("complemento")} inputMode="text" placeholder="Complemento" className={style.input} maxlength={100} />
							</label>
							<label className={`${style.label} ${btn ? style.labelNormal : style.labelError}`}>
								<BsPhoneFill className={`${style.icon} ${btn ? style.iconNormal : style.iconError}`} />
								<Input {...register("telefone", {
									required: " ",
								})} inputMode="tel" defaultCountry="BR" value={mobile} onChange={setMobile} placeholder="Telefone (obrigatório)" className={style.input} maxlength={15} />
							</label>
							{btn ?
								<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>Confirmar</button>
								: <button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>Confirmar</button>}
						</form>
						<>
							<Paypal amount={amount} />
						</>
					</div>
				</div>
			}
			<div className="marginFooter"></div>
		</>


	)
}