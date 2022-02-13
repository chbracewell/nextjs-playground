import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Playground</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default App;
