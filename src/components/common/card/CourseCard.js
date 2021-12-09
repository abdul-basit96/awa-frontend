import React from "react";
import { Row, Col } from "react-bootstrap";
import CourseSection from "../../courseSection/CourseSection";
import "./styles.css";

const CourseCard = () => {
  return (
    <div className="card card-body mt-3 mb-3">
      <div className="wpb_column vc_column_container vc_col-sm-4">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="info-box-wrapper ">
              <div
                id="wd-604c98c03c992"
                className="cursor-pointer woodmart-info-box text-center box-icon-align-top box-style-shadow color-scheme- woodmart-bg-none box-title-default online-courses noorani-qaida-online-c "
                onClick='window.location.href="https://www.quranhost.com/qaida-noorania-online/"'
              >
                <div className="box-icon-wrapper  box-with-icon box-icon-simple">
                  <div className="info-box-icon">
                    <img
                      style={{ width: 380, height: 150 }}
                      src="https://www.quranhost.com/wp-content/uploads/2019/09/Learn-Quran-Online-with-Tajweed-img06.jpg"
                      className="img-fluid"
                      alt="Noorani Qiada Online"
                      srcset="https://www.quranhost.com/wp-content/uploads/2019/09/Learn-Quran-Online-with-Tajweed-img06.jpg 380w, https://www.quranhost.com/wp-content/uploads/2019/09/Learn-Quran-Online-with-Tajweed-img06-300x118.jpg 300w"
                      //   sizes="(max-width: 380px) 100vw, 380px"
                      data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/09/Learn-Quran-Online-with-Tajweed-img06.jpg"
                      data-srcset="https://www.quranhost.com/wp-content/uploads/2019/09/Learn-Quran-Online-with-Tajweed-img06.jpg 380w, https://www.quranhost.com/wp-content/uploads/2019/09/Learn-Quran-Online-with-Tajweed-img06-300x118.jpg 300w"
                    />
                  </div>
                </div>
                <div className="info-box-content">
                  <h3 className="mt-4 pt-1 fw-bolder fs-4">
                    Noorani Qaida Online
                  </h3>
                  <div className="info-box-inner">
                    <hr />
                    <p
                      className="px-3"
                      style={{ textAlign: "justify", display: "block" }}
                    >
                      <a href="https://www.quranhost.com/qaida-noorania-online">
                        Qaida Noorania
                      </a>{" "}
                      is the basic booklet for all, who wants to learn to read
                      Quran with Tajweed for the first time. We have certified
                      tutors for teaching Qaida Online to kids in a very short
                      time.
                    </p>
                    <p
                      classNameName="check-btn"
                      style={{ display: "block", textAlign: "center" }}
                    >
                      <a
                        className="check-detail-btn text-white fw-bold "
                        href="https://www.quranhost.com/qaida-noorania-online/"
                      >
                        CHECK DETAILS
                      </a>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
