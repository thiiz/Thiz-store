import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Loja de Crochê - MãeTerra"></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}