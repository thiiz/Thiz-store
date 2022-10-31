import style from './Profile.module.css'
import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react"
import LeftMenu from './LeftMenu'
import Content from './Content'


export default function Profile() {
	const [active, setActive] = useState("account")
	const { auth } = useAuth()
	useEffect(() => {

	}, [active])
	return (
		<>

			{Object.keys(auth).length !== 0 &&
				<div className='page'>
					<div className={style.container}>
						<LeftMenu active={active} setActive={setActive} />
						<Content active={active} />
					</div>
				</div>
			}
			<div className='marginFooter'></div>
		</>

	)
}