import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import { toast } from "react-toastify";
import axiosInstance from "../helper/axios";
import { profileStore } from "../CreateStore";
const Login = () => {
  let navigate = useNavigate();
  const [tok, setTok] = useState();
  const { updateProfile } = profileStore();
  const submitLogin = (e) => {
    e.preventDefault();
    const userName = document.querySelector("#contactform #username").value;
    console.log(userName);
    const password = document.querySelector("#contactform #password").value;
    console.log(password);
    document.querySelector(".submit").classList.add("disabled");
    axiosInstance
      .post(
        "/v1/users/login",
        {
          username: userName,
          password: password,
        },
        {
          // prettier-ignore
          headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        }
      )
      .then((response) => {
        setTok(response.data.data.access_token);
        localStorage.setItem("access_token", response.data.data.access_token);
        toast.success("Login successful", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        axiosInstance
          .get("/v1/users/profile", {
            // prettier-ignore
            headers: {
            "Authorization": "bearer " + localStorage.getItem("access_token"),
          },
          })
          .then((response) => {
            updateProfile(response.data.data);
          });
        document.querySelector(".submit").classList.remove("disabled");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      })
      .catch(() => {
        toast.error("Username or Password incorrect", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        document.querySelector(".submit").classList.remove("disabled");
      });
    console.log(tok);
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
                <h1 className="heading text-center">Login</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Login</li>
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
              <h2 className="tf-title-heading ct style-1">Login To NFTs</h2>
              <div className="flat-form box-login-email">
                <div className="form-inner">
                  <form action="#" id="contactform" onSubmit={submitLogin}>
                    <input
                      id="username"
                      name="username"
                      tabIndex="1"
                      aria-required="true"
                      required
                      type="text"
                      placeholder="Username"
                    />
                    <input
                      id="password"
                      name="password"
                      tabIndex="2"
                      aria-required="true"
                      type="password"
                      placeholder="Password"
                      required
                    />
                    <div className="row-form style-1">
                      <label>
                        <Link to="/sign-up">Create Account</Link>
                        {/* Remember me
                        <input type="checkbox" />
                        <span className="btn-checkbox"></span> */}
                      </label>
                      <Link to="#" className="forgot-pass">
                        Forgot Password ?
                      </Link>
                    </div>

                    <button className="submit">
                      Login <span className="spinner"></span>
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

export default Login;
