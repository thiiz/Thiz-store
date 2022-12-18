import style from './SearchModal.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
export default function HeaderSearchModal({ handleClose, quantity }) {
	const [info, setInfo] = useState('')
	const [qty, setQty] = useState('')

	useEffect(() => {
		if (quantity) {
			setQty(` (${quantity?.length})`)
			setInfo('Resultados')
		}
	}, [quantity])
	return (
		<div className={style.header}>
			<span className={style.resultTitle}>{info}{qty}</span>
			<button onClick={() => handleClose()} className={style.close}><VscChromeClose /></button>
		</div>
	)
}