import React from "react";
import './style.css'

export default function SairaVideo(){
    return (
        <>
        <section>
        <div class="bg-img">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-8 d-flex justify-content-center">
                    <div class="video-button d-flex justify-content-center">
                        
                        <a href="https://www.youtube.com/watch?v=cd14BcYq-GQ">
                            <button class="btn1" onclick="toggleModal(true)"> 

                            <i class="play bi bi-play-fill"></i>
                            </button> 
                        </a>
                    </div>
                </div>
                <div class="col-md-4 text-light ms-0">
                    <h2 class="fw-bold"> 
                        Saira's video, Age 9,
                    </h2>
                    <h2 class="fw-bold mt-2">
                        WhiteHat Jr Coder
                    </h2>
                    
                    <div class="mt-5"> Learn how Saira became a Math wizard with WhiteHat Jr coding!</div>

                    <button class="btn0 btn-lg text-light text-align-center">
                    <i class="far fa-calendar-alt ms-3"></i>
                        <span class="fw-bold m-3">Book a FREE Trial</span>
                    </button>
                </div>
            </div>
            </div>
    </section>
        </>
    )
}