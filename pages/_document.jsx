import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from '../styles/globals';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(
							<>
								<GlobalStyle />
								<App {...props} />
							</>),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang='pt-br'>
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="description" content="✓R$15 Off NO PRIMEIRO PEDIDO|Compre a últimos óculos mais vendidos na Thiz Store, aqui você encontra todos os estilos que deseja a preços pequenos.✓Mais de 500 atualizações diarias" />
					<meta name="keywords" content="Óculos Femininas &amp; Masculinas, Loja de óculos Online Thiz Store" />
					<meta property="og:title" content="Thiz Store" />
					<meta name="twitter:title" content="Thiz Store" />
					<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600&family=Oswald:wght@500;600&family=Poppins:wght@300;600&family=Roboto:wght@100;300;400;500;700&family=Varela+Round&display=swap" rel="stylesheet" />
				</Head>
				<body style={{ visibility: "hidden" }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}