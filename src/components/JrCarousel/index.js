import React from 'react';
import './style.css';

const JrCarousel = () => {
    return (
        <>
    <div className="container">
    <h2>WhiteHat Jr Superstars</h2>
    <br/>
        <div className="row">
        <div className="image-section col-md-6 text-center">
            <div className='img-wrap'>
            <img src='https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/david-desktop-2x.png' className="card-img" />
            </div>
        </div>
        <div className="content-section col-md-6">
            <h4>1/5</h4>
            <p className="content-title">David Chea, Age 10</p>
            <p className="content-sub-title">Proud WhiteHat Hr Alumni</p>
            <p className="color-5A7184">Created 'Safe zone' App that marks zones which are not safe for children and provides alerts if someone is entering this area.</p>
            <div className="awards-wrap">
                <div className='david-badge'>
                    <img src='https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/herculean-22x.png' className='img-responsive-aaron' />
                </div>
                <div className='david-badge'>
                    <img src='https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/time-keeper-2-2x.png' className='img-responsive-aaron' />
                </div>
            </div>
        </div>
        </div>
        <div className="navigation-btn">
            <div className="navigation-btn-inside active"></div>
            <div className="navigation-btn-inside"></div>
            <div className="navigation-btn-inside"></div>
            <div className="navigation-btn-inside"></div>
            <div className="navigation-btn-inside"></div>
        </div> 

        <button className="global-icon navigation-btn-left"></button>
        <button className="global-icon navigation-btn-right"></button>
    </div>
        </>
    )
}

export default JrCarousel;