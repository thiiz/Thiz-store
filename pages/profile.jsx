import { useUser } from "../contexts/GlobalState"

export default function Profile() {
	const { data } = useUser()
	return (
		<div className='page'>
			{Object.keys(data).length === 0 ? ''
				:
				<>
					<p>{data.user.name}</p>
					<p>{data.user.email}</p>
					<p>{data.user.role}</p>
				</>
			}
		</div>
	)
}