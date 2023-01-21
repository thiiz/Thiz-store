import { GridContainer, GridButtonOption, GridOption } from './styleGrid'
import { useProductsGrid } from '../../../../contexts/productsGridContext'
import { useIsLarge } from '../../../../lib/MediaQuery'

export default function Grid() {
	const { grid, setGrid } = useProductsGrid()
	const desktop = useIsLarge()
	return (
		<>
			{desktop &&
				<GridContainer>
					<GridButtonOption onClick={() => setGrid(2)}>
						<GridOption className={grid === 2 ? 'active' : ''} />
						<GridOption className={grid === 2 ? 'active' : ''} />
					</GridButtonOption>
					<GridButtonOption onClick={() => setGrid(3)}>
						<GridOption className={grid === 3 ? 'active' : ''} />
						<GridOption className={grid === 3 ? 'active' : ''} />
						<GridOption className={grid === 3 ? 'active' : ''} />
					</GridButtonOption>
					<GridButtonOption onClick={() => setGrid(4)}>
						<GridOption className={grid === 4 ? 'active' : ''} />
						<GridOption className={grid === 4 ? 'active' : ''} />
						<GridOption className={grid === 4 ? 'active' : ''} />
						<GridOption className={grid === 4 ? 'active' : ''} />
					</GridButtonOption>
				</GridContainer>}
		</>
	)
}