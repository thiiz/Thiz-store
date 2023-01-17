import style from '../index.module.css'
import { ReturnButton } from '../styles/styleHeaderBtns';
import styleInput from './InputCode.module.css'
import VerificationInput from "react-verification-input";
import { useRef } from 'react';
import { postData } from '../../../utils/fetchData';
import { useState } from 'react';
import { useNotify } from '../../../contexts/NotifyContext';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Title } from '../styles/styleForms';

const InputCode = ({ setSwitchModal, recoverData, setRecoverData }) => {
	const [err, setErr] = useState(false)
	const inputRef = useRef()
	const { notifyPromise, notifyPromiseSuccess, notifyPromiseError } = useNotify()

	const onSubmit = async (e) => {
		inputRef.current.disabled = true
		notifyPromise()

		const res = await postData('recover/getCode', { email: recoverData.email, code: e })

		inputRef.current.disabled = false
		if (res.err) {
			setErr(true)
			notifyPromiseError({ msg: res.err })
			return
		}
		setRecoverData(prev => ({ ...prev, ["code"]: e }));
		setSwitchModal("changePass")
		return notifyPromiseSuccess({ msg: res.msg })
	}
	return (
		<>
			<Title><span>ESQUECEU A SUA SENHA?</span></Title>
			<ReturnButton onClick={() => setSwitchModal("forgotPass")}>
				<MdKeyboardBackspace />
			</ReturnButton>
			<div style={{ textAlign: "center", width: "19rem", margin: "auto auto .625rem auto" }}>
				<span style={{ fontSize: ".9rem", fontFamily: "Roboto, Arial, sans-serif", color: "#8d8d8d" }}>Digite o código de 6 dígitos que enviamos por e-mail para continuar.</span>
			</div>
			<VerificationInput
				autoFocus
				onFocus={() => err && setErr(false)}
				validChars="0-9"
				inputProps={{ type: "tel" }}
				classNames={{
					character: err ? styleInput.characterError : styleInput.character,
				}}
				onChange={(e) => e.length === 6 && onSubmit(e)}
				ref={inputRef}
			/>
		</>
	);
};

export default InputCode;
