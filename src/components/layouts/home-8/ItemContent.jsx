import React, { useState, Fragment, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Countdown from "react-countdown";
import CardModal from "../CardModal";
import { Dropdown } from "react-bootstrap";

import img1 from "../../../assets/images/box-item/302-1.jpg";
import imga1 from "../../../assets/images/avatar/300-1.jpg";
import img2 from "../../../assets/images/box-item/302-2.jpg";
import imga2 from "../../../assets/images/avatar/300-2.jpg";
import img3 from "../../../assets/images/box-item/302-3.jpg";
import imga3 from "../../../assets/images/avatar/300-3.jpg";
import img4 from "../../../assets/images/box-item/302-4.jpg";
import imga4 from "../../../assets/images/avatar/300-4.jpg";
import img5 from "../../../assets/images/box-item/302-5.jpg";
import imga5 from "../../../assets/images/avatar/300-5.jpg";
import img6 from "../../../assets/images/box-item/302-1.jpg";
import img7 from "../../../assets/images/box-item/302-2.jpg";
import img8 from "../../../assets/images/box-item/302-3.jpg";
import img9 from "../../../assets/images/box-item/302-4.jpg";
import img10 from "../../../assets/images/box-item/302-5.jpg";
import img11 from "../../../assets/images/box-item/302-6.jpg";
import img12 from "../../../assets/images/box-item/302-1.jpg";
import img13 from "../../../assets/images/box-item/302-2.jpg";
import img14 from "../../../assets/images/box-item/302-3.jpg";
import img15 from "../../../assets/images/box-item/302-4.jpg";
import imgLand1 from "../../../assets/images/land/301-1.jpg";
import imgLand2 from "../../../assets/images/land/301-2.jpg";
import imgLand3 from "../../../assets/images/land/301-3.jpg";
import imgLand4 from "../../../assets/images/land/301-4.jpg";
import imgLand5 from "../../../assets/images/land/301-5.jpg";
import imgLand6 from "../../../assets/images/land/301-6.jpg";
import imgLand7 from "../../../assets/images/land/301-7.jpg";
import imgLand8 from "../../../assets/images/land/301-8.jpg";
import axios from "axios";
import axiosInstance from "../../../helper/axios";
import { postProfileStore, profileStore } from "../../../CreateStore";
const ItemContent = () => {
  const [dataTab] = useState([
    {
      id: 1,
      title: "Posts",
    },
    {
      id: 2,
      title: "NFTs",
    },
  ]);
  const [dataPanel] = useState([
    {
      id: 1,
      dataContent: [
        {
          id: 1,
          img: img1,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "sina.h",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 2,
          img: img2,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 3,
          img: img3,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 4,
          img: img4,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 5,
          img: img5,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 6,
          img: img6,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 7,
          img: img7,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 8,
          img: img8,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 9,
          img: img9,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 10,
          img: img10,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 11,
          img: img11,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 12,
          img: img12,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 13,
          img: img13,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 14,
          img: img14,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 15,
          img: img15,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 16,
          img: img1,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 17,
          img: img2,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 18,
          img: img3,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 19,
          img: img4,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 20,
          img: img5,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
      ],
    },
    {
      id: 2,
      dataContent: [
        {
          id: 1,
          img: img11,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 2,
          img: img12,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 3,
          img: img13,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 4,
          img: img14,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 5,
          img: img15,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 6,
          img: img1,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 7,
          img: img2,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 8,
          img: img3,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 9,
          img: img4,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 10,
          img: img5,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
      ],
    },
    {
      id: 3,
      dataContent: [
        {
          id: 1,
          img: imgLand1,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 2,
          img: imgLand2,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 3,
          img: imgLand3,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 4,
          img: imgLand4,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 5,
          img: imgLand5,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 6,
          img: imgLand6,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 7,
          img: imgLand7,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 8,
          img: imgLand8,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 9,
          img: imgLand5,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 10,
          img: imgLand4,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
      ],
    },
    {
      id: 4,
      dataContent: [
        {
          id: 1,
          img: img11,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 2,
          img: img12,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 3,
          img: img13,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 4,
          img: img14,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 5,
          img: img15,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 6,
          img: img1,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 7,
          img: img2,
          title: "Hamlet Comtemplates... ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Mary Ali",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 8,
          img: img3,
          title: "Loving Vase 01 by Lanza... ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 9,
          img: img4,
          title: "Triumphant awakening... ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
        {
          id: 10,
          img: img5,
          title: "Flame Dress' by Balmain... ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Fereydoon Sepanta",
          price: "4.89 ETH",
          wishlist: "100",
        },
      ],
    },
  ]);

  const [visible, setVisible] = useState(15);
  const listBtn = useRef(null);
  const gridBtn = useRef(null);
  const listContent = useRef(null);
  const gridContent = useRef(null);

  const listToggle = () => {
    listBtn.current.classList.add("active");
    gridBtn.current.classList.remove("active");
    listContent.current.classList.add("open");
    gridContent.current.classList.remove("open");
  };
  const gridToggle = () => {
    gridBtn.current.classList.add("active");
    listBtn.current.classList.remove("active");
    gridContent.current.classList.add("open");
    listContent.current.classList.remove("open");
  };

  const [modalShow, setModalShow] = useState(false);
  const [dataPost, setDataPost] = useState([]);
  const [dataNft, setDataNft] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const profile = profileStore((state) => state.profile);
  const loading = postProfileStore((state) => state.loading);
  const { updateLoading } = postProfileStore();
  useEffect(() => {
    if (profile) {
      axios
        .get(
          `https://api.adoreh.com/v1/post?logged_in_user=${profile.username}`
        )
        .then((response) => {
          updateLoading(true);
          setCurrentPage(response.data.meta.current_page);
          setLastPage(response.data.meta.last_page);
          setDataPost(response.data.data);
        });
    }
  }, [profile]);
  const showMoreItems = () => {
    if (currentPage !== lastPage) {
      axiosInstance
        .get(
          `/v1/post?logged_in_user=${profile.username}&page=${currentPage + 1}`,
          {
            headers: {
              Authorization: "bearer " + localStorage.getItem("access_token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
          response.data.data.map((data) => {
            setDataPost((currentUsers) => [...currentUsers, data]);
          });
        });
    }
  };
  useEffect(() => {
    axiosInstance.get("/v1/nft/collection").then((response) => {
      setDataNft(response.data.data);
    });
  }, []);
  const navigate = useNavigate();
  const handleClickLike = (id) => {
    if (profile.username) {
      axiosInstance
        .post(
          "/v1/post/like",
          {
            post_id: id,
          },
          {
            headers: {
              // prettier-ignore
              "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
          }
        )
        .then((response) => {
          const likedPost = document.querySelector(
            `.wishlist-button.heart.${"post" + id}`
          );
          likedPost.children[0].innerHTML = response.data.data.likesCount;
          if (likedPost.classList.contains("liked")) {
            likedPost.classList.remove("liked");
          } else {
            likedPost.classList.add("liked");
          }
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <Fragment>
      <div className="flat-tabs items">
        <Tabs>
          <TabList>
            {dataTab.map((data) => (
              <Tab key={data.id}>{data.title}</Tab>
            ))}
          </TabList>
          {dataPanel.map((data, index) => (
            <TabPanel key={data.id}>
              <div className="option">
                {/* <h2 className="title">
                  {index === 0 ? dataPost.length : dataNft.length} Items
                </h2> */}
                {/* <div className="view">
                  <ul>
                    <li
                      onClick={listToggle}
                      ref={listBtn}
                      className="style1 grid active"
                    >
                      <Link to="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                            fill="white"
                          />
                          <path
                            d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                            fill="white"
                          />
                          <path
                            d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                            fill="white"
                          />
                          <path
                            d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                            fill="white"
                          />
                        </svg>
                        <span>Grid</span>
                      </Link>
                    </li>
                    <li
                      onClick={gridToggle}
                      ref={gridBtn}
                      className="style2 list"
                    >
                      <Link to="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 8H3C2.59 8 2.25 7.09333 2.25 6C2.25 4.90667 2.59 4 3 4H21C21.41 4 21.75 4.90667 21.75 6C21.75 7.09333 21.41 8 21 8Z"
                            fill="#EBEBEB"
                          />
                          <path
                            d="M21 14H3C2.59 14 2.25 13.0933 2.25 12C2.25 10.9067 2.59 10 3 10H21C21.41 10 21.75 10.9067 21.75 12C21.75 13.0933 21.41 14 21 14Z"
                            fill="#EBEBEB"
                          />
                          <path
                            d="M21 20H3C2.59 20 2.25 19.0933 2.25 18C2.25 16.9067 2.59 16 3 16H21C21.41 16 21.75 16.9067 21.75 18C21.75 19.0933 21.41 20 21 20Z"
                            fill="#EBEBEB"
                          />
                        </svg>
                        <span>List</span>
                      </Link>
                    </li>
                  </ul>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="btn-sort-by dropdown"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 7H21"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M6 12H18"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M10 17H14"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      <span>Low To High</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ margin: 0 }}>
                      <Dropdown.Item href="#">Top rate</Dropdown.Item>
                      <Dropdown.Item href="#">Mid rate</Dropdown.Item>
                      <Dropdown.Item href="#">Low rate</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}
              </div>

              <div className="content-item open" ref={listContent}>
                {index === 0 ? (
                  loading ? (
                    dataPost.slice(0, visible).map((item, key) => (
                      <div key={key} className="col-item">
                        <div className="sc-card-product menu_card style-h7">
                          <div className="meta-info style">
                            <div className="author">
                              <div className="avatar">
                                <img src={item.author.avatar} />
                              </div>
                              <div className="info">
                                <h6>
                                  {" "}
                                  <Link to={`/users/${item.author.username}`}>
                                    {item.author.username}
                                  </Link>{" "}
                                </h6>
                              </div>
                            </div>
                            <button
                              className={`wishlist-button heart ${
                                "post" + item.post_id
                              } ${item.liked ? "liked" : ""}`}
                              onClick={() => handleClickLike(item.post_id)}
                            >
                              <span className="number-like">
                                {" "}
                                {item.likesCount}
                              </span>
                            </button>
                          </div>
                          <div className="card-media">
                            <Link to={`/post-details/${item.post_id}`}>
                              <img src={item.image_path} />
                            </Link>
                            {/* <div className="featured-countdown">
                                            <span className="slogan"></span>
                                            <Countdown date={Date.now() + 500000000}>
                                              <span>You are good to go!</span>
                                            </Countdown>
                                          </div> */}
                            {/* <div className="button-place-bid">
                              <button
                                onClick={() => setModalShow(true)}
                                data-toggle="modal"
                                data-target="#popup_bid"
                                className="sc-button style-place-bid style bag fl-button pri-3"
                              >
                                <span>Place Bid</span>
                              </button>
                            </div> */}
                          </div>
                          <div className="card-title">
                            <h5>
                              <a
                                href={`https://social.adoreh.hojres.com/posts/${
                                  item.title
                                }/${item.post_id ? item.post_id : 1}`}
                              >
                                {item.title}
                              </a>
                            </h5>
                          </div>
                          {/* <div className="meta-info">
                                          <div className="author">
                                            <div className="info">
                                              <span>Current Bid</span>
                                              <span className="pricing">{item.price}</span>
                                            </div>
                                          </div>
                                          <div className="tags">{item.tags}</div>
                                        </div> */}
                        </div>
                      </div>
                    ))
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
                  )
                ) : (
                  dataNft.slice(0, visible).map((item, key) => (
                    <div key={key} className="col-item">
                      <div className="sc-card-product menu_card style-h7">
                        <div className="meta-info style">
                          <div className="author">
                            <div className="avatar">
                              <img src={item.user.avatar} />
                            </div>
                            <div className="info">
                              <h6>
                                {" "}
                                <Link to={`/users/${item.user.username}`}>
                                  {item.user.username}
                                </Link>{" "}
                              </h6>
                            </div>
                          </div>
                          {/* <button className="wishlist-button heart">
                            <span className="number-like"> {item.wishlist}</span>
                          </button> */}
                        </div>
                        <div className="card-media">
                          <Link to={`/nft-details/${item.id}`}>
                            <img src={item.json.image} />
                          </Link>
                          {/* <div className="featured-countdown">
                              <span className="slogan"></span>
                              <Countdown date={Date.now() + 500000000}>
                                <span>You are good to go!</span>
                              </Countdown>
                            </div> */}
                          {/* <div className="button-place-bid">
                              <button
                                onClick={() => setModalShow(true)}
                                data-toggle="modal"
                                data-target="#popup_bid"
                                className="sc-button style-place-bid style bag fl-button pri-3"
                              >
                                <span>Place Bid</span>
                              </button>
                            </div> */}
                        </div>
                        <div className="card-title">
                          <h5>
                            <Link to="item-details.html">{item.title}</Link>
                          </h5>
                        </div>
                        {/* <div className="meta-info">
                            <div className="author">
                              <div className="info">
                                <span>Current Bid</span>
                                <span className="pricing">{item.price}</span>
                              </div>
                            </div>
                            <div className="tags">{item.tags}</div>
                          </div> */}
                      </div>
                    </div>
                  ))
                )}

                {visible < data.dataContent.length && (
                  <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                    <Link
                      to="#"
                      className="sc-button loadmore fl-button pri-3"
                      onClick={showMoreItems}
                    >
                      <span>Load More</span>
                    </Link>
                  </div>
                )}
              </div>
              <div className="content-item2" ref={gridContent}>
                {data.dataContent.slice(0, visible).map((item, index) => (
                  <div key={index} className="col-item">
                    <div className="sc-card-product menu_card style-h7">
                      <div className="wrap-media">
                        <div className="card-media">
                          <Link to="/item-details-01">
                            <img src={item.img} />
                          </Link>
                        </div>
                      </div>
                      <div className="card-title">
                        <p>Item Name</p>
                        <h4>
                          <Link to="/item-details-01">{item.title}</Link>
                        </h4>
                      </div>
                      <div className="meta-info style">
                        <div className="author">
                          <div className="avatar">
                            <img src={item.imgAuthor} />
                          </div>
                          <div className="info">
                            <h4>
                              {" "}
                              <Link to="author02.html">
                                {item.nameAuthor}
                              </Link>{" "}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="countdown">
                        <p>Countdown</p>
                        <div className="featured-countdown">
                          <span className="slogan"></span>
                          <Countdown date={Date.now() + 500000000}>
                            <span>You are good to go!</span>
                          </Countdown>
                        </div>
                      </div>
                      <div className="wrap-hear">
                        {/* <button className="wishlist-button heart">
                          <span className="number-like"> {item.wishlist}</span>
                        </button> */}
                      </div>
                      <div className="wrap-tag">
                        <div className="tags">{item.tags}</div>
                      </div>
                      <div className="meta-info">
                        <div className="author">
                          <div className="info">
                            <p>Current Bid</p>
                            <p className="pricing">{item.price}</p>
                          </div>
                        </div>
                      </div>
                      <div className="button-place-bid">
                        <button
                          onClick={() => setModalShow(true)}
                          data-toggle="modal"
                          data-target="#popup_bid"
                          className="sc-button style-place-bid style bag fl-button pri-3"
                        >
                          <span>Place Bid</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {visible < data.dataContent.length && (
                  <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                    <Link
                      to="#"
                      className="sc-button loadmore fl-button pri-3"
                      onClick={showMoreItems}
                    >
                      <span>Load More</span>
                    </Link>
                  </div>
                )}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default ItemContent;
