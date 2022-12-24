import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import { useState, useEffect } from "react";
import axiosInstance from "../helper/axios";
import { Link } from "react-router-dom";
import { useSearchStore } from "../CreateStore";

export default function SearchResult() {
  const searchResults = useSearchStore((state) => state.searchItem);
  return (
    <>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Search Result</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section our-creater dark-style2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tf-title style4 mg-bt-38">Search List</h2>
            </div>
            {searchResults.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="sc-card-collection style-2">
                  <div className="card-bottom">
                    <div className="author">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <img src={item.avatar} className="avatar" />
                          <div className="badge"></div>
                        </div>
                      </div>
                      <div className="content">
                        <h4>
                          <Link to={`/users/${item.username}`}>
                            {item.username}
                          </Link>
                        </h4>
                        <div className="infor">
                          <span>
                            {item.first_name == "undefined"
                              ? ""
                              : item.first_name}{" "}
                            {item.last_name == "undefined"
                              ? ""
                              : item.last_name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/users/${item.username}`}
                      className="sc-button fl-button pri-3"
                    >
                      <span>Visit Profile</span>
                    </Link>
                  </div>
                  <Link to={`/users/${item.username}`}>
                    <div
                      className="media-images-collection"
                      style={{
                        height: item.latest_posts.length === 0 && "272px",
                      }}
                    >
                      {item.latest_posts.length === 0 ? (
                        <p className="w-100 d-flex justify-content-center align-items-center">
                          Nothing To Show
                        </p>
                      ) : (
                        <>
                          <div className="box-left">
                            {item.latest_posts.length >= 1 && (
                              <img src={item.latest_posts[0].image_path} />
                            )}
                          </div>
                          <div className="box-right">
                            <div className="top-img">
                              {item.latest_posts.length >= 2 && (
                                <img src={item.latest_posts[1].image_path} />
                              )}
                            </div>
                            <div className="bottom-img">
                              {item.latest_posts.length >= 3 && (
                                <img src={item.latest_posts[2].image_path} />
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
