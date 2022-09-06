import style from './LoadingScreen.module.css'

export default function LoadingScreen() {
	return (
		<div className={style.loading}>
			<div className={style.spinner}></div>
		</div>
	)
}