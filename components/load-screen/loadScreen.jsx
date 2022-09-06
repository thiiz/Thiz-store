import style from './LoadScreen.module.css'

export default function LoadScreen() {
	return (
		<div className={style.loading}>
			<div className={style.spinner}></div>
		</div>
	)
}