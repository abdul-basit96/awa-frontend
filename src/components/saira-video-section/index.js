import React from "react";
import './style.css'

export default function SairaVideo(){
    return (
        <>
        <div className="background-image">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-8 d-flex justify-content-center">
                    <div className="video-button d-flex justify-content-center">
                        
                        <a href="https://www.youtube.com/watch?v=cd14BcYq-GQ">
                            <button className="btn-play-fill" onclick="toggleModal(true)"> 

                            <i className="btn-play bi bi-play-fill"></i>
                            </button> 
                        </a>
                    </div>
                </div>
                <div className="col-md-4 text-light ms-0">
                    <h2 className="fw-bold"> 
                        Saira's video, Age 9,
                    </h2>
                    <h2 className="fw-bold mt-2">
                        WhiteHat Jr Coder
                    </h2>
                    
                    <div className="mt-5"> Learn how Saira became a Math wizard with WhiteHat Jr coding!</div>

                    <button className="btn-free-book btn-lg text-light text-align-center">
                    <i className="far fa-calendar-alt ms-3"></i>
                        <span className="fw-bold m-3">Book a FREE Trial</span>
                    </button>
                </div>
            </div>
            </div>
        </>
    )
}