import React from "react";
import AOSInit from './AOSInit'; 
import "./js/scripts.js";
import "./js/vanilla-tilt.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./css/style.css"
import 'remixicon/fonts/remixicon.css';
function Mainpage() {
    function themeToggle() {
        let element = document.querySelector(".app");
        element.classList.toggle("dark-theme");
      }
      
    return (

     <div className="app">
  <AOSInit />
    {/*<!-- Main Wrapper -->*/}
    <div id="main-wrapper" className="front">
      {/* <!-- Header --> */}
      <div className="header landing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* <!-- Navbar --> */}
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <a href={() => false} className="main-logo"> <span>SCRAP</span>HUB </a>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto">
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#explore">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#collection">Rates</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#categories">Categories</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#create">Create</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#trending">Trending</a>
                      </li>
                    </ul>
                  </div>
                  <div className="signin-btn d-flex align-items-center">
                  <div className="dark-light-toggle theme-switch" onClick={themeToggle}>
                    <span className="dark"><i className="ri-moon-line"></i></span>
                    <span className="light"><i className="ri-sun-line"></i></span>
                     </div>

                    <a href="/"> <button className="btn btn-primary nav-btn" >
                      Buy Recyclables
                    </button></a>
                  </div>
                </nav>
              </div>
              {/* <!-- End Navbar --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header --> */}

      {/* <!-- Home Section --> */}

      <div className="intro section-padding" id="home">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="intro-content my-5" data-aos="fade-right">
                <h1 className="mb-3">
                  A Digital Platform <br />
                  F-O-R <span> Scrap</span> Sales And Purchase
                </h1>
                <p>on the world's best &amp; Ultimate Scrap marketplace</p>
                <div className="intro-btn mt-5">
                  <button className="btn btn-primary home-btn home-btn1" href="#">
                    Explore<i className="bi bi-arrow-right"></i>
                  </button>
                  <button
                    className="btn btn-outline-primary home-btn home-btn home-btn2"
                    href=""
                  >
                    Create
                  </button>
                </div>
                <a className="more c-pointer d-inline-flex" href={() => false}>
                  <span><i className="bi bi-play-fill"></i></span>
                  Learn more about Scrap Market</a
                >
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="intro-slider">
                <div className="slider-item">
                  <img
                    src="https://i.postimg.cc/Bb3t6kxm/Sustainable-Development.jpg"
                    alt=""
                    className="img-fluid"
                    data-aos="fade-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Home Section --> */}

      {/* <!-- Explore Section --> */}
      <div
        className="notable-drops sec-section section-padding bg-light triangle-top-light triangle-bottom-light"
        id="explore"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="section-title text-center d-flex justify-content-between mb-3"
              >
                <h2 className="sec-head" data-aos="fade-up">How it works</h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-right">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/NG98w0Tf/pack-1.png"
                  alt=""
                />
                <div className="card-body">
                  <div className="notable-drops-content-img">
                    <h4 className="card-title">Schedule a pickup</h4>
                    <p>Schedule a pickup with us by selecting nearest yard.</p>
                    <a href="#explore"
                      >Explore<i className="bi bi-arrow-right-short sec-arrow"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/85tZnkFg/donation.jpg"
                  alt=""
                />
                <div className="card-body">
                  <div className="notable-drops-content-img"></div>
                  <h4 className="card-title">Pickup at your address</h4>
                  <p>Enjoy hassle-free scrap pickup at your doorstep with our convenient service.</p>
                  <a href="#explore"
                    >Explore<i className="bi bi-arrow-right-short sec-arrow"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/CKL0Z5pW/payments-the-right-way-1184x666.png"
                  alt=""
                />
                <div className="card-body">
                  <div className="notable-drops-content-img"></div>
                  <h4 className="card-title">Receive payment</h4>
                  <p>Earn money while contributing towards a cleaner environment by receiving payment for scrap.</p>
                  <a href="#explore"
                    >Explore<i className="bi bi-arrow-right-short sec-arrow"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/sXQkk0W2/Recycling.jpg"
                  alt=""
                />
                <div className="card-body">
                  <div className="notable-drops-content-img"></div>
                  <h4 className="card-title">Buy Recycled Product</h4>
                  <p>Support the environment by purchasing recycled products available on ScrapHub.</p>
                  <a href="#explore"
                    >Explore<i className="bi bi-arrow-right-short sec-arrow"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Explore Section --> */}

      {/* <!-- Collections --> */}

      <div className="top-collection section-padding" id="collection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center" data-aos="fade-up">
                <h2 className="th-head">Top Recyclables over last 7 days</h2>
                <p>Here are a few reasons why you should choose SCRAPHUB</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center" data-aos="fade-right">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center th-cards">
                  <span className="serial"
                    >1
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/0jtc0GF8/1602-m00-i104-n034-P-c25-156063812-Foil-pack-vector-Foil-food-snack-pack-or-foil-bag-Foil-packagin.jpg"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">M.L.P</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/2.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />Rs. 0.00/KG
                    </p>
                  </div>
                  <h5 className="text-success">
                    +
                    {/*<!-- -->*/}0.0
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >2
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/J7vL8bGw/Mobile-Png.jpg"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">Andriod Mobile</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/4.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />Rs. 30.00/Piece
                    </p>
                  </div>
                  <h5 className="text-success">
                    +
                    {/* <!-- -->164.25 */}10
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >3
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/DyvYt0cV/milk-packets-3.jpg"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">MILK PACKET</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/6.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />Rs. 0.00/KG
                    </p>
                  </div>
                  <h5 className="text-danger">
                    -
                    {/* <!-- -->134.25 */}0.0
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >4
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/d3b3Zp6r/a6883944-0d00-4843-a-3g-XMM.jpg"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">ALUMINIUM</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/8.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />Rs.150.00/KG
                    </p>
                  </div>
                  <h5 className="text-success">
                    +
                    {/* <!-- -->124.25 */}7
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >5
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://scrapbuk.com/scrapbuk_admin/images/products/Webp.net-compress-image_(2)_0.jpg"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">E-WASTE</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/10.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />Rs. 20.00/KG
                    </p>
                  </div>
                  <h5 className="text-danger">
                    -
                    {/* <!-- -->24.25 */}2
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >6
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/fRPszpzv/wire.png"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">COPPER</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/12.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />Rs. 420.00/KG
                    </p>
                  </div>
                  <h5 className="text-success">
                    +
                    {/* <!-- -->94.25 */}94.25
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >7
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/W1LmBbrm/beam.png"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">STEEL</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/1.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />Rs. 45.00/KG
                    </p>
                  </div>
                  <h5 className="text-danger">
                    -
                    {/* <!-- -->44.25 */}4
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >8
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/KYy23LTK/air-conditioner.png"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">AC (2 TON)</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/3.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />RS 4000/PIECE
                    </p>
                  </div>
                  <h5 className="text-success">
                    +
                    {/* <!-- -->94.25 */}4
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >9
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/23pH9drh/water-heater.png"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">GEYSER</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/5.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />RS 20/KG
                    </p>
                  </div>
                  <h5 className="text-danger">
                    -
                    {/* <!-- -->74.25 */}
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >10
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/8zzyKCVy/ventilation.png"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">PLASTIC COOLER</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/10.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />RS 15/KG
                    </p>
                  </div>
                  <h5 className="text-success">
                    +
                    {/* <!-- -->64.25 */}1
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >11
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/W3NtrxZJ/printer.png"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">PRINTER</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/7.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />RS 15/KG
                    </p>
                  </div>
                  <h5 className="text-success">
                    +
                    {/* <!-- -->98.25 */}0.23
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <a className="top-collection-content d-block" href="#collection">
                <div className="d-flex align-items-center">
                  <span className="serial"
                    >12
                    {/* <!-- -->. */}
                  </span>
                  <div className="flex-shrink-0">
                    <span className="top-img"
                      ><img
                        className="img-fluid"
                        src="https://i.postimg.cc/HxrnBXSp/car-s-Iu-Uat-KN.png"
                        alt=""
                        width="70"
                    /></span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="th-cahead">CAR</h5>
                    <p className="text-muted">
                      <img
                        src="images/img/6.jpg"
                        alt=""
                        width="10"
                        className="me-2"
                      />RS 20000/PIECE
                    </p>
                  </div>
                  <h5 className="text-danger">
                    -
                    {/* <!-- -->104.25 */}200
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Collections --> */}

      {/* <!-- Trending --> */}

      <div
        className="trending-category section-padding bg-light triangle-top-light triangle-bottom-light"
        id="trending"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="section-title text-center d-flex justify-content-between mb-3"
              >
                <h2 className="sec-head" data-aos="fade-up">Trending Items</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center" data-aos="fade-left">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card items" data-tilt>
                <div className="card-body">
                  <div className="items-img position-relative">
                    <img
                      src="images/img/5.jpg"
                      className="img-fluid rounded mb-3"
                      alt=""
                    />
                    <a href="#categories"
                      ><img
                        src="images/img/ava/1.jpg"
                        className="creator"
                        width="50"
                        alt=""
                    /></a>
                  </div>
                  <a href={() => false}>
                    <h4 className="card-title">Baby BA</h4>
                  </a>
                  <p></p>
                  <div className="d-flex justify-content-between">
                    <div className="text-start">
                      <p className="mb-2">Auction</p>
                      <h5 className="text-muted">7h 2m 50s</h5>
                    </div>
                    <div className="text-end">
                      <p className="mb-2">
                        Bid :<strong className="text-primary">0.75 RS</strong>
                      </p>
                      <h5 className="text-muted">0.75 RS</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-primary" href={() => false}>Place a Bid</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card items" data-tilt>
                <div className="card-body">
                  <div className="items-img position-relative">
                    <img
                      src="images/img/8.jpg"
                      className="img-fluid rounded mb-3"
                      alt=""
                    />
                    <a href="#categories"
                      ><img
                        src="images/img/ava/2.jpg"
                        className="creator"
                        width="50"
                        alt=""
                    /></a>
                  </div>
                  <a href={() => false}>
                    <h4 className="card-title">Gentle BA</h4>
                  </a>
                  <p></p>
                  <div className="d-flex justify-content-between">
                    <div className="text-start">
                      <p className="mb-2">Auction</p>
                      <h5 className="text-muted">9h 1m 30s</h5>
                    </div>
                    <div className="text-end">
                      <p className="mb-2">
                        Bid :<strong className="text-primary">0.65 RS</strong>
                      </p>
                      <h5 className="text-muted">0.65 RS</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-primary" href={() => false}>Place a Bid</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card items" data-tilt>
                <div className="card-body">
                  <div className="items-img position-relative">
                    <img
                      src="images/img/12.jpg"
                      className="img-fluid rounded mb-3"
                      alt=""
                    />
                    <a href="#categories"
                      ><img
                        src="images/img/ava/3.jpg"
                        className="creator"
                        width="50"
                        alt=""
                    /></a>
                  </div>
                  <a href={() => false}>
                    <h4 className="card-title">Cook BA</h4>
                  </a>
                  <p></p>
                  <div className="d-flex justify-content-between">
                    <div className="text-start">
                      <p className="mb-2">Auction</p>
                      <h5 className="text-muted">2h 1m 50s</h5>
                    </div>
                    <div className="text-end">
                      <p className="mb-2">
                        Bid :<strong className="text-primary">0.95 RS</strong>
                      </p>
                      <h5 className="text-muted">0.95 RS</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-primary" href={() => false}>Place a Bid</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card items" data-tilt>
                <div className="card-body">
                  <div className="items-img position-relative">
                    <img
                      src="images/img/6.jpg"
                      className="img-fluid rounded mb-3"
                      alt=""
                    />
                    <a href="#categories"
                      ><img
                        src="images/img/ava/4.jpg"
                        className="creator"
                        width="50"
                        alt=""
                    /></a>
                  </div>
                  <a href={() => false}>
                    <h4 className="card-title">Royal BA</h4>
                  </a>
                  <p></p>
                  <div className="d-flex justify-content-between">
                    <div className="text-start">
                      <p className="mb-2">Auction</p>
                      <h5 className="text-muted">7h 1m 10s</h5>
                    </div>
                    <div className="text-end">
                      <p className="mb-2">
                        Bid :<strong className="text-primary">0.35 RS</strong>
                      </p>
                      <h5 className="text-muted">0.35 RS</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-primary" href={() => false}>Place a Bid</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <!-- End Trending --> */}

      {/* <!--  Create Section --> */}

      <div className="create-sell section-padding" id="create">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center" data-aos="fade-up">
                <h2 className="th-head">Scrap Collector & Buyer</h2>
                <p>Here are a few reasons why you should choose ScrapHub</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center" data-aos="fade-right">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="create-sell-content">
                <div className="create-sell-content-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div>
                  <h4>ON-DEMAND PICKUP OF SCRAP</h4>
                  <p>
                  Let us know when and where and we’ll be there,
                   offering a wide range of services.
                  </p>
                  <a href="#explore"
                    >Explore<i className="bi bi-arrow-right-short"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="create-sell-content">
                <div className="create-sell-content-icon">
                  <i className="bi bi-x-diamond"></i>
                </div>
                <div>
                  <h4>VERIFY THROUGH WEIGHT</h4>
                  <p>
                  WhRSer it’s metals or newspapers, you can always have our word on being fair.
                  </p>
                  <a href="#explore"
                    >Explore<i className="bi bi-arrow-right-short"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="create-sell-content">
                <div className="create-sell-content-icon">
                  <i className="bi bi-circle-half"></i>
                </div>
                <div>
                  <h4>Safety (Trained & Verified Staff)</h4>
                  <p>
                  Instill in us your trust and we promise that we’ll offer the best of professionals to come and cater to you.
                  </p>
                  <a href="#explore"
                    >Explore<i className="bi bi-arrow-right-short"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="create-sell-content">
                <div className="create-sell-content-icon">
                  <i className="bi bi-circle-half"></i>
                </div>
                <div>
                  <h4>Sustainability Reports</h4>
                  <p>
                  Sustainability reports provide transparent and comprehensive information on an organization's
                   environmental, social, and governance performance.
                  </p>
                  <a href="#explore"
                    >Explore<i className="bi bi-arrow-right-short"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  End Create Section --> */}

      {/* <!-- Categories Section --> */}
      <div className="browse-category section-padding border-top" id="categories">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center" data-aos="fade-up">
                <h2 className="th-head">Browse by category</h2>
                <p>Here are a few reasons why you should choose SCRAPMARKET</p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-right">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/nhx54d6K/pexels-photo-5279399.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4>Ferrous Scrap</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/65T8HFBv/pexels-photo-3794777.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4>Electronic Scrap</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/G2kfnMrP/e-waste-recycling.png"
                  alt=""
                />
                <div className="card-body">
                  <h4>Electronic Scrap</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="https://i.postimg.cc/J08zRdXR/pexels-photo-2967770.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4>Paper Scrap</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="images/img/13.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4>Plastic Scrap</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="images/img/6.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4>Textile Scrap</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="images/img/2.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4>Glass Scrap</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 la-card">
              <div className="card browse-cat">
                <img
                  className="img-fluid card-img-top"
                  src="images/img/10.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4>Rubber Scrap</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--End Categories Section --> */}

      {/* <!-- Footer --> */}
      <div
        data-aos="fade-up"
        className="bottom section-padding triangle-top-dark triangle-bottom-dark"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
              <div className="bottom-logo">
                <p className="main-logof">SCRAPHUB</p>
                <p>
                Connect with sellers, collectors, and buyers on ScrapHub - the platform for sustainable scrap recycling. 
                Join us in reducing CO2 emissions and saving energy and raw materials.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 col-6">
              <div className="bottom-widget">
                <h4 className="widget-title">About us</h4>
                <ul>
                  <li><a href="#explore">Explore</a></li>
                  <li><a href={() => false}>Item</a></li>
                  <li><a href="#collection">Collection</a></li>
                  <li><a href={() => false}>Connect</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Create</h4>
                <ul>
                  <li><a href={() => false}>Settings</a></li>
                  <li><a href={() => false}>Application</a></li>
                  <li><a href={() => false}>Security</a></li>
                  <li><a href={() => false}>Activity</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Market</h4>
                <ul>
                  <li><a href={() => false}>Profile</a></li>
                  <li><a href={() => false}>Created</a></li>
                  <li><a href={() => false}>Collected</a></li>
                  <li><a href={() => false}>Activity</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Collections</h4>
                <ul>
                  <li><a href={() => false}>On Sale</a></li>
                  <li><a href={() => false}>Liked</a></li>
                  <li><a href={() => false}>Following</a></li>
                  <li><a href={() => false}>Followers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright">
                <p>
                  © Copyright 2023 <a href={() => false}>ScrapHub</a>
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <a href={"https://www.facebook.com/profile.php?id=100087452973542"}><i className="bi bi-facebook"></i></a>
                  </li>
                  <li>
                    <a href={() => false}><i className="bi bi-twitter"></i></a>
                  </li>
                  <li>
                    <a href={() => false}><i className="bi bi-linkedin"></i></a>
                  </li>
                  <li>
                    <a href={() => false}><i className="bi bi-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Footer --> */}
    </div>

    { /*--========== SCROLL UP ==========--*/ }
    <a href={() => false} className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
    </a>

    {/* -- Scroll Animation --*/ }
    {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
    

    {/* -- End Main Wrapper*/  }
    {/* <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}
    {/* <script src="js/scripts.js"></script> */}

    {/* <script src="js/vanilla-tilt.js"></script> */}
    </div>

       
    );

}
export default Mainpage;