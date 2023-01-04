import style from './Header.module.css'
import { MdHeadsetMic } from 'react-icons/md'
import ButtonCart from './ButtonCart'
import Search from '../../components/search/Search'
import ButtonAccount from './ButtonAccount'


export default function ButtonsDesktop() {
	return (
		<section className={style.btnInfoContainer}>
			<Search />
			<button className={`${style.btn} ${style.btnInfo}`} type='button'>
				<MdHeadsetMic />
			</button>
			<ButtonCart />
			<ButtonAccount />
		</section >
	)
}