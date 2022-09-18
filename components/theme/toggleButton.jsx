import style from './toggleButton.module.css'

export default function ToggleTheme() {
  return (
    <div>
      <input type="checkbox" className={style.checkbox} id={style.checkbox} />
      <label for="checkbox" className={style.label}>
        <i className={`${fas} ${fa-moon}`}></i>
        <i className={`${style.fas} ${style.fa-sun}`}></i>
        <div className={style.ball} />
      </label>
    </div>
  )
}