import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet as ScStyleSheets } from "styled-components";
import { ServerStyleSheets as MuiStyleSheets } from "@material-ui/core/styles";
import theme from "../styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const scStyleSheets = new ScStyleSheets();
  const muiSheets = new MuiStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          scStyleSheets.collectStyles(muiSheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        muiSheets.getStyleElement(),
        scStyleSheets.getStyleElement(),
      ],
    };
  } finally {
    scStyleSheets.seal();
  }
};
