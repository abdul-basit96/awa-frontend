import React from "react";
import './style.css';
import TopHeader from "./topheader";

const Header = () => {
  return (
          
    
    <div >
    <TopHeader />
      <nav className="navbar navbar-expand-lg mt-2 mb-2">
        {/* <!-- <div className="container-fluid"> --> */}
        <div className="navbar-brand ms-4">
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
        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
          <li className="nav-item vl">
              <a className="nav-link nav-link bd" style={{color: "black"}} href="#">
                Home
              </a>
            </li>
            <li className="nav-item d-flex">
              <a className="nav-link bd" style={{color: "black"}} href="#">
                About Us
              </a>
            </li>
            <li className="bd vl">
              <a
                className="nav-shadow nav-link dropdown-toggle"
                style={{color: "black"}}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul
                className="dropdown-menu m-0 p-0 shadow-md "
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
            <li className="nav-item vl">
              <a className="nav-link bd" style={{color: "black"}} href="#">
                FEE & PLANS
              </a>
            </li>
            <li className="nav-item vl">
              <a className="nav-link bd" style={{color: "black"}} href="#">
                BLOGS
              </a>
            </li>
            <li className="nav-item vl">
              <a className="nav-link bd" style={{color: "black"}} href="#">
                TESTIMONIALS
              </a>
            </li>
            <li className="nav-item vl">
              <a className="nav-link bd" style={{color: "black"}} href="#">
                CONTACT
              </a>
            </li>
            <li>
            <i class="fas fa-shopping-cart mt-2 ms-2" style={{fontSize:"1.5em"}}></i>
            </li>
            <li>
              <span class="price mt-3 ms-3" style={{fontSize:"1.5em"}}>$0.00</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
