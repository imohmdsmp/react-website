import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
const NotFound = () => (
  <div className="authors-2">
    <Header />
    <section className="flat-title-page inner">
      <div className="overlay"></div>
      <div className="themesflat-container">
        <div className="row py-5">
          <div className="col-md-12 py-5">
            <div className="page-title-heading mg-bt-12 py-5">
              <h1 className="heading text-center py-5">
                {" "}
                <div className="py-5">
                  <h1>404 - Not Found!</h1>
                  <Link to="/">Go Home</Link>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default NotFound;
