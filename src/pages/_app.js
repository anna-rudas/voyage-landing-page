import "../style.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VOYAGE</title>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
