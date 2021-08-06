import Head from "next/head";
import "../public/landingPage/css/bootstrap.css";
import "../public/landingPage/css/fontawesome-all.css";
import "../public/landingPage/css/swiper.css";
import "../public/landingPage/css/magnific-popup.css";
import "../public/landingPage/css/main.css";

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
