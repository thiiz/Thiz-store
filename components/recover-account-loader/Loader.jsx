import style from './Loader.module.css'
export default function Loader() {
	return (
		<div className={`${style.loader} ${style.JS_on}`}>
			<span className={style.binary}></span>
			<span className={style.binary}></span>
			<span className={style.gettingThere}>LOADING STUFF...</span>
		</div>
	)
}