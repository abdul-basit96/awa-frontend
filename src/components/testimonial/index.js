import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
        <div className="container">
            <div className="accordion d-flex justify-content-center align-items-center height" id="accordionExample">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-3">
                            <ul className="testimonial-list">
                                <li>
                                    <div className="card p-3" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/G1pXs7D.jpg" width="50" className="rounded-circle" />
                                            <div className="d-flex flex-column ms-2"> <span class ="fw-normal">Adil Hassan</span> <span className="fw-light">Learn Qirat</span> </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card p-3" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/udGH5tO.jpg" width="50" className="rounded-circle" />
                                            <div className="d-flex flex-column ms-2"> <span className="fw-normal">Fakhar Zaman</span> <span className="fw-light">Learn Tajweed ul Quran</span> </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card p-3" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/Uz4FjGZ.jpg" width="50" className="rounded-circle" />
                                            <div className="d-flex flex-column ms-2"> <span className="fw-normal">Babar Azam</span> <span className="fw-light">Quran Memorization</span> </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 text-center d-flex">
                        <div className="p-3 my-auto">
                                <div className="card-body">
                                    <p>I am grateful for your wonderful course! Your tutors are the best, and I am completely satisfied with the level of professional teaching. </p>
                                    <div className="ratings">
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;