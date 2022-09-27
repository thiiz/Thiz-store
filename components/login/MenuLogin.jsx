import style from './login.module.css'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import Login from './Login'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'
import Register from './Register'

export default function MenuLogin({ setToggleLogin, setAccount }) {
	const [login, setLogin] = useState(true)

	return (

		<div className={`${style.container} ${login ? style.containerLogin : style.containerRegister}`}>
			<button onClick={() => setToggleLogin(false)} className={style.closeLogin}><GrClose /></button>
			{login
				? <Login setLogin={setLogin} setAccount={setAccount} />
				: <Register setLogin={setLogin} />
			}
			<div className={style.containerGoogleLogin}>
				<button onClick={() => signIn('google')} type="button" className={style.googleLogin}><FcGoogle className={style.googleIcon} /><span>Login via Google</span></button>
			</div>
		</div>
	)
}