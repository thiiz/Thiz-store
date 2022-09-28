import style from './login.module.css'
import { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function MenuLogin({ login, setLogin, setToggleLogin }) {

	return (

		<div className={`${style.container} ${login ? style.containerLogin : style.containerRegister}`}>
			<button onClick={() => setToggleLogin(false)} className={style.closeLogin}><GrClose /></button>
			{login
				? <Login setLogin={setLogin} />
				: <Register setLogin={setLogin} />
			}
		</div>
	)
}