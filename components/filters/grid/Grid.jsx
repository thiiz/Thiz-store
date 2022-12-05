import style from './Grid.module.css'
import { useState, useEffect } from 'react'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

export default function Grid({ desktop, grid, setGrid }) {
	const [lastGrid, setLastGrid] = useState(undefined)

	useEffect(() => {
		if (lastGrid) {
			setGrid(lastGrid)
			setLastGrid(undefined)
			return
		}
		if (!desktop) {
			setLastGrid(grid)
			setGrid(4)
		}
	}, [desktop])
	useEffect(() => {
		if (parseCookies().AcceptedCookies === "all") {
			if (grid === 4) {
				destroyCookie(null, 'GRID', { path: '/' })
				return
			}
			setCookie(null, 'GRID', grid, {
				maxAge: 86400,
				path: '/',
			})
		}
	}, [grid])

	return (
		<>
			{desktop &&
				<div className={style.gridContainer}>
					<button onClick={() => setGrid(2)} className={style.gridButtonOption}>
						<span className={`${style.gridOption} ${grid === 2 ? style.gridOptionActive : ''}`}></span>
						<span className={`${style.gridOption} ${grid === 2 ? style.gridOptionActive : ''}`}></span>
					</button>
					<button onClick={() => setGrid(3)} className={style.gridButtonOption}>
						<span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span>
						<span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span>
						<span className={`${style.gridOption} ${grid === 3 ? style.gridOptionActive : ''}`}></span>
					</button>
					<button onClick={() => setGrid(4)} className={style.gridButtonOption}>
						<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
						<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
						<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
						<span className={`${style.gridOption} ${grid === 4 ? style.gridOptionActive : ''}`}></span>
					</button>
				</div>}
		</>
	)
}