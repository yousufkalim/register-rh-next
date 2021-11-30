import React from "react";
import Link from "next/link";
import SubHeader from "../components/Layout/subheader";
import Footer from "../components/Layout/footer";

export default function Contact() {
  return (
    <>
      <SubHeader content="Faq" />

      {/* nos tarif end */}
      <div id="faq" className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-center h2-heading">
                <i className="fa fa-question-circle" /> FAQ
              </h2>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-lg-12">
              <div>
                <div className="card ">
                  <header className="card-header">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse17"
                          aria-expanded="true"
                        >
                          <span>
                            1. Quels sont les registres que peut gérer
                            l’application « Registre RH » ?
                          </span>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse17"
                          aria-expanded="true"
                        >
                          <i className="icon-action fa fa-chevron-down" />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse17"
                      aria-expanded="true"
                    ></a>
                  </header>
                  <div className="collapse show" id="collapse17">
                    <article className="card-body">
                      <p>
                        L’application Registre RH vous permet de digitaliser vos
                        3 registres sociaux obligatoires des entreprises :
                      </p>
                      <ul>
                        <li>
                          <a href="#personal" className="page-scroll text-dark">
                            Registre unique du personnel
                          </a>
                        </li>
                        <li>
                          <a
                            href="#singleRisk"
                            className="page-scroll text-dark"
                          >
                            Document unique d’évaluation des risques
                            professionnels
                          </a>
                        </li>
                        <li>
                          <a
                            href="#singleRisk"
                            className="page-scroll text-dark"
                          >
                            Registre des contrôles de sécurité
                          </a>
                        </li>
                      </ul>
                      <p />
                    </article>{" "}
                    {/* card-body.// */}
                  </div>{" "}
                  {/* collapse .// */}
                </div>
                <div className="card">
                  <header className="card-header">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse18"
                          aria-expanded="true"
                        >
                          <span>
                            2. Quels sont les plans d&apos;abonnement proposés
                            par Registre RH ?
                          </span>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse18"
                          aria-expanded="true"
                        >
                          <i className="icon-action fa fa-chevron-down" />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse18"
                      aria-expanded="true"
                    ></a>
                  </header>
                  <div className="collapse hide" id="collapse18">
                    <article className="card-body">
                      <p>
                        Vous pouvez nous tester gratuitement, la licence
                        gratuite est valable 2 semaines pour un registre unique
                        du personnel de 4 collaborateurs. Pour tester notre
                        application c’est très simple ! Créez votre espace
                        Registre RH puis connectez-vous.
                      </p>
                      <p>
                        Ensuite vous pourrez tout simplement basculer sur notre
                        formule en mode SAAS en 1 clic depuis le menu de
                        renouvellement dans les paramètres.
                      </p>
                      <p>
                        Nous proposons également notre application en mode On
                        Premise pour souscrire contactez-vous pour que nous
                        puissions réaliser votre devis.
                      </p>
                    </article>{" "}
                    {/* card-body.// */}
                  </div>{" "}
                  {/* collapse .// */}
                </div>
                <div className="card">
                  <header className="card-header">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse19"
                          aria-expanded="true"
                        >
                          <span>
                            3. Sous quel format puis-je exporter mes données ?
                          </span>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse19"
                          aria-expanded="true"
                        >
                          <i className="icon-action fa fa-chevron-down" />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse19"
                      aria-expanded="true"
                    ></a>
                  </header>
                  <div className="collapse hide" id="collapse19">
                    <article className="card-body">
                      <p>
                        Vos registres peuvent être exportés facilement sous
                        format PDF ou PDF signé électroniquement mais également
                        sous format Excel ou Word.
                      </p>
                    </article>{" "}
                    {/* card-body.// */}
                  </div>{" "}
                  {/* collapse .// */}
                </div>
                <div className="card">
                  <header className="card-header">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse20"
                          aria-expanded="true"
                        >
                          <span>
                            4. L&apos;application Registre RH répond-elle aux
                            exigences réglementaires de traçabilité?
                          </span>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse20"
                          aria-expanded="true"
                        >
                          <i className="icon-action fa fa-chevron-down" />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse20"
                      aria-expanded="true"
                    ></a>
                  </header>
                  <div className="collapse hide" id="collapse20">
                    <article className="card-body">
                      <p>
                        L’application Registre RH a été conçue de façon à
                        garantir au registre électronique le même niveau de
                        traçabilité qu’un registre papier. L&apos;architecture
                        des registres électroniques a été conçu pour tracer
                        toutes les tâches réalisées sur l&apos;application et
                        ainsi garantir une traçabilité très avancée.
                      </p>
                      <p>
                        Les saisies réalisées dans les différents registres
                        proposés dans Registre RH sont définitives et ne peuvent
                        pas être supprimées. Le respect de séquentialité et de
                        traçabilité des saisies est garantie par l’application.
                        Enfin, le format PDF signé électroniquement permet
                        d’attester de l’origine du document et de son intégrité.
                      </p>
                    </article>{" "}
                    {/* card-body.// */}
                  </div>{" "}
                  {/* collapse .// */}
                </div>
                <div className="card">
                  <header className="card-header">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse21"
                          aria-expanded="true"
                        >
                          <span>5. Les registres sont-ils corrigibles ?</span>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse21"
                          aria-expanded="true"
                        >
                          <i className="icon-action fa fa-chevron-down" />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse21"
                      aria-expanded="true"
                    ></a>
                  </header>
                  <div className="collapse hide" id="collapse21">
                    <article className="card-body">
                      <p>
                        Oui, dans le registre unique du personnel vous pouvez
                        corriger les données des employés qui ont été inscrits
                        dans votre registre. Afin de garantir la traçabilité des
                        données saisies, la ligne corrigée sera rayée sur votre
                        registre et une nouvelle ligne sera insérée et
                        conservera la même numérotation.
                      </p>
                      <p>
                        Oui, dans le document unique d’évaluation des risques
                        professionnels tant qu&apos;il n&apos;est pas publié,
                        une fois qu&apos;il est publié aucune modification ne
                        pourra être apportée. Il incombera alors de créer un
                        nouveau document qui viendra remplacer le document à
                        corriger.
                      </p>
                      <p>
                        Non, toute donnée ajoutée dans le registre des contrôles
                        de sécurité ne pourra être ni être modifiée ni être
                        supprimée. Il incombera alors d&apos;ajouter un nouveau
                        contrôle de sécurité qui viendra remplacer le contrôle à
                        corriger.
                      </p>
                    </article>{" "}
                    {/* card-body.// */}
                  </div>{" "}
                  {/* collapse .// */}
                </div>
                <div className="card">
                  <header className="card-header">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse22"
                          aria-expanded="true"
                        >
                          <span>
                            6. Pendant combien de temps les registres sont-ils
                            conservés ?
                          </span>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse22"
                          aria-expanded="true"
                        >
                          <i className="icon-action fa fa-chevron-down" />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse22"
                      aria-expanded="true"
                    ></a>
                  </header>
                  <div className="collapse hide" id="collapse22">
                    <article className="card-body">
                      <p>
                        Vos registres ainsi que les données saisies sont
                        conservées durant la durée de votre abonnement et
                        pourront vous être restituées intégralement sur demande
                        en cas de résiliation. Pour rappel, les registres
                        sociaux obligatoires doivent être conservés pendant une
                        durée de 5 ans.
                      </p>
                      <p>
                        Par exemple, les mentions portées sur le registre unique
                        du personnel doivent être conservées pendant 5 ans à
                        compter de la date à laquelle le salarié a quitté
                        l’établissement.
                      </p>
                    </article>{" "}
                    {/* card-body.// */}
                  </div>{" "}
                  {/* collapse .// */}
                </div>
                <div className="card">
                  <header className="card-header">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse23"
                          aria-expanded="true"
                        >
                          <span>7. Quels sont les risques de sanction ?</span>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse23"
                          aria-expanded="true"
                          className
                        >
                          <i className="icon-action fa fa-chevron-down" />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse23"
                      aria-expanded="true"
                    ></a>
                  </header>
                  <div className="collapse hide" id="collapse23">
                    <article className="card-body">
                      <p>
                        Le registre unique du personnel doit pouvoir être
                        présenté à tout moment. En cas de contrôle, l’employeur
                        doit donner le document obligatoire à jour.
                      </p>
                      <p>
                        A défaut de présentation ou si les mentions du document
                        sont erronées ou incomplètes, il peut y avoir une
                        sanction (Article R1227-7 du Code du travail).
                      </p>
                      <p>
                        L’employeur sera puni de l’amende prévue pour les
                        contraventions de quatrième classe : jusqu’à 750 € pour
                        les personnes physiques, et jusqu’à 3 750 € pour les
                        personnes morales.
                      </p>
                      <p>
                        Cette amende sera appliquée autant de fois qu’il y a de
                        salariés dans des conditions susceptibles d&apos;être
                        sanctionnées.
                      </p>
                    </article>{" "}
                    {/* card-body.// */}
                  </div>{" "}
                  {/* collapse .// */}
                </div>
              </div>
              {/* end of text-container */}
            </div>{" "}
          </div>
          {/* end of col */}
          {/* end of col */}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>
      <Footer />
    </>
  );
}
