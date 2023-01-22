import { Container, ContainerItems, ContainerViewMore, ViewMore } from './styleSearchModal'
import Items from '../Items';
import HeaderSearchModal from './HeaderSearchModal';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function SearchModal({ items, setItems, loading, setLoading, setIsOpen, find, setFind, scrolldirection }) {
	const { push } = useRouter()
	const [info, setInfo] = useState('')

	useEffect(() => {
		console.log(loading)
		if (loading) {
			setInfo('Procurando produtos...')
			return
		}
		if (items?.length === 0) {
			setInfo(`Produto não encontrado.`)
			return
		}
		if (items && !loading) {
			console.log("items", items)
			setInfo(`Resultados para "${find}" (${items?.length})`)
		}
	}, [items, loading])

	const viewAllResults = () => {
		push(`/busca/?term=${find}`, undefined, { shallow: true })
		setIsOpen(false)
	}
	return (
		<Container
			initial={{ height: "0" }}
			animate={{ height: "auto" }}
			transition={{ delay: .2, duration: .5 }}
			scrolldirection={scrolldirection}
		>
			{find?.length !== 0 && <HeaderSearchModal info={info} loading={loading} setLoading={setLoading} find={find} setFind={setFind} setItems={setItems} setIsOpen={setIsOpen} />}

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