import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="L’application Registre RH vous permet de digitaliser simplement vos données RH :
            Vos 3 registres sociaux obligatoires des entreprises :
            Registre unique du personnel
            Document unique d’évaluation des risques professionnels
            Registre des contrôles de sécurité
            Les dossiers des collaborateurs internes, externes 
          (Centralisation des données administratives tel que RIB, adresse, carte grise, contrat de travail, contrat de mise à disposition, certification…)."
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-205577833-1"
          ></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config','UA-205577833-1', { page_path: window.location.pathname });
            `,
          }}
        />

          <meta property="og:site_name" content="" />

          <meta property="og:site" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="article" />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Scripts --> */}
          {/* defer */}
          <script defer src="landingPage/js/jquery.min.js" />
          <script defer src="landingPage/js/popper.min.js" />
          <script defer src="landingPage/js/bootstrap.min.js" />
          <script defer src="landingPage/js/jquery.easing.min.js" />
          <script defer src="landingPage/js/swiper.min.js" />
          <script defer src="landingPage/js/jquery.magnific-popup.js" />
          <script defer src="landingPage/js/validator.min.js" />
          <script defer src="landingPage/js/scripts.js" />
          <script defer src="landingPage/js/main.js" />
          {/* <script>
            {function ($) {
              "use strict";
              $(window).dataLayer = $(window).dataLayer || [];
              function gtag() {
                $(window).push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "UA-205577833-1");
            }}
          </script> */}
          <script
            defer
            src="https://www.googletagmanager.com/gtag/js?id=UA-205577833-1"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
