import style from './Account.module.css'
import Email from './Email'
import Name from './Name'
import SecondName from './SecondName'
import EditPassword from './EditPassword'

export default function Account() {
	return (
		<div className={style.container}>
			<div className={style.containerTitle}>
				<h2 className={style.Title}>Detalhes da conta</h2>
			</div>
			<div className={style.content}>
				<Name />
				<SecondName />
				<Email />
			</div>
			<div className={style.containerTitle}>
				<h2 className={style.Title}>Alterar senha</h2>
			</div>
			<div className={style.content}>
				<EditPassword/>
			</div>
		</div >
	)
}