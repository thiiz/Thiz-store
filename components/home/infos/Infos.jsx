import style from './Infos.module.css'
import { GoCreditCard } from 'react-icons/go'
import { BsTruck } from 'react-icons/bs'
import { AiOutlineSafety } from 'react-icons/ai'

export default function Info() {
	return (
		<div className={style.infosContainer}>
			<div className={style.infoItem}>		
				<span><p><BsTruck /></p>Entrega rápida</span>
			</div>
			<div className={style.infoItem}>
				<div>
					<p><GoCreditCard /></p>
				</div>
				<span>Parcelamentos em até 6x sem juros</span>
			</div>
			<div className={style.infoItem}>
				<div>
					<p><AiOutlineSafety /></p>
				</div>
				<span>Site seguro</span>
			</div>
		</div>
	)
}