import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import axiosInstance from "../helper/axios";
import { toast } from "react-toastify";
const SignUp = () => {
  let navigate = useNavigate();
  const [UserSign, setUserSign] = useState({});
  const [errorForm, setErrorForm] = useState({});
  const submitFormSignUp = (e) => {
    e.preventDefault();
    const firstName = document.querySelector("#contactform #first-name");
    console.log(firstName.value);
    const lastName = document.querySelector("#contactform #last-name");
    console.log(lastName.value);
    const email = document.querySelector("#contactform #email");
    console.log(email.value);
    const userName = document.querySelector("#contactform #user-name");
    console.log(userName.value);
    const password = document.querySelector("#contactform #pass");
    console.log(password.value);
    const passwordConfirm = document.querySelector(
      "#contactform #confirm-pass"
    );
    document.querySelector(".submit").classList.add("disabled");
    setUserSign({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      userName: userName.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
    });
    axiosInstance
      .post("/v1/users/register", {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        username: userName.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
      })
      .then((response) => {
        setErrorForm({});
        localStorage.setItem("access_token", response.data.data.access_token);
        toast.success("SignUp successful", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/", { replace: true });
          window.location.reload();
        }, 1000);
        document.querySelector(".submit").classList.remove("disabled");
      })
      .catch((error) => {
        setErrorForm(error.response.data.data.errors);
        toast.error("Not Valid", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        document.querySelector(".submit").classList.remove("disabled");
      });
  };

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Signup</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Signup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-login tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">
                Create New Account
              </h2>

              {/* <div className="flat-form box-login-social">
                <div className="box-title-login">
                  <h5>Login with social</h5>
                </div>
                <ul>
                  <li>
                    <Link to="#" className="sc-button style-2 fl-button pri-3">
                      <i className="icon-fl-google-2"></i>
                      <span>Google</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="sc-button style-2 fl-button pri-3">
                      <i className="icon-fl-facebook"></i>
                      <span>Facebook</span>
                    </Link>
                  </li>
                </ul>
              </div> */}

              <div className="flat-form box-login-email">
                {/* <div className="box-title-login">
                  <h5>Or login with email</h5>
                </div> */}

                <div className="form-inner">
                  <form id="contactform" onSubmit={submitFormSignUp}>
                    <div className="wrapper-input">
                      <input
                        id="first-name"
                        name="first-name"
                        tabIndex="1"
                        aria-required="true"
                        required
                        type="text"
                        placeholder="First Name"
                      />
                      {errorForm.first_name && (
                        <p className="text-danger">{errorForm.first_name[0]}</p>
                      )}
                    </div>
                    <div className="wrapper-input">
                      <input
                        id="last-name"
                        name="last-name"
                        tabIndex="2"
                        aria-required="true"
                        required
                        type="text"
                        placeholder="last Name"
                      />
                      {errorForm.last_name && (
                        <p className="text-danger">{errorForm.last_name[0]}</p>
                      )}
                    </div>
                    <div className="wrapper-input">
                      <input
                        id="email"
                        name="email"
                        tabIndex="3"
                        aria-required="true"
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                      {errorForm.email && (
                        <p className="text-danger">{errorForm.email[0]}</p>
                      )}
                    </div>
                    <div className="wrapper-input">
                      <input
                        id="user-name"
                        name="user-name"
                        tabIndex="4"
                        aria-required="true"
                        type="text"
                        placeholder="UserName"
                        required
                      />
                      {errorForm.username && (
                        <p className="text-danger">{errorForm.username[0]}</p>
                      )}
                    </div>
                    <div className="wrapper-input">
                      <input
                        id="pass"
                        name="pass"
                        tabIndex="5"
                        aria-required="true"
                        type="password"
                        placeholder="Set Your Password"
                        required
                      />
                      {errorForm.password && (
                        <p className="text-danger">{errorForm.password[0]}</p>
                      )}
                    </div>
                    <div className="wrapper-input">
                      <input
                        id="confirm-pass"
                        name="confirm-pass"
                        tabIndex="6"
                        aria-required="true"
                        type="password"
                        placeholder="Confirm Your Password"
                        required
                      />
                      {errorForm.password && (
                        <p className="text-danger">{errorForm.password[0]}</p>
                      )}
                    </div>
                    <div className="row-form style-1">
                      <label>
                        Remember me
                        <input type="checkbox" />
                        <span className="btn-checkbox"></span>
                      </label>
                      {/* <Link to="#" className="forgot-pass">
                        Forgot Password ?
                      </Link> */}
                    </div>

                    <button className="submit">
                      Sign Up <span className="spinner-sign-up"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
