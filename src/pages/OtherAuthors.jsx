import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { toast } from "react-toastify";
import "react-tabs/style/react-tabs.css";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import CardModal from "../components/layouts/CardModal";
import avt from "../assets/images/avatar/avt-author-tab.jpg";
import img1 from "../assets/images/box-item/card-item-3.jpg";
import imga1 from "../assets/images/avatar/avt-1.jpg";
import imgCollection1 from "../assets/images/avatar/avt-18.jpg";
import img2 from "../assets/images/box-item/card-item-4.jpg";
import imga2 from "../assets/images/avatar/avt-2.jpg";
import imgCollection2 from "../assets/images/avatar/avt-18.jpg";
import img3 from "../assets/images/box-item/card-item-2.jpg";
import imga3 from "../assets/images/avatar/avt-4.jpg";
import imgCollection3 from "../assets/images/avatar/avt-18.jpg";
import img4 from "../assets/images/box-item/card-item-7.jpg";
import imga4 from "../assets/images/avatar/avt-3.jpg";
import imgCollection4 from "../assets/images/avatar/avt-18.jpg";
import img5 from "../assets/images/box-item/card-item8.jpg";
import imga5 from "../assets/images/avatar/avt-12.jpg";
import imgCollection5 from "../assets/images/avatar/avt-18.jpg";
import img6 from "../assets/images/box-item/card-item-9.jpg";
import imga6 from "../assets/images/avatar/avt-1.jpg";
import imgCollection6 from "../assets/images/avatar/avt-18.jpg";
import img7 from "../assets/images/box-item/image-box-6.jpg";
import imga7 from "../assets/images/avatar/avt-4.jpg";
import imgCollection7 from "../assets/images/avatar/avt-18.jpg";
import img8 from "../assets/images/box-item/image-box-11.jpg";
import imga8 from "../assets/images/avatar/avt-3.jpg";
import imgCollection8 from "../assets/images/avatar/avt-18.jpg";
import axiosInstance from "../helper/axios";
import { postProfileStore, profileStore } from "../CreateStore";
import Web3 from "web3";
const OtherAuthors = () => {
  const [menuTab] = useState([
    {
      class: "active",
      name: "Posts",
    },
    {
      class: "",
      name: "NFTs",
    },
    // {
    //   class: "",
    //   name: "AVATARS",
    // },
    // {
    //   class: "",
    //   name: "ART",
    // },
    // {
    //   class: "",
    //   name: "SPORTS",
    // },
  ]);
  const [panelTab] = useState([
    {
      id: 1,
      dataContent: [
        {
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img6,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img7,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga7,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection7,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img8,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga8,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection8,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img6,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img7,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga7,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection7,
          nameCollection: "Creative Art 3D",
        },
        {
          img: img8,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga8,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection8,
          nameCollection: "Creative Art 3D",
        },
      ],
    },
    {
      id: 2,
      dataContent: [
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
        },
      ],
    },
    {
      id: 3,
      dataContent: [
        {
          id: 1,
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
        },
      ],
    },
    {
      id: 4,
      dataContent: [
        {
          id: 1,
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 7,
          img: img7,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga7,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection7,
          nameCollection: "Creative Art 3D",
        },
      ],
    },
    {
      id: 5,
      dataContent: [
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 6,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "Shabahang Majd",
          price: "4.89 ETH",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
        },
      ],
    },
  ]);
  // Web3 code start
  const contractABI = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "player", type: "address" },
        { internalType: "string", name: "tokenURI", type: "string" },
      ],
      name: "convert_profile_to_nft",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [currentTransfer, setCurrentTransfer] = useState(undefined);
  const [current_gas_price, setCurrent_gas_price] = useState(undefined);
  const [current_gas_amount, setCurrent_gas_amount] = useState(undefined);
  // web3 code end
  const profile = profileStore((state) => state.profile);
  const [visible, setVisible] = useState(8);
  const [isOwner, setIsOwner] = useState(null);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState({
    avatar: null,
    first_name: null,
    followers: null,
    following: null,
    last_name: null,
    username: null,
    followed: null,
    social_link: {},
  });
  const location = useLocation();
  const pathUser = location.pathname.split("/");
  const { updatePost } = postProfileStore();
  const dataPosts = postProfileStore((state) => state.post);
  const [dataPost, setDataPost] = useState([]);
  const [dataPostOther, setDataPostOther] = useState([]);
  const [dataNft, setDataNft] = useState([]);
  const [listFlws, setListFlws] = useState(0);
  const [listFlwing, setListFlwing] = useState(0);
  const [userFollowed, setUserFollowed] = useState(false);
  useEffect(() => {
    if (pathUser[2]) {
      axiosInstance
        .get(`/v1/users?username=${pathUser[2]}`, {
          headers: {
            Authorization: "bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          setUser(response.data.data[0]);
          setListFlws(response.data.data[0].followers);
          setListFlwing(response.data.data[0].following);
          setIsOwner(response.data.data[0].username === profile.username);
        });
      axiosInstance.get(`/v1/post?username=${pathUser[2]}`).then((response) => {
        setDataPostOther(response.data.data);
      });
    } else {
      axiosInstance.get(`/v1/post?username=${pathUser[2]}`).then((response) => {
        updatePost(response.data.data);
        setDataPost(response.data.data);
      });
    }

    axiosInstance
      .get(`/v1/nft/collection?username=${pathUser[2]}`)
      .then((response) => {
        setDataNft(response.data.data);
      });
    axiosInstance
      .post(`/v1/follow/check/${pathUser[2]}`, null, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setUserFollowed(response.data.data.followed);
      });
  }, []);
  const UserNameCopy =
    pathUser[1] === "profile" ? profile.username : user.username;

  const connectToNFT = async () => {
    const ConnectToInjected = async () => {
      let provider = null;
      if (typeof window.ethereum !== "undefined") {
        provider = window.ethereum;
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x5" }],
          });
          const _accounts = await provider.request({
            method: "eth_requestAccounts",
          });
          console.log("account selected: ", _accounts);
          setAccounts(_accounts[0]);
        } catch (error) {
          throw new Error("User Rejected");
        }
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (window.celo) {
        provider = window.celo;
      } else {
        throw new Error("No Web3 Provider found");
      }
      return provider;
    };

    const init = async () => {
      const provider = await ConnectToInjected();
      const provider1 = await ConnectToInjected();
      console.log("provider is : ", provider);
      const web3 = await new Web3(provider);
      //  console.log(account)

      const contract = new web3.eth.Contract(
        contractABI,
        process.env.REACT_APP_CONTRACT_ADDRESS
      );
      const gas_price = await web3.eth.getGasPrice();
      console.log("gas_price: ", gas_price);
      setCurrent_gas_price(gas_price);
      setWeb3(web3);
      setContract(contract);
    };
    await init();
    window.ethereum.on("accountsChanged", (accounts) => {
      console.log(accounts);
      setAccounts(accounts);
    });

    if (!accounts) {
      toast.error("We didn't find metamask on your browser please try again ", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      return;
    }

    axiosInstance
      .get("/v1/users/profile", {
        // prettier-ignore
        headers: {
      "Authorization": "bearer " + localStorage.getItem("access_token"),
    },
      })
      .then((response) => {
        axiosInstance
          .post(
            "/v1/nft/store",
            {
              user_id: response.data.data.id,
              type: "avatar",
              address: accounts,
              token: 1,
            },
            {
              // prettier-ignore
              headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          "Content-Type": "application/json"
        },
            }
          )
          .then((response) => {
            convert_to_nft(response.data.data.json_path);
          })
          .catch(() => {
            toast.error("error code 40-629", {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            });
          });
      });
  };

  const handleFollow = (e) => {
    if (e.target.classList.contains("follow")) {
      axiosInstance
        .post(`/v1/follow/${user.username}`, null, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response);
          setUserFollowed(true);
          setListFlws(response.data.data.followers);
          setListFlwing(response.data.data.following);
          toast.success(`Followed`, {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
          });
          // const userFlw = JSON.parse(localStorage.getItem("username"));
          // // userFlw.push(response.data.data);
          // localStorage.setItem("username", JSON.stringify());
        })
        .catch((error) => {
          if (error.response.status === 500) {
            toast.error(`user is already followed`, {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            });
          }
        });
    } else {
      axiosInstance
        .delete(`/v1/follow/${user.username}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          setUserFollowed(false);
          setListFlws(response.data.data.followers);
          setListFlwing(response.data.data.following);
          toast.success(`unfollow`, {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
          });
          // const userFlw = JSON.parse(localStorage.getItem("username"));
          // // userFlw.push(response.data.data);
          // localStorage.setItem("username", JSON.stringify());
        })
        .catch((error) => {
          // if (error.response.status === 500) {
          //   toast.error(`user is already followed`, {
          //     position: toast.POSITION.TOP_RIGHT,
          //     theme: "colored",
          //   });
          // }
        });
    }
  };

  function convert_to_nft(nft_json_address) {
    console.log("gas price: ", current_gas_price);
    console.log(" current_gas_amount: ", current_gas_amount);
    const gas = 183434 + 18343;
    const tx = contract.methods
      .convert_profile_to_nft(accounts, nft_json_address)
      .send({
        from: accounts,
      })
      .on("receipt", receipt_transaction)
      .on("transactionHash", transaction_hash_generates)
      .on("confirmation", transaction_confirmation);
  }
  function receipt_transaction(receipt) {
    console.log("receipt_transaction", receipt);
  }
  function transaction_hash_generates(hash) {
    console.log("transactionHash", hash);
    toast.success(`your transaction Hash is ${hash}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
    document.getElementById(
      "nft_tx"
    ).href = `https://goerli.etherscan.io/tx/${hash}`;

    document.getElementById("nft_tx").style.display = "block";
  }
  function transaction_confirmation(confirmationNumber, receipt) {
    console.log("confirmation-confirmationNumber", confirmationNumber);
    console.log("confirmation-receipt", receipt);
  }

  let instagram;
  let twitter;
  let discord;
  let facebook;

  if (user.social_link == null && user.social_link == undefined) {
    console.log("");
  } else {
    instagram =
      user.social_link.instagram === "" ? (
        ""
      ) : (
        <li>
          <a
            href={`https://www.instagram.com/${user.social_link.instagram}`}
            target="_blank"
          >
            <i className="fab  fa-instagram"></i>
          </a>
        </li>
      );
    twitter =
      user.social_link.twitter === "" ? (
        ""
      ) : (
        <li>
          <a
            href={`https://twitter.com/${user.social_link.twitter}`}
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      );
    facebook =
      user.social_link.facebook === "" ? (
        ""
      ) : (
        <li>
          <a
            href={`https://www.facebook.com/${user.social_link.facebook}`}
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      );
    discord =
      user.social_link.discord === "" ? (
        ""
      ) : (
        <li>
          <a href={user.social_link.discord} target="_blank">
            <i className="fab fa-discord"></i>
          </a>
        </li>
      );
  }

  let instagramProfile;
  let twitterProfile;
  let discordProfile;
  let facebookProfile;

  if (profile.social_link == null && profile.social_link == undefined) {
    console.log("");
  } else {
    instagramProfile =
      profile.social_link.instagram === "" ? (
        ""
      ) : (
        <li>
          <a href={profile.social_link.instagram} target="_blank">
            <i className="fab  fa-instagram"></i>
          </a>
        </li>
      );
    twitterProfile =
      profile.social_link.twitter === "" ? (
        ""
      ) : (
        <li>
          <a href={profile.social_link.twitter} target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      );
    facebookProfile =
      profile.social_link.facebook === "" ? (
        ""
      ) : (
        <li>
          <a href={profile.social_link.facebook} target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      );
    discordProfile =
      profile.social_link.discord === "" ? (
        ""
      ) : (
        <li>
          <a href={profile.social_link.discord} target="_blank">
            <i className="fab fa-discord"></i>
          </a>
        </li>
      );
  }

  return (
    <div className="authors-2">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Profile</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section authors">
        <div className="themesflat-container">
          <div className="flat-tabs tab-authors">
            {user ? (
              <div>
                <div
                  className="author-profile flex justify-content-start mx-auto"
                  style={{
                    background: `url(${
                      pathUser[1] === "profile" ? profile.cover : user.cover
                    })`,
                  }}
                >
                  <div className="feature-profile justify-content-center ml-md-5">
                    <img
                      src={
                        pathUser[1] === "profile" ? profile.avatar : user.avatar
                      }
                      className="avatar"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <div className="infor-profile mt-5 pt-5">
                    {/* <span>Author Profile</span> */}
                    <div className="d-flex flex-column align-items-md-start justify-content-between mt-5 pt-4 mr-md-5">
                      <div>
                        <div className="d-flex align-items-center">
                          <h2 className="title">
                            {pathUser[1] === "profile"
                              ? profile.username
                              : user.username}
                          </h2>
                          <span className="ml-3">
                            <i class="fas fa-badge-check"></i>
                          </span>
                        </div>
                        <span className="user__full__name">
                          {pathUser[1] === "profile"
                            ? profile.first_name
                            : user.first_name}{" "}
                          {pathUser[1] === "profile"
                            ? profile.last_name
                            : user.last_name}
                        </span>
                        <p className="content mt-2">
                          {pathUser[1] === "profile" ? profile.bio : user.bio}
                        </p>
                      </div>
                      <div className="d-flex mt-5 align-self-center align-self-md-auto">
                        <Link
                          to={`/followers/${
                            pathUser[1] === "profile"
                              ? profile.username
                              : user.username
                          }`}
                          className="d-flex flex-column justify-content-center align-items-center mr-4"
                        >
                          <p>
                            {pathUser[1] === "profile" ? listFlws : listFlws}
                          </p>
                          <p>Followers</p>
                        </Link>
                        <Link
                          to={`/following/${
                            pathUser[1] === "profile"
                              ? profile.username
                              : user.username
                          }`}
                          className="d-flex flex-column justify-content-center align-items-center"
                        >
                          <p>
                            {" "}
                            {pathUser[1] === "profile"
                              ? listFlwing
                              : listFlwing}
                          </p>
                          <p>Following</p>
                        </Link>
                      </div>
                    </div>
                    {/* <form> */}
                    {/* <input
                      type="text"
                      className="inputcopy"
                      value={`${baseURL}/users/${UserNameCopy}`}
                      readOnly
                    /> */}
                    {/* <button
                      type="button"
                      className="btn-copycode"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${baseURL}/users/${UserNameCopy}`
                        );
                        toast.success("Copied to clipboard", {
                          position: toast.POSITION.TOP_RIGHT,
                          theme: "colored",
                        });
                      }}
                    >
                      <i className="icon-fl-file-1"></i>
                    </button> */}

                    {/* </form> */}
                    <div className="mt-4 d-flex flex-column flex-md-row text-center px-sm-5 mx-sm-5 px-md-0 mx-md-0 align-items-md-baseline">
                      <h5
                        className="sc-button mt-3 mr-md-3"
                        onClick={() => {
                          connectToNFT();
                        }}
                      >
                        Connect to NFT
                      </h5>
                      <a
                        href="https://testnets.opensea.io/collection/adoretestnft"
                        target="_blank"
                        className="sc-button mt-3 h5"
                      >
                        Avatars NFTs on Opensea
                      </a>

                      <a
                        className="sc-button  chat mt-3 "
                        id="nft_tx"
                        style={{ display: "none" }}
                      >
                        <h5>view the nft transaction</h5>
                      </a>
                    </div>
                  </div>
                  <div className="widget-social style-3 d-flex flex-column justify-content-around pt-4 mt-5 mt-md-0  px-sm-5 mx-sm-5 px-md-0 mx-md-0">
                    <ul className="justify-content-around mb-5">
                      {pathUser[1] === "profile" ? instagramProfile : instagram}
                      {pathUser[1] === "profile" ? twitterProfile : twitter}
                      {pathUser[1] === "profile" ? facebookProfile : facebook}
                      {/* {pathUser[1] === "profile" ? discordProfile : discord} */}
                    </ul>
                    <div className="btn-profile d-flex flex-column text-center">
                      {pathUser[1] !== "profile" &&
                        pathUser[2] !== profile.username && (
                          <Link
                            to="#"
                            onClick={handleFollow}
                            className={`sc-button text-center style-1 ${
                              userFollowed ? "followed" : "follow"
                            }`}
                          >
                            {userFollowed ? "Following" : "Follow"}
                          </Link>
                        )}

                      {pathUser[1] === "profile" ? (
                        <a
                          href={`https://chat.adoreh.com/dashboard?token=${localStorage.getItem(
                            "access_token"
                          )}`}
                          target="_blank"
                          className="sc-button text-center style-1 chat mt-3"
                        >
                          Chat
                        </a>
                      ) : (
                        <a
                          href={`https://chat.adoreh.com/dashboard?token=${localStorage.getItem(
                            "access_token"
                          )}&username=${user.username}`}
                          target="_blank"
                          className="sc-button text-center style-1 chat mt-3"
                        >
                          Chat
                        </a>
                      )}
                      <a
                        href="https://shop.adoreh.hojres.com/"
                        target="_blank"
                        className="sc-button style-1 text-center report mt-3"
                      >
                        Shop
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/edit-profile"
                className="sc-button style-1 report mt-3"
              >
                CREATE PROFILE
              </Link>
            )}
            <Tabs>
              <TabList>
                {menuTab.map((item, index) => (
                  <Tab key={index}>{item.name}</Tab>
                ))}
              </TabList>

              <div className="content-tab">
                <div className="content-inner">
                  <div className="row">
                    <TabPanel>
                      {dataPostOther.length === 0 ? (
                        <div className="wrapper-alert-nothing">
                          <p>Nothing To Show</p>
                        </div>
                      ) : (
                        dataPostOther.slice(0, visible).map((data, index) => (
                          <div
                            key={index}
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                          >
                            <div className="sc-card-product explode ">
                              <div className="card-media">
                                <Link to={`/post-details/${data.post_id}`}>
                                  <img src={data.image_path} />
                                </Link>
                                {/* <div className="button-place-bid ">
                                    <button
                                      onClick={() => setModalShow(true)}
                                      className="sc-button style-place-bid style bag fl-button pri-3"
                                    >
                                      <span>Place Bid</span>
                                    </button>
                                  </div> */}
                                {/* <Link
                                    to="/login"
                                    className="wishlist-button heart"
                                  >
                                    <span className="number-like">
                                      {" "}
                                      {data.wishlist}
                                    </span>
                                  </Link> */}
                              </div>
                              <div className="card-title mg-bt-16">
                                <h5>
                                  <Link to={`/post-details/${data.post_id}`}>
                                    {data.title}
                                  </Link>
                                </h5>
                              </div>
                              {/* <div className="meta-info">
                                      <div className="author">
                                        <div className="avatar">
                                          <img src={data.imgAuthor} />
                                        </div>
                                        <div className="info">
                                          <span>Creator</span>
                                          <h6>
                                            {" "}
                                            <Link to="/authors-02">
                                              {data.nameAuthor}
                                            </Link>{" "}
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="tags">{data.tags}</div>
                                    </div>
                                    <div className="card-bottom style-explode">
                                      <div className="price">
                                        <span>Current Bid</span>
                                        <div className="price-details">
                                          <h5>{data.price}</h5>
                                          <span>= {data.priceChange}</span>
                                        </div>
                                      </div>
                                      <Link
                                        to="/activity"
                                        className="view-history reload"
                                      >
                                        View History
                                      </Link>
                                    </div> */}
                            </div>
                          </div>
                        ))
                      )}

                      {/* {visible < item.dataContent.length && (
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
                      )} */}
                    </TabPanel>
                    <TabPanel>
                      {dataNft.length === 0 ? (
                        <div className="wrapper-alert-nothing">
                          <p>Nothing To Show</p>
                        </div>
                      ) : (
                        dataNft.slice(0, visible).map((data, index) => (
                          <div
                            key={index}
                            className="col-xl-3 col-lg-4 col-md-6 col-12"
                          >
                            <div className="sc-card-product explode ">
                              <div className="card-media">
                                <Link
                                  to={`/posts/${data.title}/${
                                    data.post_id ? data.post_id : 1
                                  }`}
                                >
                                  <img src={data.avatar} />
                                </Link>
                                {/* <div className="button-place-bid ">
                                  <button
                                    onClick={() => setModalShow(true)}
                                    className="sc-button style-place-bid style bag fl-button pri-3"
                                  >
                                    <span>Place Bid</span>
                                  </button>
                                </div> */}
                                {/* <Link
                                  to="/login"
                                  className="wishlist-button heart"
                                >
                                  <span className="number-like">
                                    {" "}
                                    {data.wishlist}
                                  </span>
                                </Link> */}
                              </div>
                              <div className="card-title mg-bt-16">
                                <h5>
                                  <a
                                    href={`https://social.adoreh.hojres.com/posts/${
                                      data.title
                                    }/${data.post_id ? data.post_id : 1}`}
                                  >
                                    {data.title}
                                  </a>
                                </h5>
                              </div>
                              {/* <div className="meta-info">
                                    <div className="author">
                                      <div className="avatar">
                                        <img src={data.imgAuthor} />
                                      </div>
                                      <div className="info">
                                        <span>Creator</span>
                                        <h6>
                                          {" "}
                                          <Link to="/authors-02">
                                            {data.nameAuthor}
                                          </Link>{" "}
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="tags">{data.tags}</div>
                                  </div>
                                  <div className="card-bottom style-explode">
                                    <div className="price">
                                      <span>Current Bid</span>
                                      <div className="price-details">
                                        <h5>{data.price}</h5>
                                        <span>= {data.priceChange}</span>
                                      </div>
                                    </div>
                                    <Link
                                      to="/activity"
                                      className="view-history reload"
                                    >
                                      View History
                                    </Link>
                                  </div> */}
                            </div>
                          </div>
                        ))
                      )}

                      {/* {visible < item.dataContent.length && (
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
                      )} */}
                    </TabPanel>
                    {/* {panelTab.map((item, index) => (

                    ))} */}
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
      <Footer />
    </div>
  );
};

export default OtherAuthors;
