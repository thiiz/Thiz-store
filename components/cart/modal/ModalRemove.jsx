import style from './ModalRemove.module.css'
import { useCart } from '../../../contexts/CartContext'
import { GrClose } from 'react-icons/gr'

export default function ModalRemove({ item, setRemoveModal }) {
	const { remove } = useCart()
	return (
		<div className={style.container}>
			<div className={style.modalDialog}>
				<div className={style.modalContent}>
					<div className={style.modalHeader}>
						<h5 className={style.modalTitle}>Remover produto.</h5>
						<button onClick={() => setRemoveModal(false)} className={style.close}><GrClose /></button>
					</div>
					<div className={style.modalBody}>
						<span className={style.text}>Você tem certeza?</span>
					</div>
					<div className={style.modalFooter}>
						<button onClick={() => setRemoveModal(false)} type="button" className={`${style.btn} ${style.btnSecondary}`}>Cancelar</button>
						<button onClick={() => remove(item.id)} type="button" className={`${style.btn} ${style.btnPrimary}`}>Confirmar</button>
					</div>
				</div>
			</div>
		</div >
	)
}