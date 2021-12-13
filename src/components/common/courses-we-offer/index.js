import React from "react";
import './style.css';

const CoursesWeOffer = () => {
    const courses = [
        {
            "name": "Qaida Noorania Online",
            "photo": "https://www.quranhost.com/wp-content/uploads/2019/03/tafseer-ul-quraan-1.jpg",
        },
        {
            "name": "Online Quran Reading",
            "photo": "https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
        },
        {
            "name": "Reading Quran with Tajweed",
            "photo": "https://www.quranhost.com/wp-content/uploads/2019/03/Online-Quran-with-Tajweed-1.jpg"
        },
        {
            "name": "Quran Memorization Online",
            "photo": "https://www.quranhost.com/wp-content/uploads/2019/03/Memorizing-Quran-Online.jpg"
        }
    ];
    return (
        <div className="container courses-offer">
            <h3>Courses we offer:</h3>
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="row">
                        {
                            courses.map((item) => (
                                <div className="col-md-3 mb-3">
                                    <div className="courses-detail text-center">
                                        <img src={item.photo} />
                                        <h4 className="course-name">{item.name}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesWeOffer;