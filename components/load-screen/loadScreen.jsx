import style from './loadscreen.module.css'

export default function loadScreen() {
	return (
		<div className={style.loading}>
			<div className={style.spinner}></div>
		</div>
	)
}