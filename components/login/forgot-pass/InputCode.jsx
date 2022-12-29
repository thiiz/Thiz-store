import style from './InputCode.module.css'
import VerificationInput from "react-verification-input";
import { useRef } from 'react';
import { postData } from '../../../utils/fetchData';
import { useNotify } from '../../../contexts/NotifyContext';
import { useState } from 'react';

const InputCode = ({ setSwitchModal, setLoading, recoverData, setRecoverData }) => {
	const { notifyPromise, notifyPromiseSuccess, notifyPromiseError } = useNotify()
	const [error, setError] = useState(false)
	const inputRef = useRef()

	const handle = async (e) => {
		notifyPromise()
		const data = { email: recoverData.email, code: e }
		setRecoverData(data)
		inputRef.current.blur()
		const res = await postData('recover/getCode', data)
		if (res.err) return notifyPromiseError({ msg: res.err }), setError(true)
		setLoading(false)
		return notifyPromiseSuccess({ msg: res.msg }), setSwitchModal("changePass")
	}
	return (
		<VerificationInput
			autoFocus
			onFocus={() => error && setError(false)}
			validChars="0-9"
			inputProps={{ type: "tel" }}
			classNames={{
				character: !error ? style.character : style.characterError,
			}}
			onChange={e => e.length === 6 && handle(e)}
			ref={inputRef}
		/>
	);
};

export default InputCode;
