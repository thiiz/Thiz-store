import { VscChromeClose } from 'react-icons/vsc';
import Items from './Items';
import style from './SearchModal.module.css'

export default function SearchModal({ data, searching, setItems, setSearch, scrollDirection }) {
	const quantity = data?.data?.map(product => product)
	const handleClose = () => {
		setSearch(false)
		setItems([])
	}
	if (searching) {
		return (
			<div className={`${style.container} ${scrollDirection !== 'down' ? style.containerNormal : style.containerSmall}`}>
				<div className={style.header}>
					<span>PROCURANDO...</span>
					<button onClick={() => handleClose()} className={style.close}><VscChromeClose /></button>
				</div>
			</div>
		)
	}
	if (data.length !== 0) {
		return (
			<div className={`${style.container} ${scrollDirection !== 'down' ? style.containerNormal : style.containerSmall}`}>

				<div className={style.header}>
					<span className={style.resultTitle}>Resultados:</span>
					<button onClick={() => handleClose()} className={style.close}><VscChromeClose /></button>
				</div>

				{quantity?.length === 0 && <div className={style.center}>
					<div className={style.notFound}>Produto não encontrado.</div>
				</div>
				}
				{data.data?.map((item, index) => {
					if (index < 5) {
						return (
							<Items key={item.id} item={item} />
						)
					}
				})}
				{quantity?.length > 5 &&
					<div className={style.center}>
						<a className={style.viewMore}>Ver todos os {quantity.length} produtos.</a>
					</div>
				}
			</div >
		)
	}


}