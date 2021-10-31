import React from 'react';
import './style.css';

export default function Facilities() {
    return (
        <>
         <section id="learn" class="">
        <div class="container-fluid" style={{backgroundImage: `url(/images/mos.jpg)`}}>
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6 d-flex justify-content-center">
                    <div class="video-button d-flex justify-content-center">
                        <i class="play bi bi-play-fill "></i>
                    </div>
                </div>
                <div class="col-md-6 p-5 text-white text-div">
                    <h2 class="px-5 mt-2">Our Facilities</h2>
                    <div class="row">
                        <div class="col-md-2 p-5">
                            <i class="bi bi-facebook text-dark m-2"></i>
                        </div>
                        <div class="col-md-8">
                            <h3>Certificates</h3>
                            <p>
                                Certifications- After the course, 
                                we also provide an authentic certificate from Arabic Wave Academy 
                                to every candidate
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 p-5">
                            <i class="bi bi-facebook text-dark m-2"></i>
                        </div>
                        <div class="col-md-8">
                            <h3>Alumni Supports</h3>
                            <p>
                                If You Still Have Some Queries Feel free to ask the 
                                help center of Arabic Wave Academy
                                
                                
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 p-5">
                            <i class="bi bi-facebook text-dark m-2"></i>
                        </div>
                        <div class="col-md-8">
                            <h3>Schedule Plan</h3>
                            <p>
                                Arabic Wave Academy team realizes that not everyone is 
                                familiar with their level of tajweed and Arabic required for the
                                Quran.
                            </p>
                        </div>
                    </div>
                    <div class="text-center">
                    <a href="" class="btn btn-primary fw-bold mt-3">
                      Join Free Trail Class
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}