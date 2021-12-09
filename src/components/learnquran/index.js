import React from "react";
import "./style.css";

const BelowHeader = () => {
  return (
    <section className="main">
      <div className="container py-5">
        <div className="row py-5  justify-content-center">
          <div className="backclr col-lg-7 pt-5 text-center align-items-center">
            <h1>Learn Quran Online</h1>
            <p>Anytime & Anywhere</p>
            <h2>Best Quran Tutors</h2>
            <button className="bt1 py-2 text-center pt-2">
              GET REGISTERED
            </button>
            <button className="bt2 py-2 ms-5 text-center pt-2">
              BOOK FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BelowHeader;
