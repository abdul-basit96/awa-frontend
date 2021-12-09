import React from "react";
import "./style.css";
function LearningQuran() {
  return (
    <section>
      <div className="container">
        <div className="row py-3">
          <div className="col-lg m-auto text-center">
            <h1 style={{ color: "chocolate" }}>
              Start Learning Quran Online in 3 Easy Steps
            </h1>
          </div>
        </div>
        <div className="row shadow contentbox py-4">
          <div className="col-lg-4 ">
            <div className="d-flex">
              <i class="fas fa-hand-point-up fa-2x mt-3"></i>
              <h4 className="mt-3 ms-3 fw-bold">1- Book A Free Trial Class</h4>
            </div>
            <div>
              <p className="jss3">
                Fill out the form below to Book a Free Trial Class with our{" "}
                <a
                  href="https://www.quranhost.com/male-quran-teachers/ "
                  className="link"
                >
                  Online Quran Tutors.
                </a>{" "}
                We will get back to you soon on your WhatsApp to schedule your
                trial class.
              </p>
            </div>
          </div>
          <div className="col-lg-4 line1">
            <div className="d-flex">
              <i class="fas fa-calendar-alt fa-2x mt-3"></i>
              <h4 className="mt-3 ms-3 fw-bold">2- Take Your Free Lesson</h4>
            </div>
            <div>
              <p className="jss3">
                Take your{" "}
                <a
                  href="https://www.quranhost.com/get-a-free-trial/"
                  className="link me-1"
                >
                  Free Quran lesson
                </a>
                with the best Quran teachers at your scheduled time. You can
                take 2 free trials without asking for any payment or credit card
                details.
              </p>
            </div>
          </div>
          <div className="col-lg-4 line1">
            <div className="d-flex">
              <i class="fas fa-laptop-house  fa-2x mt-3"></i>{" "}
              <h4 className="mt-3 ms-3 fw-bold">1- Book A Free Trial Class</h4>
            </div>
            <div>
              <p className="jss3">
                After the Free trials, choose a Monthly Plan and get registered
                for the full course with the best Online Quran tutors. Book your
                Free Quran lesson now.
              </p>
              <div className="text-center">
                <button className="btnn2">Book Your Free Trials</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningQuran;
