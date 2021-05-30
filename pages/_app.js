import { useEffect } from "react";
import Head from "next/head";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import Layout from "src/Layout";
import theme from "styles/theme";
import GlobalStyles from "styles/globalStyles";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // useEffect(() => {
  //   if (!window.pdfjsLib) return;
  //   console.log({ pdfjsLib });
  //   pdfjsLib.GlobalWorkerOptions.workerSrc =
  //     "https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js";
  // }, [typeof window !== "undefined" && window.pdfjsLib]);

  return (
    <>
      <Head>
        <title>React book viwer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        />
        {/* <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.7.570/build/pdf.min.js"
        /> */}
      </Head>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
