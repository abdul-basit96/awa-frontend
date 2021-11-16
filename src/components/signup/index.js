import React, { useState } from "react";
import "./styles.css";

function btnColor(v) {}

function SignUp() {
  const [btnClicked, setBtnCliked] = useState("");

  const highLight = (val = "") => {
    if (val == "class 1") {
      setBtnCliked("cls1");
    } else if (val == "class 2") {
      setBtnCliked("cls2");
    } else if (val == "class 3") {
      setBtnCliked("cls3");
    } else if (val == "class 4") {
      setBtnCliked("cls4");
    } else {
      setBtnCliked("cls5");
    }
  };

  return (
    <>
      <div className=" main-container">
        <div className="row AcTMZ mx-auto justify-content-center">
          <div className="wrapper d-flex col-xl-4 col-md-6 col-lg-5 mt-5 mb-0">
            <div className="form-container">
              <p className="title">Registration Form</p>
              <form className="jss32">
                <div className="input-field form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeNameX"
                    className="form-control form-control-md"
                    placeholder="Name"
                  />
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-md"
                    placeholder="Email"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-md"
                    placeholder="Password"
                  />
                </div>
                <div class="input-group mb-3">
                  <select
                    class="form-select"
                    id="inputGroupSelect03"
                    aria-label="Example select with button addon"
                    placeholder="Select Course"
                  >
                    <option selected>Select Course</option>
                    <option value="1">Tajweed Ul Quran</option>
                    <option value="2">Hifz ul Quran</option>
                    <option value="3">Learn Arabic</option>
                    <option value="3">Learn Urdu</option>
                    <option value="3">Learn Adhan</option>
                  </select>
                </div>
                <div className="form-outline form-white mb-4 d-flex">
                  <span className="fw-bold">Select Gender:</span>
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>

                {/* Grades Field */}
                <span>Select your child's grade/class in school</span>
                <div className="d-flex jss83 align-items-center text-center">
                  <label>
                    <input
                      type="button"
                      className="btn-md grade-btn"
                      style={{
                        backgroundColor:
                          btnClicked == "cls1" ? "#fe8d1b" : "white",
                      }}
                      onClick={() => highLight("class 1")}
                      value="Class 1"
                    />
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn-sm grade-btn"
                      style={{
                        backgroundColor:
                          btnClicked == "cls2" ? "#fe8d1b" : "white",
                      }}
                      onClick={() => highLight("class 2")}
                      value="Class 2-"
                    />
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn-sm grade-btn"
                      style={{
                        backgroundColor:
                          btnClicked == "cls3" ? "#fe8d1b" : "white",
                      }}
                      onClick={() => highLight("class 3")}
                      value="Class 4-"
                    />
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn-sm grade-btn"
                      style={{
                        backgroundColor:
                          btnClicked == "cls4" ? "#fe8d1b" : "white",
                      }}
                      onClick={() => highLight("class 4")}
                      value="Class 7-"
                    />
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn-sm grade-btn"
                      style={{
                        backgroundColor:
                          btnClicked == "cls5" ? "#fe8d1b" : "white",
                      }}
                      onClick={() => highLight("class 5")}
                      value="Class 10-"
                    />
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-lg px-5 mt-2"
                  type="submit"
                >
                  Register
                </button>
                <div className="mt-2 jss50">
                  By registering here, I agree to ArabicWave
                  <span className="text-blue">
                    <a target="_blank" className="text-blue ms-1 me-1">
                      Terms & Conditions
                    </a>
                  </span>
                  and
                  <span>
                    <a target="_blank" className="text-blue ms-1">
                      Privacy Policey
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="wrapper col-md-6 col-lg-5">
            <div className="desc-container">
              <div className="rows d-flex jss58">
                <div>
                  <p className="header fw-bold">Course Details:</p>
                  <div className="jss55">
                    <div className="">
                      <span className="fw-bold">Course Name:</span>
                      <span className="ms-5 jss56">Tajweed ul Quran</span>
                    </div>
                    <div className="">
                      <span className="fw-bold ">Total Classes:</span>
                      <span className="ms-5 jss56">12</span>
                    </div>
                  </div>
                  <div className="jss57">
                    <span>Price: </span>
                    <span>INR 6000/-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
