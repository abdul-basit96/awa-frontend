import React from "react";
import "./style.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-5 border border-bottom-1">
      <div className="container pt-2">
        <img
          src="/images/Arabic-Wave-Logo.png"
          className="rounded float-start"
          alt=""
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav m-auto my-2 my-lg-0">
            <li className="nav-item float-right">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="bt">
          <button type="button" className="btn btn-primary ">
            Book Free Trials
          </button>
          <button type="button" className="btn btn-primary ms-3">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
