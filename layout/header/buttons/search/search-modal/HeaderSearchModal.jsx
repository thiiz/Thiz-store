import { Header, ResultTitle, Close } from './styleHeaderSearchModal'
import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'

export default function HeaderSearchModal({ setItems, setIsOpen, quantity, loading, find }) {
	const [info, setInfo] = useState('')
	const [qty, setQty] = useState('')

	const handleClose = () => {
		setIsOpen(false)
		setItems([])
	}

	useEffect(() => {
		if (quantity) {
			setQty(` (${quantity?.length})`)
			setInfo(`Resultados para "${find}"`)
		}
	}, [quantity])
	useEffect(() => {
		if (loading) {
			setQty('')
			setInfo('Procurando produtos...')
		}
	}, [loading])
	return (
		<Header>
			<ResultTitle>{info}{qty}</ResultTitle>
			<Close onClick={handleClose}><VscChromeClose /></Close>
		</Header>
	)
}