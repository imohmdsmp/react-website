import React, { useEffect, useState } from 'react';
import Header from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import LiveAuction from '../components/layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-3.jpg';
import img2 from '../assets/images/avatar/avt-11.jpg';
import img3 from '../assets/images/avatar/avt-1.jpg';
import img4 from '../assets/images/avatar/avt-5.jpg';
import img5 from '../assets/images/avatar/avt-7.jpg';
import img6 from '../assets/images/avatar/avt-8.jpg';
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg';
import axiosInstance from '../helper/axios';
import { profileStore } from '../CreateStore';
import { useRef } from 'react';

// comment Display
const CommentForm = () => {
  return (
    <textarea
      name="comment"
      id="comment"
      cols="10"
      placeholder="type your comment ..."
      rows="5"
    ></textarea>
  );
};

// Comment submit
const CommentSubmit = ({ postComment, setPostComment }) => {
  const dataForm = document.getElementById('comment');

  return (
    <button
      className="mt-5"
      onClick={() => {
        if (dataForm.value != '') {
          setPostComment([...postComment, dataForm.value]);
          dataForm.value = '';
        }
      }}
    >
      Add Comment
    </button>
  );
};

// reply comment
const ReplyComment = () => {
  const replyComment = useRef();

  return (
    <>
      <p className="replied-comment ml-5 mt-0 d-none col">
        <textarea
          ref={replyComment}
          type="text"
          placeholder="Type your comment"
        />
        <p className="d-none"></p>
      </p>
      <span
        className="d-none send-btn"
        htmlFor=""
        onClick={(event) => {
          if (
            event.target.previousElementSibling.firstChild.value == ''
          ) {
            event.target.previousElementSibling.previousElementSibling.innerText =
              'Reply';
            event.target.previousElementSibling.classList.add(
              'd-none'
            );
            event.target.classList.add('d-none');
          } else {
            event.target.previousElementSibling.lastChild.classList.remove(
              'd-none'
            );
            event.target.previousElementSibling.previousElementSibling.innerText =
              'Edit';
            event.target.previousElementSibling.lastChild.innerText =
              event.target.previousElementSibling.firstChild.value;
            event.target.classList.add('d-none');
            event.target.previousElementSibling.firstChild.classList.add(
              'd-none'
            );
          }
        }}
      >
        Post
      </span>
    </>
  );
};

const CommentResult = ({ postComment, profile }) => {
  const commentParent = useRef();
  const [showReply, setShowReply] = useState(false);

  return (
    <ul className="col mt-5 pt-5 px-lg-5" ref={commentParent}>
      {postComment.map((item, keys) => {
        return (
          <li
            className="my-5 comment-list container-fluid px-0 px-lg-4"
            key={keys}
          >
            <div>
              <div className="d-flex align-items-baseline">
                <figure>
                  <img
                    className="img-comment"
                    src={profile.avatar}
                    alt={profile.first_name}
                  />
                </figure>
                <h6>
                  {profile.first_name
                    ? profile.first_name
                    : 'User Not Login'}{' '}
                  {profile.last_name}
                </h6>
              </div>
              <p className="comment-text">{item}</p>
            </div>
            <div className="row pr-0 pl-3">
              <p
                className="reply col-12 mb-0 ml-5"
                onClick={(event) => {
                  if (event.target.innerText == 'Reply') {
                    event.target.nextElementSibling.classList.remove(
                      'd-none'
                    );
                    event.target.nextElementSibling.nextElementSibling.classList.remove(
                      'd-none'
                    );
                    event.target.innerText = 'Cancel';
                  } else if (event.target.innerText == 'Edit') {
                    event.target.nextElementSibling.firstChild.classList.remove(
                      'd-none'
                    );
                    event.target.nextElementSibling.firstChild.value =
                      event.target.nextElementSibling.lastChild.innerText;
                    event.target.nextElementSibling.lastChild.classList.add(
                      'd-none'
                    );
                    event.target.nextElementSibling.lastChild.innerText =
                      '';
                    event.target.nextElementSibling.nextElementSibling.classList.remove(
                      'd-none'
                    );
                    event.target.innerText = 'Cancel-edit';
                  } else if (event.target.innerText == 'Cancel') {
                    event.target.nextElementSibling.nextElementSibling.classList.add(
                      'd-none'
                    );
                    event.target.nextElementSibling.classList.add(
                      'd-none'
                    );
                    event.target.innerText = 'Reply';
                  } else {
                    event.target.nextElementSibling.lastChild.classList.remove(
                      'd-none'
                    );
                    event.target.innerHTML = 'Edit';
                    event.target.nextElementSibling.lastChild.innerText =
                      event.target.nextElementSibling.firstChild.value;
                    event.target.nextElementSibling.firstChild.classList.add(
                      'd-none'
                    );
                    event.target.nextElementSibling.nextElementSibling.classList.add(
                      'd-none'
                    );
                  }
                }}
              >
                Reply
              </p>
              <ReplyComment />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const ItemDetails01 = () => {
  const [postComment, setPostComment] = useState([]);

  const [dataHistory] = useState([
    {
      img: img1,
      name: 'Mason Woodward',
      time: '8 hours ago',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    {
      img: img2,
      name: 'Mason Woodward',
      time: 'at 06/10/2021, 3:20 AM',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    {
      img: img3,
      name: 'Mason Woodward',
      time: '8 hours ago',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    {
      img: img4,
      name: 'Mason Woodward',
      time: '8 hours ago',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    {
      img: img5,
      name: 'Mason Woodward',
      time: '8 hours ago',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    {
      img: img6,
      name: 'Mason Woodward',
      time: '8 hours ago',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
  ]);

  const location = useLocation();
  const pathUser = location.pathname.split('/');
  const [dataPostDetail, setDataPostDetail] = useState({
    title: null,
    caption: null,
    image_path: null,
  });

  const [likePost, setLikePost] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    axiosInstance
      .get(`/v1/post/details?post_id=${pathUser[2]}`)
      .then((response) => {
        setDataPostDetail(response.data.data);
      });
    axiosInstance
      .get(`/v1/post/like/check?post_id=${pathUser[2]}`, {
        headers: {
          // prettier-ignore
          "Authorization": "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setLiked(response.data.data.liked);
      });
  }, []);
  const navigate = useNavigate();
  const profile = profileStore((state) => state.profile);
  const handleClickLike = () => {
    if (profile.username) {
      axiosInstance
        .post(`/v1/post/like?post_id=${pathUser[2]}`, null, {
          headers: {
            // prettier-ignore
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          const likedPost = document.querySelector(
            `.wishlist-button.heart`
          );
          likedPost.children[0].innerHTML =
            response.data.data.likesCount;
          if (likedPost.classList.contains('liked')) {
            likedPost.classList.remove('liked');
          } else {
            likedPost.classList.add('liked');
          }
        });
    } else {
      navigate('/login');
    }
  };
  return (
    <div className="item-details">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Post Details</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Explore</Link>
                  </li>
                  <li>Post Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section tf-item-details">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="content-left">
                <div className="media">
                  <img src={dataPostDetail.image_path} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="content-right">
                <div className="sc-item-details">
                  <h2 className="style2">{dataPostDetail.title}</h2>
                  <div className="meta-item">
                    <div className="left">
                      {/* <span className="viewed eye">225</span> */}
                      <span
                        className={`heart wishlist-button ${
                          liked && 'liked'
                        }`}
                        onClick={handleClickLike}
                      >
                        <span className="number-like">
                          {dataPostDetail.likesCount}
                        </span>
                      </span>
                    </div>
                    {/* <div className="right">
                      <Link to="#" className="share"></Link>
                      <Link to="#" className="option"></Link>
                    </div> */}
                  </div>
                  {dataPostDetail.author && (
                    <div className="client-infor sc-card-product">
                      <Link
                        to={`/users/${dataPostDetail.author.username}`}
                        className="meta-info"
                      >
                        <div className="author">
                          <div className="avatar">
                            <img src={dataPostDetail.author.avatar} />
                          </div>
                          <div className="info">
                            <span>Creator</span>
                            <h6>
                              {' '}
                              <Link
                                to={`/users/${dataPostDetail.author.username}`}
                              >
                                {dataPostDetail.author.username}
                              </Link>{' '}
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}

                  <p>{dataPostDetail.caption}</p>
                  {/* <div className="meta-item-details style2">
                    <div className="item meta-price">
                      <span className="heading">Current Bid</span>
                      <div className="price">
                        <div className="price-box">
                          <h5> 4.89 ETH</h5>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                    <div className="item count-down">
                      <span className="heading style-2">Countdown</span>
                      <Countdown date={Date.now() + 500000000}>
                        <span>You are good to go!</span>
                      </Countdown>
                    </div>
                  </div> */}
                  {/* <Link
                    to="/wallet-connect"
                    className="sc-button loadmore style bag fl-button pri-3"
                  >
                    <span>Place a bid</span>
                  </Link> */}
                  <div className="flat-tabs themesflat-tabs">
                    {/* <Tabs>
                      <TabList>
                        <Tab>Bid History</Tab>
                        <Tab>Info</Tab>
                        <Tab>Provenance</Tab>
                      </TabList>

                      <TabPanel>
                        <ul className="bid-history-list">
                          {dataHistory.map((item, index) => (
                            <li key={index} item={item}>
                              <div className="content">
                                <div className="client">
                                  <div className="sc-author-box style-2">
                                    <div className="author-avatar">
                                      <Link to="#">
                                        <img
                                          src={item.img}
                                          className="avatar"
                                        />
                                      </Link>
                                      <div className="badge"></div>
                                    </div>
                                    <div className="author-infor">
                                      <div className="name">
                                        <h6>
                                          <Link to="/authors-02">
                                            {item.name}{" "}
                                          </Link>
                                        </h6>{" "}
                                        <span> place a bid</span>
                                      </div>
                                      <span className="time">{item.time}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="price">
                                  <h5>{item.price}</h5>
                                  <span>= {item.priceChange}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <ul className="bid-history-list">
                          <li>
                            <div className="content">
                              <div className="client">
                                <div className="sc-author-box style-2">
                                  <div className="author-avatar">
                                    <Link to="#">
                                      <img src={img1} className="avatar" />
                                    </Link>
                                    <div className="badge"></div>
                                  </div>
                                  <div className="author-infor">
                                    <div className="name">
                                      <h6>
                                        {" "}
                                        <Link to="/authors-02">
                                          Mason Woodward{" "}
                                        </Link>
                                      </h6>{" "}
                                      <span> place a bid</span>
                                    </div>
                                    <span className="time">8 hours ago</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <div className="provenance">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </TabPanel>
                    </Tabs> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themesflat-container px-0 mt-5 pt-5">
          <div className="row px-lg-5 px-4">
            <div className="col-lg-5">
              <CommentForm />
              <CommentSubmit
                postComment={postComment}
                setPostComment={setPostComment}
              />
            </div>
            <CommentResult
              postComment={postComment}
              dataPostDetail={dataPostDetail}
              profile={profile}
            />
          </div>
        </div>
      </div>
      {/* <LiveAuction data={liveAuctionData} /> */}
      <Footer />
    </div>
  );
};

export default ItemDetails01;
