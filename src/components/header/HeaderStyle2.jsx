import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import menus from '../../pages/menu';
import DarkMode from './DarkMode';
import logodark from '../../assets/images/logo/Adoreh_P3.png';
import avt from '../../assets/images/avatar/avt-2.jpg';
import coin from '../../assets/images/logo/coin.svg';
import axiosInstance from '../../helper/axios';
import {
  profileStore,
  useSearchStore,
  useSubmenuStore,
} from '../../CreateStore';

const HeaderStyle2 = () => {
  // zustand
  const setStoreMenu = useSubmenuStore((menu) => menu.setSubmenus);
  const HandleSubmenu = (event) => {
    setStoreMenu(event.target.innerText);
  };

  let searchResults = useSearchStore((state) => state.searchItem);
  let setSearchResults = useSearchStore(
    (state) => state.setSearchItem
  );

  // UseRefs
  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  const headerRef = useRef(null);
  const searchBar = useRef();
  const formShowStatus = useRef();

  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const profile = profileStore((state) => state.profile);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector('.js-header');
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add('is-fixed')
      : header.classList.remove('is-fixed');
    scrollTop >= 400
      ? header.classList.add('is-small')
      : header.classList.remove('is-small');
  };

  const menuToggle = () => {
    menuLeft.current.classList.toggle('active');
    btnToggle.current.classList.toggle('active');
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    const itemMenu = document.querySelectorAll(
      '#menu-primary-menu .menu-item'
    );
    setActiveIndex(index);
    itemMenu.forEach((element) => {
      if (element.classList.contains('active')) {
        setActiveIndex(null);
      }
    });
  };

  const [accountWallet, setAccountWallet] = useState(null);
  async function requestAccountMetamask() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccountWallet(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('metamsk not detected');
    }
  }
  const handleLogout = () => {
    axiosInstance
      .post('/v1/users/logout', null, {
        // prettier-ignore
        headers: {
        "Authorization": "bearer " + localStorage.getItem("access_token"),
      },
      })
      .then((response) => {
        window.location.reload();
        localStorage.removeItem('access_token', '');
      });
  };
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    if (event.target.type === 'submit') {
      navigate('/search-result', { replace: true });
    }

    if (event.keyCode == 13) {
      navigate('/search-result', { replace: true });
    }

    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (window.location.href.includes('/search-result')) {
      searchBar.current.classList.add('d-none');
      searchBar.current.classList.remove('active');
    }

    function fetchUrl() {
      if (searchTerm.length >= 2) {
        searchBar.current.classList.add('active');
        axiosInstance
          .get(`/v1/users/search?username=${searchTerm}`)
          .then((response) => {
            const results = response.data.data.filter(
              (el) =>
                el.username.slice(0, 2) === searchTerm.slice(0, 2)
            );
            setSearchResults(results);
          });
      } else {
        // setSearchResults([]);
        document
          .querySelector('.search-bar ul span')
          .classList.add('spinner-search-bar');
      }
      if (searchTerm == '') {
        document
          .querySelector('.search-bar ul span')
          .classList.add('spinner-search-bar');
        searchBar.current.classList.remove('active');
      }
    }
    fetchUrl();
  }, [searchTerm]);

  window.addEventListener('mouseup', function (event) {
    if (
      event.target != searchBar.current &&
      event.target.parentNode != searchBar.current
    ) {
      searchBar.current.classList.remove('active');
    }
  });

  // search display Handle
  const HandleSearchShow = () => {
    if (count) {
      formShowStatus.current.classList.remove('d-none');
      formShowStatus.current.classList.add('search-phone');
      setCount((prevState) => prevState - 1);
    } else {
      formShowStatus.current.classList.add('d-none');
      formShowStatus.current.classList.remove('search-phone');
      setCount((prevState) => prevState + 1);
    }
  };

  // submit Handle
  const HandleSubmit = (event) => {
    navigate('/search-result', { replace: true });
    if (window.location.href.includes('/search-result')) {
      event.preventDefault();
    }
  };

  return (
    <header
      id="header_main"
      className="header_1 header_2 style2 js-header"
      ref={headerRef}
    >
      <div className="container-fluid w-100 py-4">
        <div className="row align-items-center pl-sm-4">
          <div
            className="mobile-button"
            ref={btnToggle}
            onClick={menuToggle}
          >
            <span></span>
          </div>
          <div className="col-auto">
            <Link to="/" rel="home" className="main-logo">
              <img id="logo_header" src={logodark} alt="nft-gaming" />
            </Link>
          </div>
          <div className="col-lg-2 col-sm-4 col-auto px-0 mx-xl-5 mx-3 question-form">
            <div
              className="search-dropdown d-sm-none"
              onClick={HandleSearchShow}
            >
              <button className="sc-button style style-1 p-0">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <form
              onSubmit={HandleSubmit}
              action=""
              className="d-none d-sm-inline-block w-100"
              ref={formShowStatus}
            >
              <input
                type="text"
                placeholder="Type to search..."
                required
                onChange={handleChange}
              />

              <Link to="/search-result">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_334_638"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="18"
                    height="17"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.66699 1.66666H17.6862V17.3322H1.66699V1.66666Z"
                      fill="white"
                      stroke="white"
                    />
                  </mask>
                  <g mask="url(#mask0_334_638)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.67711 2.87312C5.9406 2.87312 2.90072 5.84505 2.90072 9.49903C2.90072 13.153 5.9406 16.1257 9.67711 16.1257C13.4128 16.1257 16.4527 13.153 16.4527 9.49903C16.4527 5.84505 13.4128 2.87312 9.67711 2.87312ZM9.67709 17.3322C5.26039 17.3322 1.66699 13.8182 1.66699 9.49902C1.66699 5.17988 5.26039 1.66666 9.67709 1.66666C14.0938 1.66666 17.6864 5.17988 17.6864 9.49902C17.6864 13.8182 14.0938 17.3322 9.67709 17.3322Z"
                      fill="white"
                    />
                    <path
                      d="M9.67711 2.37312C5.67512 2.37312 2.40072 5.55836 2.40072 9.49903H3.40072C3.40072 6.13174 6.20607 3.37312 9.67711 3.37312V2.37312ZM2.40072 9.49903C2.40072 13.4396 5.67504 16.6257 9.67711 16.6257V15.6257C6.20615 15.6257 3.40072 12.8664 3.40072 9.49903H2.40072ZM9.67711 16.6257C13.6784 16.6257 16.9527 13.4396 16.9527 9.49903H15.9527C15.9527 12.8664 13.1472 15.6257 9.67711 15.6257V16.6257ZM16.9527 9.49903C16.9527 5.5584 13.6783 2.37312 9.67711 2.37312V3.37312C13.1473 3.37312 15.9527 6.1317 15.9527 9.49903H16.9527ZM9.67709 16.8322C5.52595 16.8322 2.16699 13.5316 2.16699 9.49902H1.16699C1.16699 14.1048 4.99484 17.8322 9.67709 17.8322V16.8322ZM2.16699 9.49902C2.16699 5.46656 5.52588 2.16666 9.67709 2.16666V1.16666C4.9949 1.16666 1.16699 4.8932 1.16699 9.49902H2.16699ZM9.67709 2.16666C13.8282 2.16666 17.1864 5.46649 17.1864 9.49902H18.1864C18.1864 4.89327 14.3593 1.16666 9.67709 1.16666V2.16666ZM17.1864 9.49902C17.1864 13.5316 13.8282 16.8322 9.67709 16.8322V17.8322C14.3594 17.8322 18.1864 14.1047 18.1864 9.49902H17.1864Z"
                      fill="white"
                    />
                  </g>
                  <mask
                    id="mask1_334_638"
                    maskUnits="userSpaceOnUse"
                    x="13"
                    y="13"
                    width="6"
                    height="6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.2012 14.2999H18.3333V18.3333H14.2012V14.2999Z"
                      fill="white"
                      stroke="white"
                    />
                  </mask>
                  <g mask="url(#mask1_334_638)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.7166 18.3333C17.5596 18.3333 17.4016 18.2746 17.2807 18.1572L14.3823 15.3308C14.1413 15.0952 14.1405 14.7131 14.3815 14.4774C14.6217 14.2402 15.0123 14.2418 15.2541 14.4758L18.1526 17.303C18.3935 17.5387 18.3944 17.9199 18.1534 18.1556C18.0333 18.2746 17.8746 18.3333 17.7166 18.3333Z"
                      fill="white"
                    />
                    <path
                      d="M17.7166 18.3333C17.5595 18.3333 17.4016 18.2746 17.2807 18.1572L14.3823 15.3308C14.1413 15.0952 14.1405 14.7131 14.3815 14.4774C14.6217 14.2402 15.0123 14.2418 15.2541 14.4758L18.1526 17.303C18.3935 17.5387 18.3944 17.9199 18.1534 18.1556C18.0333 18.2746 17.8746 18.3333 17.7166 18.3333"
                      stroke="white"
                    />
                  </g>
                </svg>
              </Link>
            </form>
            <div className="search-bar" ref={searchBar}>
              <ul>
                <span className="spinner-search-bar"></span>
                {searchResults.map((item, index) => (
                  <>
                    {document
                      .querySelector('.search-bar ul span')
                      .classList.remove('spinner-search-bar')}
                    <li key={index}>
                      <Link to={`/users/${item.username}`}>
                        <div className="avatar-search-bar">
                          <img
                            src={searchTerm === '' ? '' : item.avatar}
                            alt=""
                          />
                        </div>
                        <div className="user-search-bar">
                          {searchTerm === '' ? '' : item.username}
                          <span>
                            {' '}
                            {searchTerm === '' &&
                            item.first_name === undefined
                              ? ''
                              : item.first_name}{' '}
                            {searchTerm === '' &&
                            item.last_name === undefined
                              ? ''
                              : item.last_name}
                          </span>
                        </div>
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <nav className="col-auto main-nav" ref={menuLeft}>
            <ul id="menu-primary-menu" className="menu">
              {menus.map((data, index) => (
                <li
                  key={index}
                  onClick={() => handleOnClick(index)}
                  className={`menu-item ${
                    data.namesub ? 'menu-item-has-children' : ''
                  } ${pathname === data.links ? 'active-1' : ''} `}
                >
                  {data.id === 5 ? (
                    <a href={data.links} target="_blank">
                      {data.name}
                    </a>
                  ) : (
                    <Link to={data.links}>{data.name}</Link>
                  )}

                  {data.namesub && (
                    <ul className="sub-menu">
                      {data.namesub.map((submenu) => (
                        <li
                          onClick={HandleSubmenu}
                          key={submenu.id}
                          className={
                            pathname === submenu.links
                              ? 'menu-item'
                              : 'menu-item'
                          }
                        >
                          <Link to={submenu.links}>
                            {submenu.sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="col pr-sm-5 pr-4 pl-0">
            <div
              className="sc-btn-top mg-r-12 d-flex pr-5 justify-content-end"
              id="site-header"
            >
              <div className="profile-sub">
                <Link
                  to={profile.id ? '/profile' : '/login'}
                  className="sc-button header-slider style style-1 profile fl-button pri-1"
                >
                  <i className="fas fa-user"></i>
                </Link>
                {profile.id && (
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/profile">My Profile</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/edit-profile">Edit Profile</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/create-item">Create Item</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/#" onClick={handleLogout}>
                        log out
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              {profile.id && (
                <div
                  onClick={requestAccountMetamask}
                  className="sc-button header-slider style style-1 wallet fl-button pri-1 mr-4"
                >
                  <span>
                    {accountWallet === null
                      ? 'Wallet Connect'
                      : 'Connected'}
                  </span>
                </div>
              )}
            </div>

            <div className="admin_active" id="header_admin">
              <div className="header_avatar">
                <div className="price">
                  <span>
                    2.45 <strong>ETH</strong>{' '}
                  </span>
                </div>
                <img className="avatar" src={avt} alt="avatar" />
                <div className="avatar_popup mt-20">
                  <div className="d-flex align-items-center copy-text justify-content-between">
                    <span> 13b9ebda035r178... </span>
                    <Link to="/" className="ml-2">
                      <i className="fal fa-copy"></i>
                    </Link>
                  </div>
                  <div className="d-flex align-items-center mt-10">
                    <img className="coin" src={coin} alt="/" />
                    <div className="info ml-10">
                      <p className="text-sm font-book text-gray-400">
                        Balance
                      </p>
                      <p className="w-full text-sm font-bold text-green-500">
                        16.58 ETH
                      </p>
                    </div>
                  </div>
                  <div className="hr"></div>
                  <div className="links mt-20">
                    <Link to="#">
                      <i className="fab fa-accusoft"></i>{' '}
                      <span> My items</span>
                    </Link>
                    <a className="mt-10" href="/edit-profile">
                      <i className="fas fa-pencil-alt"></i>{' '}
                      <span> Edit Profile</span>
                    </a>
                    <a className="mt-10" href="/login" id="logout">
                      <i className="fal fa-sign-out"></i>{' '}
                      <span> Logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkMode />
    </header>
  );
};

export default HeaderStyle2;
