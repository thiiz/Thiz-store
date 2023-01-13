import { Header, ResultTitle, Close } from './styleHeaderSearchModal'
import { useEffect } from 'react'
import { useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'

export default function HeaderSearchModal({ handleClose, quantity, searching, find }) {
	const [info, setInfo] = useState('')
	const [qty, setQty] = useState('')

	useEffect(() => {
		if (quantity) {
			setQty(` (${quantity?.length})`)
			setInfo(`Resultados para "${find}"`)
		}
	}, [quantity])
	useEffect(() => {
		if (searching) {
			setQty('')
			setInfo('Procurando produtos...')
		}
	}, [searching])
	return (
		<Header>
			<ResultTitle>{info}{qty}</ResultTitle>
			<Close onClick={() => handleClose()}><VscChromeClose /></Close>
		</Header>
	)
}