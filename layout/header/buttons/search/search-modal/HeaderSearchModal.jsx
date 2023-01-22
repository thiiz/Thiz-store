import { Header, ResultTitle, Close } from './styleHeaderSearchModal'
import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'

export default function HeaderSearchModal({ setItems, setIsOpen, info, loading, setFind }) {
	const handleClose = () => {
		setIsOpen(false)
		setItems(undefined)
		setFind(undefined)
	}

	return (
		<Header>
			<ResultTitle>{info}</ResultTitle>
			<Close onClick={handleClose}><VscChromeClose /></Close>
		</Header>
	)
}