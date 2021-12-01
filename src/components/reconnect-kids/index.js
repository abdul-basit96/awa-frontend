import React from "react";
import "./styles.css";

function ReconnetKids() {
  return (
    <div className="flex">
      <div className="bgImg">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-left text-light">
            <div>
              <i class="fas fa-quran me-3 fa-5x"></i>
            </div>
            <div className="">
              <h4 className="info-box-content">
                Reconnect your Kids with Quran
              </h4>
              <p>
                Start One Week Free Classes today with the Best Online Quran
                Tutors.
              </p>
            </div>
          </div>
          <div className="btnkid1">
            <button className="btnkids m-3">
              <span className="text-light fw-bold">GET 3 DAY FREE CLASSES</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReconnetKids;
