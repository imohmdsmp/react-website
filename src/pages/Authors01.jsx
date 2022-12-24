import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import TopSeller from "../components/layouts/authors/TopSeller";
import topSellerData from "../assets/fake-data/data-top-seller";
import popularCollectionData from "../assets/fake-data/data-popular-collection";
import img1left from "../assets/images/box-item/302-1.jpg";
import img1right1 from "../assets/images/box-item/302-2.jpg";
import img1right2 from "../assets/images/box-item/302-3.jpg";
import img1right3 from "../assets/images/box-item/302-4.jpg";
import axiosInstance from "../helper/axios";

const Authors01 = () => {
  const [visible, setVisible] = useState(30);
  const [user, setUser] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  useEffect(() => {
    axiosInstance
      .get("/v1/users", {
        headers: {
          Authorization: "bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        console.log(response);
        setUser(response.data.data);
        setCurrentPage(response.data.meta.current_page);
        setLastPage(response.data.meta.last_page);
      });
  }, []);
  const showMoreItems = () => {
    if (currentPage !== lastPage) {
      axiosInstance
        .get(`/v1/users?page=${currentPage + 1}`, {
          headers: {
            Authorization: "bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response.data.data);
          response.data.data.map((data) => {
            setUser((currentUsers) => [...currentUsers, data]);
          });
        });
    }
  };

  const CardCollection = user?.map((item, index) => (
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
                <Link to={`/users/${item.username}`}>{item.username}</Link>
              </h4>
              <div className="infor">
                <span>
                  {item.first_name == "undefined" ? "" : item.first_name}{" "}
                  {item.last_name == "undefined" ? "" : item.last_name}
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
            style={{ height: item.latest_posts.length === 0 && "272px" }}
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
  ));
  return (
    <div className="authors">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Our Creators</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Our Creators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <TopSeller data={topSellerData} /> */}

      <section className="tf-section our-creater dark-style2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tf-title style4 mg-bt-38">Our Creator</h2>
            </div>
            {user ? (
              CardCollection
            ) : (
              <div
                class="lds-ring d-flex justify-content-center w-100"
                style={{ height: "100px" }}
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}

            <div className="col-md-12 wrap-inner load-more text-center">
              <Link
                to="#"
                id="load-more"
                className="sc-button loadmore fl-button pri-3"
                onClick={showMoreItems}
              >
                <span>Load More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Authors01;
