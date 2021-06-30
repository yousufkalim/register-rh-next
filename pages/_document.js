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
          <link href="landingPage/css/bootstrap.css" rel="stylesheet" />
          <link href="landingPage/css/fontawesome-all.css" rel="stylesheet" />
          <link href="landingPage/css/swiper.css" rel="stylesheet" />
          <link href="landingPage/css/magnific-popup.css" rel="stylesheet" />
          <link href="landingPage/css/styles.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Scripts --> */}
          <script src="landingPage/js/jquery.min.js" />
          {/* <!-- jQuery for Bootstrap's Javascript plugins --> */}
          <script src="landingPage/js/popper.min.js" />
          {/* <!-- Popper tooltip library for Bootstrap --> */}
          <script src="landingPage/js/bootstrap.min.js" />
          {/* <!-- Bootstrap framework --> */}
          <script src="landingPage/js/jquery.easing.min.js" />
          {/* <!-- jQuery Easing for smooth scrolling between anchors --> */}
          <script src="landingPage/js/swiper.min.js" />
          {/* <!-- Swiper for image and text sliders --> */}
          <script src="landingPage/js/jquery.magnific-popup.js" />
          {/* <!-- Magnific Popup for lightboxes --> */}
          <script src="landingPage/js/validator.min.js" />
          {/* <!-- Validator.js - Bootstrap plugin that validates forms --> */}
          <script src="landingPage/js/scripts.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
