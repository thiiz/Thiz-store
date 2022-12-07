import style from '../styles/Find.module.css'
import Head from "next/head";
import { SearchProducts } from '../lib/SearchProducts';
import Products from '../components/busca/Products';
export default function busca({ item }) {

	return (
		<>
			<Head>
				<title>{`Busca - Mãe Terra`}</title>
			</Head>
			<main className={style.container}>
				{item?.map((item) => {
					return (
						<Products key={item.id} item={item} />
					)

				})}
			</main>
		</>
	)
}
export async function getServerSideProps(context) {
	const term = context.query?.term.toString();
	const data = await SearchProducts({ search: term })

	return {
		props: { item: data.data },
	}
}