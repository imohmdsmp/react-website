import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../helper/axios";

const BlogDetails = () => {
  const [post_data, set_post_data] = useState([]);
  const [post_id, set_post_id] = useState([]);
  const location = useLocation();
  const pathUser = location.pathname.split("/");
  console.log(pathUser[3]);
  axiosInstance
    .post(`/v1/post/details`, {
      post_id: pathUser[3],
    })
    .then((response) => {
      console.log(response.data.data);
      set_post_data(response.data.data);
      set_post_id([pathUser[3], pathUser[2]]);
    });

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">{post_data.title}</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Posts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section post-details">
        <div className="themesflat-container">
          <div className="wrap-flex-box style">
            <div className="post">
              <div className="inner-content">
                {/* <h2 className="title-post">
                  I Believe everyone can be a designer as long they love to
                  create design
                </h2> */}
                <div className="divider"></div>
                <div className="meta-post flex mg-bt-31">
                  {/* <div className="box">
                    <div className="inner">
                      <h6 className="desc">DESIGNER INTERVIEW</h6>
                      <p>AUGUST CHAPTER</p>
                    </div>
                  </div> */}
                  {/* <div className="box left">
                    <div className="inner boder pad-r-50">
                      <h6 className="desc">WRITER</h6>
                      <p>DWINAWAN</p>
                    </div>
                    <div className="inner mg-l-39 mg-r-1">
                      <h6 className="desc">DATE</h6>
                      <p>AUGUST 11, 2021</p>
                    </div>
                  </div> */}
                </div>
                <div className="image">
                  <img src={post_data.image_path} />
                </div>
                <div className="inner-post mg-t-40">
                  <p className="mg-bt-24">{post_data.caption}</p>
                </div>

                <div className="sc-widget style-1">
                  <div className="widget widget-tag style-2">
                    <h4 className="title-widget">Tags</h4>
                    <ul>
                      {post_data.tags.map((item, index) => (
                        <li>
                          <Link to="#">{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="widget widget-social style-2">
                    <h4 className="title-widget">Share:</h4>
                    <ul>
                      <li>
                        <Link to="#" className="icon-fl-facebook"></Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="divider d2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BlogDetails;
