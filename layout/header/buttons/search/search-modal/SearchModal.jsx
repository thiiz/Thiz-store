import { Container, ContainerItems, ContainerViewMore, ViewMore } from './styleSearchModal'
import Items from '../Items';
import HeaderSearchModal from './HeaderSearchModal';
import { useRouter } from 'next/router';

export default function SearchModal({ data, loading, setItems, setIsOpen, find, scrolldirection }) {
	const quantity = data?.map(product => product)
	console.log(quantity)
	const { push } = useRouter()

	const viewAllResults = () => {
		push(`/busca/?term=${find}`)
	}
	return (
		<Container
			initial={{ height: "0" }}
			animate={{ height: "auto" }}
			transition={{ delay: .2, duration: .5 }}
			scrolldirection={scrolldirection}
		>

			{
				data?.length !== 0 &&
				<>
					<HeaderSearchModal loading={loading} find={find} quantity={quantity} setItems={setItems} setIsOpen={setIsOpen} />
					{quantity?.length === 0 &&
						<ContainerViewMore>
							<div className='notFound'>Produto não encontrado.</div>
						</ContainerViewMore>
					}
					<ContainerItems>
						{data?.map((item, index) => {
							if (index < 6) {
								return (
									<Items key={item.id} item={item} />
								)
							}
						})}
					</ContainerItems>
					{quantity?.length > 6 &&
						<ContainerViewMore>
							<ViewMore onClick={viewAllResults}>Ver todos resultados</ViewMore>
						</ContainerViewMore>
					}
				</>
			}
		</Container >
	)


}