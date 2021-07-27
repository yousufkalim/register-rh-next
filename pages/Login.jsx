import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
export default function Login(props) {
  const [Error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LOGIN_YUP,

   
    onSubmit: async (values) => {
    
        var bodyFormData = new FormData();
        bodyFormData.append('Email', values.email);
        bodyFormData.append('Password', values.password);
        bodyFormData.append('RememberMe', false);
        bodyFormData.append('EstablishmentPricipal', 'test');
      

        fetch(`http://160.153.249.64:2231/api/v1/User/Login`, {
        //fetch(`https://localhost:44369/api/v1/User/Login`, {
          method: "POST",
          mode : "cors",
          headers: {
            "Content-Type": "application/json",

          },
          body: JSON.stringify({
            Email:values.email,
            Password:values.password,
            RememberMe:false,
            EstablishmentPricipal:'test',
          })
        }).then((resp) => resp.json())
        .then((res) => {
          
          console.log("success ", res);
          if(res.success === true){
            var _id = res.token;
            window.location.href = `http://160.153.249.64:2269/Home/index?id=${_id}`;
            //window.location.href = `http://localhost:65041/Home/Index?id=${_id}`;
          }
          
          console.log("data ", _id);
          // 
        
        }
          )
        .catch((err) => {
          setError(err);
          console.log(err, "reponse");
        });
      
    },
  });
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-lg-6 col-md-12 login-form-1">
          <h3>
            <strong id="appName" />
          </h3>
          <div className="form-group text-center">
            <h3>
              <strong>Registre RH</strong>
            </h3>
          </div>
          <div className="row ">
            <div>
              <p>
                L’application Registre RH vous permet de digitaliser simplement
                vos 3 registres sociaux obligatoires des entreprises
              </p>
            </div>
            <ul className="a">
              <li>Registre unique du personnel</li>
              <li>Document unique d’évaluation des risques professionnels</li>
              <li>Registre des contrôles de sécurité</li>
            </ul>
            <p id="list">
              Les dossiers des collaborateurs internes &amp; externes.
            </p>
          </div>
          <div className="form-group text-center">
            <Link href="/Register">
              <a className="btnSubmit btn ">Découvrir Registre RH</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 login-form-2">
          <div>
            <h3>
              <strong>
                Vous avez déjà un compte ? Connectez-vous à votre compte !
              </strong>
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            {Error && (
              <b>
                <div
                  className="text-danger mb-2 p-2"
                  style={{ backgroundColor: "white" }}
                >
                  <span>{Error}</span>
                </div>
              </b>
            )}
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="text-danger pt-1">
                {formik.touched.email && formik.errors.email ? (
                  <div className="formikError">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className="text-danger pt-1">
                {formik.touched.password && formik.errors.password ? (
                  <div className="formikError">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6 text-left">
                <input
                  type="submit"
                  className="btnSubmit btn "
                  defaultValue="Se connecter"
                />
              </div>
              <div className="form-group col-6  text-right pt-1 ">
                <a
                  className="ForgetPwd "
                  href="http://160.153.249.64:2228/Identity/Account/ForgotPassword"
                  value="Login"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const LOGIN_YUP = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().max(255).required("Required"),
});
