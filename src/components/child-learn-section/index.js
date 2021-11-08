import React from "react";
import './styles.css'

export default function ChildLearn(){
    return (
<>
<div className="container">
        <div className="row text-center  mt-5">
          <h3>Your Child will learn</h3>
        </div>
              <div className="d-flex justify-content-between mt-5">
                  <div className="d-flex flex-column align-items-center">
                          <img className="images" src="./images/think.png" alt="" />
                      <span >Logic</span>
                  </div>

                  <div className="d-flex flex-column align-items-center">
                      <img className="images" src="./images/structure.png" alt="" />
                      <span className="text-center">Structure</span>
                  </div>

                <div className="d-flex flex-column align-items-center">
                    <img className="images" src="./images/brainstorming.png" alt="" />
                    <span className="">Creative Thinking</span>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <img className="images" src="./images/process.png" alt="" />
                    <span>Sequencing</span>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <img className="images" src="./images/algorithm.png" alt="" />
                  <span> Algorithm Thinking </span>  
                </div>

            </div>
    </div>

</>
    )
}