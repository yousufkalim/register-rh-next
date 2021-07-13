import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Axios from "axios";

import * as Yup from "yup";
import { useFormik } from "formik";

import RegisterImg from "../public/landingPage/images/logo_white.png";
export default function Register() {
  const Router = useRouter();
  const [Error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
      principal: "",
    },
    validationSchema: SIGNUP_YUP,
    onSubmit: async (values) => {
      const { firstName, lastName, password, principal, email } = values;
      try {
        let response = await Axios.post(
          `http://160.153.249.64:2228/Users/Register/Identity?Email=${email}&password=${password}&FamilyName=${lastName}&FirstName=${firstName}&EstablishmentPricipal=${principal}`,
          {}
        );
        Router.push("/Login");
      } catch (error) {
        setError(error.response.data.Description);
        console.log(error.response.data.Description, "reponse");
      }
    },
  });
  return (
    <div>
      <div className="register">
        <div className="child">
          <div className="row">
            <div className="col-md-3 register-left">
              <Image className="RegisterImg" src={RegisterImg} alt="RegisterImg" />
              <h4 id="appName" className="text-white">
                Registre RH
              </h4>
              <p className="text-white">
                Découvrez Registre RH en créant un compte ou connectez-vous à
                votre compte en cliquant ci-dessous
              </p>
              <Link href="/Login">
                <a className="login-link btn-outline-sm ">Se connecter</a>
              </Link>
              <br />
            </div>
            <div className="col-md-9 register-right">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <form onSubmit={formik.handleSubmit}>
                    <div className="register-form">
                      {Error && (
                        <b>
                          <div className="text-danger text-center mb-2 p-2">
                            <span>{Error}</span>
                          </div>
                        </b>
                      )}
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              placeholder="Nom"
                              name="lastName"
                              onChange={formik.handleChange}
                              value={formik.values.lastName}
                            />
                            <div>
                              {formik.touched.lastName &&
                              formik.errors.lastName ? (
                                <span className="text-danger">
                                  {formik.errors.lastName}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              placeholder="Email"
                              name="email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                            />
                            <div>
                              {formik.touched.email && formik.errors.email ? (
                                <span className="text-danger">
                                  {formik.errors.email}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-group">
                          <input
                              type="text"
                              name="societe"
                              onChange={formik.handleChange}
                              value={formik.values.societe}
                              className="form-control"
                              placeholder="Nom de la societe"
                            />
                           
                          </div>
                          <div className="form-group">
                          <input
                              className="form-control"
                              placeholder="Mot de passe"
                              name="password"
                              type="password"

                              onChange={formik.handleChange}
                              value={formik.values.password}
                            />
                            <div>
                              {formik.touched.password &&
                              formik.errors.password ? (
                                <span className="text-danger">
                                  {formik.errors.password}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-group"></div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              placeholder="Prenom"
                              name="firstName"
                              onChange={formik.handleChange}
                              value={formik.values.firstName}
                            />
                            <div>
                              {formik.touched.firstName &&
                              formik.errors.firstName ? (
                                <span className="text-danger">
                                  {formik.errors.firstName}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-group">
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Activité"
                              name="activité"
                              onChange={formik.handleChange}
                              value={formik.values.activité}
                            />
                          
                          </div>
                          <div className="form-group">
                            
                            <input
                              className="form-control"
                              placeholder="Etablissement principal"
                              name="principal"
                              onChange={formik.handleChange}
                              value={formik.values.principle}
                            />
                            <div>
                              {formik.touched.principal &&
                              formik.errors.principal ? (
                                <span className="text-danger">
                                  {formik.errors.principal}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-group">
                          <input
                              className="form-control"
                              placeholder="Confirmez votre mot de passe"
                              name="confirm_password"
                              type="password"

                              onChange={formik.handleChange}
                              value={formik.values.confirm_password}
                            />
                            <div>
                              {formik.touched.confirm_password &&
                              formik.errors.confirm_password ? (
                                <span className="text-danger">
                                  {formik.errors.confirm_password}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <input
                            type="submit"
                            className="btnRegister"
                            value="S'inscrire"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const SIGNUP_YUP = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  principal: Yup.string().required("Required"),

  password: Yup.string()
    .min(8, "Entrez un mot de passe de minimum 8 caractères avec au moins un caractère spécial et une majuscule")
    .max(255)
    .required("Required"),
  confirm_password: Yup.string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    })
    .min(8, "Entrez un mot de passe de minimum 8 caractères avec au moins un caractère spécial et une majuscule")
    .max(255)
    .required("Required"),
});
