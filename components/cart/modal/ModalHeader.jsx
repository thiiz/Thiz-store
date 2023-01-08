import { useCart } from '../../../contexts/CartContext'
import { GrClose } from 'react-icons/gr'
import {
	Btn,
	Close,
	Container,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalText,
	ModalTitle
} from './styleModalHeader'

export default function Modal({ setRemoveModal }) {
	const { clearCart } = useCart()

	const clear = () => {
		clearCart()
		setRemoveModal(false)
	}
	return (
		<Container>
			<ModalHeader>
				<ModalTitle>remover todos os itens.</ModalTitle>
				<Close onClick={() => setRemoveModal(false)}><GrClose /></Close>
			</ModalHeader>
			<ModalBody>
				<ModalText>Você tem certeza que deseja remover todos os itens do carrinho?</ModalText>
			</ModalBody>
			<ModalFooter>
				<Btn onClick={() => clear()} type="button" className='btnPrimary'>Remover</Btn>
				<Btn onClick={() => setRemoveModal(false)} type="button" className='btnSecondary'>Cancelar</Btn>
			</ModalFooter>
		</Container >
	)
}