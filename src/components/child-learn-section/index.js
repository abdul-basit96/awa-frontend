import React from "react";
import './styles.css'

export default function ChildLearn(){
    return (
<>
<div class="container">
        <div class="row text-center  mt-5">
          <h3>Your Child will learn</h3>
        </div>
              <div class="d-flex justify-content-between mt-5">
                  <div class="d-flex flex-column align-items-center">
                          <img src="./images/think.png" alt="" />
                      <span >Logic</span>
                  </div>

                  <div class="d-flex flex-column align-items-center">
                      <img src="./images/structure.png" alt="" class="" />
                      <span class="text-center">Structure</span>
                  </div>

                <div class="d-flex flex-column align-items-center">
                    <img src="./images/brainstorming.png" alt="" class="" />
                    <span class="">Creative Thinking</span>
                </div>

                <div class="d-flex flex-column align-items-center">
                    <img src="./images/process.png" alt="" />
                    <span>Sequencing</span>
                </div>

                <div class="d-flex flex-column align-items-center">
                    <img src="./images/algorithm.png" alt="" />
                  <span> Algorithm Thinking </span>  
                </div>

            </div>
    </div>

</>
    )
}