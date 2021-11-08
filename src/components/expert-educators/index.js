import React from 'react';
import './style.css';

const ExpertEducators = () => {
    return (
        <>
            <div className="container">
                <h2 className="section-heading">Our Expert Coding Educators</h2>
                <br />
                <div className="row">
                    <div className="col-md-5 section-img">
                        <img src='https://s3-cdnwhjr.whjr.online/website/desktop/teacher-process-2x.png' />
                    </div>
                    <div className="col-md-7">
                        <h4>Top 1% teachers selected by an industry-leading 4-step teacher assessment process by top 1% of early childhood coding experts</h4>
                        <p className="font18 color-5A7184">
                            WhiteHat Jr follows a rigorous 4-Step Selection Process for confirming teacher candidates so your children are taught by the Top Early Childhood Coding Experts.
                        </p>
                        <div className="button-group">
                            <a className="view_live_comment" href='#'>
                                <button className="view_superstar_btn view_superstar_btn__mobile button login_btn view-comment-desktop-btn">
                                    <span>View Live Comment</span>
                                </button>
                            </a>
                            <button class="btn0 btn-lg text-light text-align-center">
                                <i class="far fa-calendar-alt ms-3"></i>
                                <span class="fw-bold m-3">Book a FREE Trial</span>
                            </button>
                        </div>

                        <div className="stars-content-wrapper">
                            <div className="stars-wrapper">
                                <span className="global-icon star"></span>
                                <span className="global-icon star"></span>
                                <span className="global-icon star"></span>
                                <span className="global-icon star"></span>
                            </div>
                            <div className="rating-content">
                                <cpan className="font16">
                                    <span className="text-bold">4.7+ out of 5 stars</span>
                                    &nbsp; from 8.6k+ reviews by our students
                                </cpan>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertEducators;