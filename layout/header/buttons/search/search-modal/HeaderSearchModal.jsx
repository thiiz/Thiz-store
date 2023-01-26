import { Header, ResultTitle, Close } from './styleHeaderSearchModal'
import { VscChromeClose } from 'react-icons/vsc'

export default function HeaderSearchModal({ setItems, setIsOpen, info, setSearchTerm }) {
	const handleClose = () => {
		setIsOpen(false)
		setItems(undefined)
		setSearchTerm(undefined)
	}

	return (
		<Header>
			<ResultTitle>{info}</ResultTitle>
			<Close onClick={handleClose}><VscChromeClose /></Close>
		</Header>
	)
}