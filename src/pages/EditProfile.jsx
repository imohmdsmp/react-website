import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import avt from "../assets/images/avatar/avata_profile.jpg";
import bg1 from "../assets/images/backgroup-secsion/option1_bg_profile.jpg";
import bg2 from "../assets/images/backgroup-secsion/option2_bg_profile.jpg";
import axiosInstance from "../helper/axios";
import { profileStore } from "../CreateStore";
import { toast } from "react-toastify";
import sweetAlert from "./../helper/alerts";
import AvatarEditor from "react-avatar-editor";
import ModalCrop from "../components/ModalCrop";
import ModalCropAvatar from "../components/ModalCropAvatar";

const EditProfile = () => {
  const [modalShow, setModalShow] = useState(false);
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 1,
    croppedImg: null,
    fileImg: null,
  });
  const [modalShowAvatar, setModalShowAvatar] = useState(false);
  const [pictureAvatar, setPictureAvatar] = useState({
    cropperOpen: false,
    img: null,
    zoom: 1,
    croppedImg: null,
    fileImg: null,
  });

  let navigate = useNavigate();
  const profile = profileStore((state) => state.profile);
  const { updateProfile } = profileStore();

  const changeImage = (e, element) => {
    const imageProfile = document.querySelector(`${element}`);
    const fileImage = e.target.files[0];
    if (e.target.files[0].size < 1000000) {
      if (fileImage) {
        const url = URL.createObjectURL(fileImage);
        // imageProfile.src = url;
        if (element === "#cover-img") {
          setModalShow(true);
          setPicture({
            ...picture,
            img: url,
            cropperOpen: true,
            fileImg: fileImage,
          });
        } else {
          setModalShowAvatar(true);
          setPictureAvatar({
            ...pictureAvatar,
            img: url,
            cropperOpen: true,
            fileImg: fileImage,
          });
        }
      }
    } else {
      e.target.value = "";
      toast.error("Upload limit is set to 1MB", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
  };
  const submitEditProfile = (e) => {
    e.preventDefault();

    const firstName = document.querySelector(".form-profile #first-name");
    const lastName = document.querySelector(".form-profile #last-name");
    const profilePicture = document.querySelector("#tf-upload-img");
    const bio = document.querySelector(".form-profile #bio");
    const instagram = document.querySelector("#instagram");
    const twitter = document.querySelector("#twitter");
    const discord = document.querySelector("#discord");
    const facebook = document.querySelector("#facebook");
    const coverImage = document.querySelector("#coverimage");
    console.log(coverImage);
    const profileImage = document
      .querySelector("#profileimg")
      .getAttribute("src");
    const coverImg = document.querySelector("#cover-img").getAttribute("src");

    var formData = new FormData();

    const socialLink = {
      instagram: instagram.value,
      twitter: twitter.value,
      discord: null,
      facebook: facebook.value,
    };

    formData.append("avatar_path", pictureAvatar.fileImg);
    formData.append("first_name", firstName.value);
    formData.append("last_name", lastName.value);
    formData.append("bio", bio.value);
    formData.append("cover_path", picture.fileImg);
    formData.append("social_link", JSON.stringify(socialLink));
    document.querySelector(".btn-edit-profile").classList.add("disabled");

    if (
      firstName.value === profile.first_name &&
      lastName.value === profile.last_name &&
      bio.value === profile.bio &&
      instagram.value == profile.social_link.instagram &&
      facebook.value == profile.social_link.facebook &&
      twitter.value == profile.social_link.twitter &&
      coverImg == profile.cover &&
      profileImage == profile.avatar
    ) {
      toast.error("Please apply your changes", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      document.querySelector(".btn-edit-profile").classList.remove("disabled");
    } else {
      axiosInstance
        .post("/v1/users/profile", formData, {
          // prettier-ignore
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
              "Content-Type": "multipart/form-data"
            },
        })
        .then((response) => {
          updateProfile(response.data.data);
          toast.success("Edit Profile Success", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
          });
          document
            .querySelector(".btn-edit-profile")
            .classList.remove("disabled");
        })
        .catch((response) => {
          console.log(response);
        });
    }
  };

  let instagramProfile;
  let twitterProfile;
  let discordProfile;
  let facebookProfile;

  if (profile.social_link == null && profile.social_link == undefined) {
    console.log("");
  } else {
    instagramProfile = profile.social_link.instagram;
    twitterProfile = profile.social_link.twitter;
    facebookProfile = profile.social_link.facebook;
    discordProfile = profile.social_link.discord;
  }

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Edit Profile</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Edit Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-create-item tf-section">
        <div className="themesflat-container">
          <div className="row">
            <ModalCrop
              show={modalShow}
              picture={picture}
              setPicture={setPicture}
              setModalShow={setModalShow}
            />
            <ModalCropAvatar
              show={modalShowAvatar}
              picture={pictureAvatar}
              setPicture={setPictureAvatar}
              setModalShow={setModalShowAvatar}
            />

            {/* <AvatarEditor
              image={bg1}
              width={250}
              height={250}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={1.2}
              rotate={0}
            /> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="sc-card-profile text-center">
                <div className="card-media">
                  <img id="profileimg" src={profile.avatar} alt="" />
                </div>
                <div id="upload-profile">
                  <Link to="#" className="btn-upload">
                    Choose New Avatar{" "}
                  </Link>
                  <input
                    id="tf-upload-img"
                    type="file"
                    name="profile"
                    required=""
                    onChange={(e) => changeImage(e, "#profileimg")}
                  />
                </div>
                {/* <Link to="#" className="btn-upload style2">
                  Delete
                </Link> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
              <div className="form-upload-profile">
                <h4 className="title-create-item">Choice your Cover image</h4>
                <div className="option-profile clearfix">
                  <form action="#">
                    <label className="uploadFile">
                      <input
                        type="file"
                        className="inputfile form-control"
                        id="coverimage"
                        name="file"
                        onChange={(e) => changeImage(e, "#cover-img")}
                      />
                    </label>
                  </form>
                  <div className="image">
                    <img id="cover-img" src={profile.cover} />
                  </div>
                  {/* <div className="image style2">
                    <img src={bg2} />
                  </div> */}
                </div>

                <form
                  action="#"
                  className="form-profile"
                  onSubmit={submitEditProfile}
                >
                  <div className="form-infor-profile">
                    <div className="info-account">
                      <h4 className="title-create-item">Account info</h4>
                      <fieldset>
                        <h4 className="title-infor-account">First Name</h4>
                        <input
                          id="first-name"
                          type="text"
                          defaultValue={profile.first_name}
                          placeholder={profile.first_name}
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Last Name</h4>
                        <input
                          id="last-name"
                          type="text"
                          defaultValue={profile.last_name}
                          placeholder={profile.last_name}
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Instagram</h4>
                        <input
                          id="instagram"
                          type="text"
                          placeholder="Instagram ID"
                          defaultValue={instagramProfile}
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Twitter</h4>
                        <input
                          id="twitter"
                          type="text"
                          placeholder="Twitter ID"
                          defaultValue={twitterProfile}
                        />
                      </fieldset>
                      {/* <fieldset>
                        <h4 className="title-infor-account">Discord</h4>
                        <input
                          id="discord"
                          type="text"
                          placeholder="discord"
                          defaultValue={discordProfile}
                        />
                      </fieldset> */}
                      <fieldset>
                        <h4 className="title-infor-account">Facebook</h4>
                        <input
                          id="facebook"
                          type="text"
                          defaultValue={facebookProfile}
                          placeholder="Facebook ID"
                        />
                      </fieldset>
                      {/* <fieldset>
                        <h4 className="title-infor-account">Email</h4>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </fieldset> */}
                      <fieldset>
                        <h4 className="title-infor-account">Bio</h4>
                        <textarea
                          tabIndex="4"
                          rows="5"
                          id="bio"
                          placeholder={profile.bio}
                          defaultValue={profile.bio}
                        ></textarea>
                      </fieldset>
                    </div>
                    {/* <div className="info-social">
                      <h4 className="title-create-item">Your Social media</h4>
                      <fieldset>
                        <h4 className="title-infor-account">Facebook</h4>
                        <input
                          type="text"
                          placeholder="Facebook username"
                          required
                        />
                        <Link to="#" className="connect">
                          <i className="fab fa-facebook"></i>Connect to face
                          book
                        </Link>
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Twitter</h4>
                        <input
                          type="text"
                          placeholder="Twitter username"
                          required
                        />
                        <Link to="#" className="connect">
                          <i className="fab fa-twitter"></i>Connect to Twitter
                        </Link>
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Discord</h4>
                        <input
                          type="text"
                          placeholder="Discord username"
                          required
                        />
                        <Link to="#" className="connect">
                          <i className="icon-fl-vt"></i>Connect to Discord
                        </Link>
                      </fieldset>
                    </div> */}
                  </div>
                  <button
                    className="tf-button-submit mg-t-15 btn-edit-profile"
                    type="submit"
                  >
                    Update Profile{" "}
                    <span className="spinner-edit-profile"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
