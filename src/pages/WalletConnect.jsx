import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
// import { ethers } from "ethers";
// import WalletConnectProvider from "@walletconnect/web3-provider";

import img1 from "../assets/images/icon/connect-1.png";
import img2 from "../assets/images/icon/connect-2.png";
import img3 from "../assets/images/icon/connect-3.png";
import img4 from "../assets/images/icon/connect-4.png";
import img5 from "../assets/images/icon/connect-5.png";
import img6 from "../assets/images/icon/connect-6.png";
import img7 from "../assets/images/icon/connect-7.png";
import img8 from "../assets/images/icon/connect-8.png";

const WalletConnect = () => {
  const [data] = useState([
    {
      img: img1,
      title: "Meta Mask",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      // click: requestAccountMetamask,
    },
    {
      img: img4,
      title: "Wallet Connect",
      description:
        "Metus corrupti itaque reiciendis, provident condimentum, reprehenderit numquam, mi",
      // click: requestAccountMetamask,
    },
  ]);

  // async function requestAccountConnectWallet() {
  //   const provider = new WalletConnectProvider({
  //     rpc: {
  //       1: "https://mainnet.mycustomnode.com",
  //       3: "https://ropsten.mycustomnode.com",
  //       100: "https://dai.poa.network",
  //       // ...
  //     },
  //   });
  //   await provider.enable();
  // }

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Connect Wallet</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Connect Wallet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-connect-wallet tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-2 mg-bt-12">
                Connect Your Wallet
              </h2>
              <h5 className="sub-title ct style-1 pad-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </h5>
            </div>
            <div className="col-md-12">
              <div className="sc-box-icon-inner style-2">
                {data.map((item, index) => (
                  <div key={index} className="sc-box-icon" onClick={item.click}>
                    <div className="img">
                      <img src={item.img} />
                    </div>
                    <h4 className="heading">
                      <Link to="/login">{item.title}</Link>{" "}
                    </h4>
                    <p className="content">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WalletConnect;
