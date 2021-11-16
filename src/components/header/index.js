import React from "react";
import './style.css'

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg mt-2 mb-2">
        {/* <!-- <div className="container-fluid"> --> */}
        <div className="navbar-brand">
          <a href="/">
            <img
              src="https://arabicwave.com/wp-content/uploads/2021/04/Arabic-Wave-Logo.png"
              className="m-auto img-responsive"
              alt="AWA logo"
            />
          </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link bd" style={{color: "grey"}} href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bd" style={{color: "grey"}} href="#">
                Features
              </a>
            </li>
            <li className="card nav-item shadow-sm pt-1 pb-1 ps-3 pe-3 dropdown bd">
              <a
                style={{ boxShadow: "none", color: "inherit" }}
                className="nav-shadow nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Curriculum+Pricing
              </a>
              <ul
                className="dropdown-menu m-0 p-0 shadow-md"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Tajweed Ul Quran
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hifz Ul Quran
                  </a>
                </li>
                <li className="hv">
                  <a className="dropdown-item" href="#">
                    Learn Arabic
                  </a>
                  <ul>
                    <li className="sd">Spoken Arabic</li>
                    <li className="sd">Arabic Grammer</li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Learn Urdu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Learn Adhan
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <div className="join-text d-flex flex-column align-items-center">
              <button type="button" className="btn1 ms-2 btn-lg">
                <span className="bd">Join class Now</span>
              </button>
              <div>
                <span className="sub-class" style={{ color: "#ff8d1a" }}>
                  Already Booked a class?
                </span>
              </div>
            </div>
            <div className="join-text d-flex flex-column align-items-center trial-btn">
              <button type="button" className="glowbt ms-2 btn-lg bd">
              <i className="far fa-calendar-alt"></i>
                <span>Book a Free Trial</span>
              </button>
            </div>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;