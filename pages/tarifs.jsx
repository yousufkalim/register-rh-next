import React from 'react';
import Link from 'next/link';
import SubHeader from '../components/Layout/subheader';
import Footer from '../components/Layout/footer';

export default function Contact() {
  return (
    <>
      <SubHeader content='Nos Tarifs' />

      <div className='cards-2'>
        <div className='container justify-content-center'>
          <div className='row'>
            <div className='col-lg-12 '>
              <h2 className='h2-heading'>
                <span className='mr-1'>
                  <i className='fas fa-euro-sign' />
                </span>
                Nos tarifs
              </h2>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
          <div className='d-flex flexDiv justify-content-md-center'>
            {/* Card*/}
            <div className='card'>
              <div className='card-body'>
                <div className='card-headers'>
                  <div className='card-title'>ESSAI</div>

                  <span className='price'>Gratuit</span>

                  <p className='frequency'>14 jours d&apos;essai</p>
                </div>
                <div className='divider' />
                <div className='header-card'>
                  <ul className='list-unstyled li-space-lg'>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>
                        Registre unique du personnel
                        {/*(jusqu&apos;à 4 collaborateurs)*/}
                      </div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-times' style={{ color: '#6c757d' }} />
                      <div className='media-body'>
                        Document unique d’évaluation des risques professionnels
                      </div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-times' style={{ color: '#6c757d' }} />
                      <div className='media-body'>Registre des contrôles de sécurité</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-times' style={{ color: '#6c757d' }} />
                      <div className='media-body'>Mode On Premise</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-times' style={{ color: '#6c757d' }} />
                      <div className='media-body'>Connexion en SSO</div>
                    </li>
                  </ul>
                  <div className='button-wrapper'>
                    <Link href='/register' passHref>
                      <span className='btn-solid-lg'> Essayer</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* end of card */}
            {/* Card*/}
            <div className='card'>
              <div className='card-body'>
                <div className='card-headers'>
                  <div className='card-title'>EN MODE SaaS</div>
                  <a href='#modeSass' className='nav-link page-scroll'>
                    <span className='price'>Voir prix</span>
                  </a>
                  <p className='frequency'>Paiement mensuel</p>
                </div>
                <div className='divider' />
                <div className='header-card'>
                  <ul className='list-unstyled li-space-lg'>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>Registre unique du personnel</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>
                        Document unique d’évaluation des risques professionnels
                      </div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>Registre des contrôles de sécurité</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-check' />

                      <div className='media-body'>En mode SaaS</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-times' style={{ color: '#6c757d' }} />
                      <div className='media-body'>Connexion en SSO</div>
                    </li>
                  </ul>
                  <div className='button-wrapper'>
                    <Link href='/register' passHref>
                      <span className='btn-solid-lg'> Souscrire</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* end of card */}
            {/* Card*/}
            <div className='card'>
              <div className='card-body'>
                <div className='card-headers'>
                  <div className='card-title'>ON PREMISE</div>

                  <span className='price'>Sur devis</span>

                  <p className='frequency'>Paiement mensuel</p>
                </div>
                <div className='divider' />
                <div className='header-card'>
                  <ul className='list-unstyled li-space-lg'>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>Registre unique du personnel</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>
                        Document unique d’évaluation des risques professionnels
                      </div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>Registre des contrôles de sécurité</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>Mode On Premise</div>
                    </li>
                    <li className='media'>
                      <i className='fas fa-check' />
                      <div className='media-body'>Connexion en SSO</div>
                    </li>
                  </ul>
                  <div className='button-wrapper'>
                    <Link href='/register' passHref>
                      <span className='btn-solid-lg'> Souscrire</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* end of card */}
          </div>
          {/* end of col */}
          <div id='faq' className='basic-4'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='text-center h2-heading mb-0'>Détails des tarifs en mode SaaS</h2>
              </div>
            </div>{' '}
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='text-center '>Offre PME {' <'} 200 salariés = 2000 € / an </h2>
                <h2 className='text-center pt-3'>
                  Grille tarifaire grands comptes {'> 200'} salariés
                </h2>
              </div>
            </div>
            <h2 className='text-center h2-heading mb-0 mt-4 pb-0'>
              Ci-dessous la grille tarifaire en vigueur :
            </h2>
            <div id='modeSass' className='row pt-3'>
              <div className='col-lg-6 m-auto'>
                <table>
                  <tbody className='h5'>
                    <tr className='text-white background-blue'>
                      <th>NB SIRET</th>
                      <th>Coût HT / an</th>
                      {/* <th>Détails</th> */}
                    </tr>
                    <tr>
                      <td>1 à 50</td>
                      <td>10 000 € </td>
                      {/* <td>Forfait 7 500€ / an</td> */}
                    </tr>
                    <tr>
                      <td>51 à 100</td>
                      <td>15 000 €</td>
                      {/* <td>Soit 300 € par SIRET / an</td> */}
                    </tr>
                    <tr>
                      <td>101 à 200</td>
                      <td>20 000 €</td>
                      {/* <td>Sur devis</td> */}
                    </tr>
                    <tr>
                      <td>201 à xxx</td>
                      <td>100 € par SIRET par an</td>
                      {/* <td>Sur devis</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>

      <Footer />
    </>
  );
}
