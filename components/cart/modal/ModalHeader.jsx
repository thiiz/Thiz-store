import style from './ModalHeader.module.css'
import { useCart } from '../../../contexts/CartContext'
import { GrClose } from 'react-icons/gr'
export default function Modal({ setRemoveModal }) {
	const { clearCart } = useCart()

	const clear = () => {
		clearCart()
		setRemoveModal(false)
	}
	return (
		<div className={style.container}>
			<div className={style.modalDialog}>
				<div className={style.modalContent}>
					<div className={style.modalHeader}>
						<h5 className={style.modalTitle}>remover todos os itens.</h5>
						<button onClick={() => setRemoveModal(false)} className={style.close}><GrClose /></button>
					</div>
					<div className={style.modalBody}>
						<span className={style.modalText}>Você tem certeza que deseja remover todos os itens do carrinho?</span>
					</div>
					<div className={style.modalFooter}>
						<button onClick={() => clear()} type="button" className={`${style.btn} ${style.btnPrimary}`}>Remover</button>
						<button onClick={() => setRemoveModal(false)} type="button" className={`${style.btn} ${style.btnSecondary}`}>Cancelar</button>
					</div>
				</div>
			</div>
		</div >
	)
}