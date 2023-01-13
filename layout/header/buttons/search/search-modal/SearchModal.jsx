import { Container, ContainerViewMore, ViewMore } from './styleSearchModal'
import Link from 'next/link';
import Items from '../Items';
import HeaderSearchModal from './HeaderSearchModal';

export default function SearchModal({ data, searching, setItems, setIsOpen, scroll_direction, find }) {
	const quantity = data?.data?.map(product => product)
	const handleClose = () => {
		setIsOpen(false)
		setItems([])
	}
	return (
		<Container
			initial={{ paddingTop: "0", paddingBottom: "0" }}
			animate={{ paddingTop: "2.6rem", paddingBottom: "3.3rem" }}
			transition={{ delay: .2, duration: .2 }}
			scrolldirection={scroll_direction}
		>
			<HeaderSearchModal searching={searching} find={find} quantity={quantity} handleClose={handleClose} />

			{
				data.length !== 0 &&
				<>
					{quantity?.length === 0 &&
						<ContainerViewMore>
							<div className='notFound'>Produto não encontrado.</div>
						</ContainerViewMore>
					}
					{data.data?.map((item, index) => {
						if (index < 5) {
							return (
								<Items key={item.id} item={item} />
							)
						}
					})}
					{quantity?.length > 2 &&
						<ContainerViewMore>
							<Link href={`/busca/?term=${find}`}><ViewMore>Ver todos resultados.</ViewMore></Link>
						</ContainerViewMore>
					}
				</>
			}
		</Container >
	)


}