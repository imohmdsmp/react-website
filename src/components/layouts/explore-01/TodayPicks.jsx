import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardModal from "../CardModal";
import { Dropdown } from "react-bootstrap";

const TodayPicks = (props) => {
  const data = props.data;

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <section className="tf-section sc-explore-1">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-box explore-1 flex mg-bt-40">
                <div className="seclect-box style-1">
                  <div id="item_category" className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        All categories
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ margin: 0 }}>
                        <Dropdown.Item href="#">Art</Dropdown.Item>
                        <Dropdown.Item href="#">Music</Dropdown.Item>
                        <Dropdown.Item href="#">Domain Names</Dropdown.Item>
                        <Dropdown.Item href="#">Virtual World</Dropdown.Item>
                        <Dropdown.Item href="#">Trading Cards</Dropdown.Item>
                        <Dropdown.Item href="#">Sports</Dropdown.Item>
                        <Dropdown.Item href="#">Utility</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div id="buy" className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Buy Now
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ margin: 0 }}>
                        <Dropdown.Item href="#">On Auction</Dropdown.Item>
                        <Dropdown.Item href="#">Has Offers</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div id="all-items" className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        All Items
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ margin: 0 }}>
                        <Dropdown.Item href="#">Single Items</Dropdown.Item>
                        <Dropdown.Item href="#">Bundles</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="seclect-box style-2 box-right">
                  <div id="artworks" className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        All Artworks
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ margin: 0 }}>
                        <Dropdown.Item href="#">Abstraction</Dropdown.Item>
                        <Dropdown.Item href="#">Skecthify</Dropdown.Item>
                        <Dropdown.Item href="#">Patternlicious</Dropdown.Item>
                        <Dropdown.Item href="#">Virtuland</Dropdown.Item>
                        <Dropdown.Item href="#">Papercut</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div id="sort-by" className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Sort by
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ margin: 0 }}>
                        <Dropdown.Item href="#">Top rate</Dropdown.Item>
                        <Dropdown.Item href="#">Mid rate</Dropdown.Item>
                        <Dropdown.Item href="#">Low rate</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            {data.slice(0, visible).map((item, index) => (
              <div
                key={index}
                className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div
                  className={`sc-card-product ${
                    item.feature ? "comingsoon" : ""
                  } `}
                >
                  <div className="card-media">
                    <Link to="/item-details-01">
                      <img src={item.img} />
                    </Link>
                    <Link to="/login" className="wishlist-button heart">
                      <span className="number-like">{item.wishlist}</span>
                    </Link>
                    <div className="coming-soon">{item.feature}</div>
                  </div>
                  <div className="card-title">
                    <h5 className="style2">
                      <Link to="/item-details-01">"{item.title}"</Link>
                    </h5>
                    <div className="tags">{item.tags}</div>
                  </div>
                  <div className="meta-info">
                    <div className="author">
                      <div className="avatar">
                        <img src={item.imgAuthor} />
                      </div>
                      <div className="info">
                        <span>Owned By</span>
                        <h6>
                          {" "}
                          <Link to="/authors-02">{item.nameAuthor}</Link>{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="price">
                      <span>Current Bid</span>
                      <h5> {item.price}</h5>
                    </div>
                  </div>
                  <div className="card-bottom">
                    <button
                      onClick={() => setModalShow(true)}
                      className="sc-button style bag fl-button pri-3 no-bg"
                    >
                      <span>Place Bid</span>
                    </button>
                    <Link to="/activity" className="view-history reload">
                      View History
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {visible < data.length && (
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
            )}
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

TodayPicks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TodayPicks;
