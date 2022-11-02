import { useState } from 'react'
import { BiShow, BiHide } from 'react-icons/bi'
import style from './ShowPass.module.css'
export default function ShowPass({showPass, setShowPass}) {
	return (
		<button onClick={() => setShowPass(showPass => !showPass)} type='button' className={style.showPassContainer}>
			{showPass ? <BiShow />
				: <BiHide />}
		</button>
	)
}