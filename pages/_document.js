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

          <meta property="og:site_name" content="" />

          <meta property="og:site" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="article" />

          {/* <link rel="icon" href="/tehme/landingPage/images/R_logo.png" /> */}

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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
