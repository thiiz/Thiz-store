import style from './Input.module.css'
import { BsGeoAltFill, BsPhoneFill } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";
import { RiRoadMapFill } from "react-icons/ri";
import { useAuth } from '../../contexts/AuthContext';
import { useNotify } from '../../contexts/NotifyContext';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import valid from './valid';
import { useEffect } from 'react';

export default function Inputs() {
	const { notifyError } = useNotify()
	const { auth } = useAuth()
	const { register, handleSubmit, setValue, setFocus, getValues, formState: { errors } } = useForm();

	const [errorZipCode, setErrorZipCode] = useState(false)
	const [errorAddress, setErrorAddress] = useState(false)
	const [errorDistrict, setErrorDistrict] = useState(false)
	const [errorMobile, setErrorMobile] = useState(false)
	const [btn, setBtn] = useState(true)

	const initialState = {
		cep: '',
		endereco: '',
		bairro: '',
		complemento: '',
		telefone: '',
	}
	const [data, setData] = useState(initialState)
	const { cep, endereco, bairro, complemento, telefone } = data

	const handleChange = (e) => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}

	useEffect(() => {
		if (!cep) return
		if (
			cep.length === 6 &&
			cep.includes("-")
		) {
			const removeHyphen = cep.replace("-", "");
			setValue("cep", removeHyphen)
		}
		if (cep.length === 5) {
			setValue("cep", cep + "-")
		}
	}, [cep])

	const checkZip = async () => {
		const zipCode = cep.replace(/\D/g, '');
		if (zipCode.length === 8) {
			const fetchAddress = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
			const address = await fetchAddress.json()
			if (address.erro) {
				return setErrorZipCode(true), notifyError({ msg: "O CEP informado não foi encontrado." })
			}
			// setErrorZipCode(false)
			setFocus("complemento")
			if (address.bairro !== "") {
				setValue("bairro", address.bairro)
				setData(prev => ({ ...prev, bairro: getValues("bairro") }))
			} else {
				setFocus("bairro")
			}
			if (address.localidade !== "") {
				setValue("endereco", `${address.logradouro !== "" ? `${address.logradouro}, ` : ""} ${address.localidade} - ${address.uf}`)
				setData(prev => ({ ...prev, endereco: getValues("endereco") }))
			} else {
				setFocus("endereco")
			}
		}
	}
	const handleInfos = () => {
		setBtn(false)
		const errorMsg = valid(cep, endereco, bairro, telefone, { setErrorZipCode, setErrorAddress, setErrorMobile, setErrorDistrict })
		if (errorMsg) {
			return notifyError({ msg: errorMsg })
		}
		if (errorZipCode) {
			return
		}

		console.log(data)
	}
	return (
		<form onSubmit={handleSubmit(handleInfos)} className={style.form} onFocus={() => !btn && setBtn(true)}>
			{errors.zipCode?.message.length > 1 && <p className={style.error}>{errors.zipCode && errors.zipCode.message}</p>}
			<label className={`${style.label} ${!errorZipCode ? style.labelNormal : style.labelError}`}>
				<BsGeoAltFill className={`${style.icon} ${!errorZipCode ? style.iconNormal : style.iconError}`} />
				<input {...register("cep")} placeholder="CEP (obrigatório)" onChange={handleChange} className={style.input} onFocus={() => errorZipCode && setErrorZipCode(false)} onBlur={checkZip} maxLength={9} minLength={8} inputMode="numeric" />
			</label>
			<label className={`${style.label} ${!errorAddress ? style.labelNormal : style.labelError}`}>
				<RiRoadMapFill className={`${style.icon} ${!errorAddress ? style.iconNormal : style.iconError}`} />
				<input {...register("endereco")} inputMode="text" onChange={handleChange} onFocus={() => errorAddress && setErrorAddress(false)} placeholder="Endereço (obrigatório)" className={style.input} maxLength={32} />
			</label>
			<label className={`${style.label} ${!errorDistrict ? style.labelNormal : style.labelError}`}>
				<FaSearchLocation className={`${style.icon} ${!errorDistrict ? style.iconNormal : style.iconError}`} />
				<input {...register("bairro")} inputMode="text" onChange={handleChange} onFocus={() => errorDistrict && setErrorDistrict(false)} placeholder="Bairro (obrigatório)" className={style.input} maxLength={32} />
			</label>
			<label className={`${style.label} ${style.labelNormal}`}>
				<MdOutlineLocationCity className={`${style.icon} ${style.iconNormal}`} />
				<input {...register("complemento")} onChange={handleChange} inputMode="text" placeholder="Complemento" className={style.input} maxLength={100} />
			</label>
			<label className={`${style.label} ${!errorMobile ? style.labelNormal : style.labelError}`}>
				<BsPhoneFill className={`${style.icon} ${!errorMobile ? style.iconNormal : style.iconError}`} />
				<input {...register("telefone")} inputMode="tel" onChange={handleChange} onFocus={() => errorMobile && setErrorMobile(false)} placeholder="Telefone (obrigatório)" className={style.input} maxLength={15} />
			</label>
			{btn ?
				<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>Confirmar</button>
				: <button type='button' className={`${style.btn} ${style.btnDisable}`} disabled={true}>Confirmar</button>}
		</form>
	)
}