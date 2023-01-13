import style from '../Header.module.css'
import { MdHeadsetMic } from 'react-icons/md'
import ButtonCart from '../buttons/ButtonCart'
import Search from '../../../components/search/Search'
import ButtonAccount from '../buttons/ButtonAccount'
import { Container, Buttons } from './styleDesktop'
import HeaderLogo from '../HeaderLogo'
import HeaderLinks from '../HeaderLinks'
import { useScrollDirection } from '../../../lib/useScrollDirection'


export default function Desktop() {
	const scrollDirection = useScrollDirection()
	return (
		<Container scrollDirection={scrollDirection}>
			<HeaderLogo />
			<HeaderLinks />
			<Buttons>
				<Search />
				<button className={`${style.btn} ${style.btnInfo}`} type='button'>
					<MdHeadsetMic />
				</button>
				<ButtonCart />
				<ButtonAccount />

			</Buttons>
		</Container >
	)
}