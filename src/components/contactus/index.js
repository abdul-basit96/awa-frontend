import React from "react";
import "./styles.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="jss10">CONTACT US</h5>
            <div className="contact-box-1 d-flex">
              <div className="">
                <FiPhoneCall
                  size="2rem"
                  style={{ marginRight: 5, marginTop: 7 }}
                />
              </div>
              <div className="ms-4">
                <div>
                  <span className="fw-bold"> Director:</span>{" "}
                  <span className="fw-bold">Dr. Hafiz Muhammad Irfan</span>
                </div>
                <div>
                  <span className="fw-bold">US/Canada:</span>{" "}
                  <span>+1-551-333-1082</span>
                </div>
                <div>
                  <span className="fw-bold">UK:</span>{" "}
                  <span>+44-208-123-8788</span>
                </div>
                <div>
                  <span className="fw-bold">PAK:</span>{" "}
                  <span>+44-208-123-8788</span>
                </div>
              </div>
            </div>
            <div className="contact-box-2 d-flex mt-5 mb-2">
              <div className="">
                <FaWhatsapp
                  size="2rem"
                  style={{ marginRight: 5, marginTop: 7 }}
                />
              </div>
              <div className="ms-4">
                <div>
                  <span className="fw-bold"> Whatsapp:</span>{" "}
                  <span>+15-513-331-082</span>
                </div>
                <div>
                  <span className="fw-bold">Email:</span>{" "}
                  <span>info@quranhost.com</span>
                </div>
                <div>
                  <span className="fw-bold">Skype:</span>{" "}
                  <span>admin.quranhost</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 jss11">
            <h5 className="jss10">SEND US AN EMAIL</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="emailid1" />
              </div>

              <div className="col-md-6">
                <label for="inputState" className="form-label">
                  Country
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <label for="phone" className="form-label">
                  Phone
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-lg-12">
                <label for="message" className="form-label">
                  Your Message
                </label>
                <textarea type="text" className="form-control"></textarea>{" "}
              </div>
              <div className="col-12">
                <button type="submit" className="jss12">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
