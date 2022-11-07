import style from './Loader.module.css'

export default function Loader() {
	return (
		<div className={style.container}>
			<div className={style.folding}>
				<div className={`${style.skCube1} ${style.skCube}`}></div>
				<div className={`${style.skCube2} ${style.skCube}`}></div>
				<div className={`${style.skCube4} ${style.skCube}`}></div>
				<div className={`${style.skCube3} ${style.skCube}`}></div>
			</div>
		</div>
	)
}