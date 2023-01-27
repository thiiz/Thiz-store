import { Container, ContainerItems, ContainerViewMore, ViewMore } from './styleSearchModal'
import Items from '../Items';
import HeaderSearchModal from './HeaderSearchModal';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function SearchModal({ items, setItems, loading, setIsOpen, searchTerm, setSearchTerm, scrolldirection }) {
	const { push, query } = useRouter()
	const [info, setInfo] = useState('')

	useEffect(() => {
		if (loading) {
			setInfo('Procurando produtos...')
			return
		}
		if (items?.length === 0) {
			setInfo(`Produto não encontrado.`)
			return
		}
		if (items && !loading) {
			setInfo(`Resultados para "${searchTerm}" (${items?.length})`)
		}
	}, [items, loading])

	const viewAllResults = () => {
		push(`/busca?term=${searchTerm}${query.sortBy ? `&sortBy=${query.sortBy}` : ''}`, undefined, { shallow: true })
		setIsOpen(false)
	}
	return (
		<Container
			initial={{ height: "0" }}
			animate={{ height: "auto" }}
			transition={{ delay: .2, duration: .5 }}
			scrolldirection={scrolldirection}
		>
			{setSearchTerm?.length !== 0 && <HeaderSearchModal info={info} setSearchTerm={setSearchTerm} setItems={setItems} setIsOpen={setIsOpen} />}

			{
				items?.length !== 0 &&
				<>
					<ContainerItems>
						{items?.map((item, index) => {
							if (index < 6) {
								return (
									<Items key={item.id} item={item} />
								)
							}
						})}
					</ContainerItems>
					{items?.length > 2 &&
						<ContainerViewMore>
							<ViewMore onClick={viewAllResults}>Ver todos resultados</ViewMore>
						</ContainerViewMore>
					}
				</>
			}
		</Container >
	)


}