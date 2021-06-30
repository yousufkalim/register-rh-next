import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Registre RH</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
