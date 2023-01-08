import { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'styled-components'

export default function Document(props) {
	return (
		<Html lang='pt-br'>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="Loja de Crochê - MãeTerra"></meta>
				<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600&family=Oswald:wght@200;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,500&family=Varela+Round&display=swap" rel="stylesheet" />
				<style data-emotion-css={props.ids.join(' ')} dangerouslySetInnerHTML={{ __html: props.css }} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
Document.getInitialProps = async (ctx) => {
	const initialProps = await Document.getInitialProps(ctx)
	const styles = extractCritical(initialProps.html)
	return { ...initialProps, ...styles }
}