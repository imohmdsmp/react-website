import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import avt from "../assets/images/avatar/avt-9.jpg";
import { profileStore } from "../CreateStore";
import { toast } from "react-toastify";
import axiosInstance from "../helper/axios";
import ModalCropPost from "../components/ModalCropPost";

const CreateItem = () => {
  const [modalShow, setModalShow] = useState(false);
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 1,
    croppedImg: null,
    fileImg: null,
  });
  const changeImage = (e, element) => {
    const imageProfile = document.querySelector(`${element}`);
    const fileImage = e.target.files[0];
    if (e.target.files[0].size < 1000000) {
      if (fileImage) {
        const url = URL.createObjectURL(fileImage);
        //   imageProfile.src = URL.createObjectURL(fileImage);
        setModalShow(true);
        setPicture({
          ...picture,
          img: url,
          cropperOpen: true,
          fileImg: fileImage,
        });
      }
    } else {
      e.target.value = "";
      toast.error("Upload limit is set to 1MB", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
  };

  const [tags, setTags] = React.useState([]);

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags);
  };
  const profile = profileStore((state) => state.profile);
  const { updateProfile } = profileStore();
  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };
  const [val, setVal] = useState("");
  const handleCange = (e) => {
    setVal(e.target.value);
  };
  const [valueCaption, setValueCaption] = useState("");
  const handleCangeCaption = (e) => {
    setValueCaption(e.target.value);
  };

  const [tagsShow, setTagsShow] = useState("");
  function handleKeyDown(e) {
    let valueTags = e.target.value.split(" ");
    setTags(valueTags);
    // setTagsShow(valueTags.join(", "));
    if (tags.length <= 6) {
      if (e.key !== "Enter") return;
      const value = e.target.value;
      if (!value.trim()) return;
      setTags([...tags, value]);
      e.target.value = "";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.error("Only 6 tags are allowed", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
  }

  // function removeTag(index) {
  //   setTags(tags.filter((el, i) => i !== index));
  // }
  let navigate = useNavigate();
  const [errorForm, setErrorForm] = useState({});
  const submitEditProfile = (e) => {
    e.preventDefault();
    document.querySelector(".tf-button-submit").classList.add("disabled");
    const title = document.querySelector(".form-creact-item .title-item");
    const profilePicture = document.querySelector(
      ".form-create-item .inputfile"
    );
    const caption = document.querySelector(".form-creact-item .caption-text");
    var formData = new FormData();
    if (picture.fileImg) {
      formData.append("image_path", picture.fileImg);
    } else {
      formData.delete("image_path");
    }

    formData.append("title", title.value);
    formData.append("caption", caption.value);
    tags.map((tag) => {
      formData.append("tags[]", tag);
    });
    axiosInstance
      .post("/v1/post", formData, {
        // prettier-ignore
        headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
              "Content-Type": "multipart/form-data"
            },
      })
      .then((response) => {
        toast.success("Item Created Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        document
          .querySelector(".tf-button-submit")
          .classList.remove("disabled");
        setTimeout(() => {
          navigate("/");
        }, 600);

        document
          .querySelector(".btn-edit-profile")
          .classList.remove("disabled");
      })
      .catch((error) => {
        setErrorForm(error.response.data.data.errors);
        document
          .querySelector(".tf-button-submit")
          .classList.remove("disabled");
        toast.error("Not Valid", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      });
  };
  return (
    <div className="create-item">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Create Item</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Create Item</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-create-item tf-section">
        <div className="themesflat-container">
          <div className="row">
            <ModalCropPost
              show={modalShow}
              picture={picture}
              setPicture={setPicture}
              setModalShow={setModalShow}
            />
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 d-none d-lg-block">
              <h4 className="title-create-item">Preview item</h4>
              <div className="sc-card-product">
                <div className="card-media">
                  <Link to="/item-details-01">
                    <img id="cover-img" src={img1} />
                  </Link>
                  {/* <Link to="/login" className="wishlist-button heart">
                    <span className="number-like"> 100</span>
                  </Link>
                  <div className="featured-countdown">
                    <span className="slogan"></span>
                    <Countdown date={Date.now() + 500000000}>
                      <span>You are good to go!</span>
                    </Countdown>
                  </div> */}
                </div>
                <div className="card-title d-inline mb-3">
                  <h6 className="title-create-item mb-1">Title</h6>
                  <p className=" h-20 mb-3">
                    <Link to="/item-details-01">{val}</Link>
                  </p>
                  {/* <div className="tags">bsc</div> */}
                </div>
                <div>
                  <h6 className="title-create-item">Tags</h6>
                  <div className="tags-input-container mb-4 mt-2">
                    {tagsShow}
                    {tags[0] !== "" &&
                      tags.map((tag, index) => (
                        <div className="tag-item" key={index}>
                          <span className="text mb-1 ml-1 text">{tag}</span>
                          <span
                            className="close"
                            onClick={() => removeTag(index)}
                          >
                            &times;
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="meta-info">
                  <div className="author w-100">
                    {/* <div className="avatar">
                      <img
                        src={
                          profile.avatar == null ||
                          profile.avatar == undefined ||
                          profile.avatar == ""
                            ? avt
                            : profile.avatar
                        }
                      />
                    </div> */}
                    <div className="info h-40 w-100">
                      <h6 className="title-create-item mb-0">caption</h6>
                      <p>
                        {" "}
                        <Link to="/authors-02">{valueCaption}</Link>
                      </p>
                    </div>
                  </div>
                  {/* <div className="price">
                    <span>Current Bid</span>
                    <h5> 4.89 ETH</h5>
                  </div> */}
                </div>

                {/* <div className="card-bottom">
                  <Link
                    to="/wallet-connect"
                    className="sc-button style bag fl-button pri-3"
                  >
                    <span>Place Bid</span>
                  </Link>
                  <Link to="/activity" className="view-history reload">
                    View History
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-6 col-md-12 col-12">
              <div className="form-create-item">
                <form action="#">
                  <h4 className="title-create-item">Upload file</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 1MB.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      name="file"
                      onChange={(e) => changeImage(e, "#cover-img")}
                      required
                    />
                  </label>
                  {errorForm.image_path && (
                    <p className="text-danger position-absolute">
                      {errorForm.image_path[0]}
                    </p>
                  )}
                </form>
                <div className="flat-tabs tab-create-item">
                  {/* <h4 className="title-create-item">Select method</h4> */}
                  <Tabs>
                    {/* <TabList>
                      <Tab>
                        <span className="icon-fl-tag"></span>Simple Post
                      </Tab> */}
                    {/* <Tab>
                        <span className="icon-fl-clock"></span>Time Auctions
                      </Tab>
                      <Tab>
                        <span className="icon-fl-icon-22"></span>Open For Bids
                      </Tab> */}
                    {/* </TabList> */}

                    <TabPanel>
                      <form className="form-creact-item">
                        {/* <h4 className="title-create-item">Price</h4>
                        <input
                          type="text"
                          placeholder="Enter price for one item (ETH)"
                        /> */}
                        <div className="position-relative">
                          <h4 className="title-create-item">Title</h4>
                          <input
                            type="text"
                            placeholder="Item Name"
                            onChange={handleCange}
                            className="mb-0 title-item"
                          />
                          {errorForm.title && (
                            <p className="text-danger position-absolute">
                              {errorForm.title[0]}
                            </p>
                          )}
                        </div>
                        <div className="tags-input-container mb-4 position-relative">
                          <h4 className="title-create-item">Tags</h4>
                          <input
                            onChange={handleKeyDown}
                            type="text"
                            className="tags-input mb-3"
                            placeholder="Tags"
                          />
                          {tags[0] !== "" &&
                            tags.map((tag, index) => (
                              <div className="tag-item" key={index}>
                                <span className="text mb-1 ml-1 text">
                                  {tag}
                                </span>
                                <span
                                  className="close"
                                  onClick={() => removeTag(index)}
                                >
                                  &times;
                                </span>
                              </div>
                            ))}

                          {errorForm.tags && (
                            <p className="text-danger position-absolute">
                              {errorForm.tags[0]}
                            </p>
                          )}
                        </div>
                        <div className="position-relative">
                          <h4 className="title-create-item">Caption</h4>
                          <textarea
                            placeholder="e.g. “This is very limited item”"
                            onChange={handleCangeCaption}
                            className="caption-text"
                          ></textarea>
                          {errorForm.caption && (
                            <p className="text-danger position-absolute">
                              {errorForm.caption[0]}
                            </p>
                          )}
                        </div>
                        {/* <div className="row-form style-3">
                          <div className="inner-row-form">
                            <h4 className="title-create-item">Royalties</h4>
                            <input type="text" placeholder="5%" />
                          </div>
                          <div className="inner-row-form">
                            <h4 className="title-create-item">Size</h4>
                            <input type="text" placeholder="e.g. “size”" />
                          </div>
                          <div className="inner-row-form style-2">
                            <div className="seclect-box">
                              <div id="item-create" className="dropdown">
                                <Link to="#" className="btn-selector nolink">
                                  Abstraction
                                </Link>
                                <ul>
                                  <li>
                                    <span>Art</span>
                                  </li>
                                  <li>
                                    <span>Music</span>
                                  </li>
                                  <li>
                                    <span>Domain Names</span>
                                  </li>
                                  <li>
                                    <span>Virtual World</span>
                                  </li>
                                  <li>
                                    <span>Trading Cards</span>
                                  </li>
                                  <li>
                                    <span>Sports</span>
                                  </li>
                                  <li>
                                    <span>Utility</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </form>
                      <div className="text-center btn-creact-item">
                        <button
                          className="btn-edit-profile fa-2x mg-t-15 p-3 tf-button-submit w-50"
                          onClick={submitEditProfile}
                        >
                          Post <span className="spinner"></span>
                        </button>
                      </div>
                    </TabPanel>
                    {/* <TabPanel>
                      <form action="#">
                        <h4 className="title-create-item">Minimum bid</h4>
                        <input type="text" placeholder="enter minimum bid" />
                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="title-create-item">Starting date</h5>
                            <input
                              type="date"
                              name="bid_starting_date"
                              id="bid_starting_date"
                              className="form-control"
                              min="1997-01-01"
                            />
                          </div>
                          <div className="col-md-6">
                            <h4 className="title-create-item">
                              Expiration date
                            </h4>
                            <input
                              type="date"
                              name="bid_expiration_date"
                              id="bid_expiration_date"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <h4 className="title-create-item">Title</h4>
                        <input type="text" placeholder="Item Name" />

                        <h4 className="title-create-item">Description</h4>
                        <textarea placeholder="e.g. “This is very limited item”"></textarea>
                      </form>
                    </TabPanel>
                    <TabPanel>
                      <form action="#">
                        <h4 className="title-create-item">Price</h4>
                        <input
                          type="text"
                          placeholder="Enter price for one item (ETH)"
                        />

                        <h4 className="title-create-item">Minimum bid</h4>
                        <input type="text" placeholder="enter minimum bid" />

                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="title-create-item">Starting date</h5>
                            <input
                              type="date"
                              name="bid_starting_date"
                              id="bid_starting_date2"
                              className="form-control"
                              min="1997-01-01"
                            />
                          </div>
                          <div className="col-md-6">
                            <h4 className="title-create-item">
                              Expiration date
                            </h4>
                            <input
                              type="date"
                              name="bid_expiration_date"
                              id="bid_expiration_date2"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <h4 className="title-create-item">Title</h4>
                        <input type="text" placeholder="Item Name" />

                        <h4 className="title-create-item">Description</h4>
                        <textarea placeholder="e.g. “This is very limited item”"></textarea>
                      </form>
                    </TabPanel> */}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateItem;
