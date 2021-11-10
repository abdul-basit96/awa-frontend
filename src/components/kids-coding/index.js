import React from "react";
import './style.css'

export default function KidsCoding(){
    return(
        <>
        <div className="container">
        <div className="text-center text-dark mt-4">
            <h2 className="fw-bold ">Why Coding for Kids?</h2>
        </div>
        <div className="row">
            <div className="col-md-6 mt-4 fw-bold">
                Put Chart Here
            </div>
            <div className="col-md-6 mt-4">
                <div className="heading">
                <div className="global-icon start-qoute"></div>
                <h6>Your kids can learn logic, structure, sequence and creative expression</h6>
                <div className="global--icon end-qoute"></div>
                </div>
                <p className="para mt-5">
                    George Land & Beth Jarman's landmark NASA study identified that kids
                    
                    peak in creativity at age 6, followed by a gradual decline as they
                    
                    grow up.
                </p>
                <p className="para">
                    The real promise of coding is not that kids will become computer engineers.
                    
                    Coding is a fun tool for kids to exercise their desire to build,
                    
                    curiosity to question, imagination to explore - the traits that will serve
                    
                    any child  well in nearly any career, in every hobby, and in life.
                </p>
                <button className="btn0 btn-lg text-light text-align-center">
                    <i className="far fa-calendar-alt ms-3"></i>
                    <span className="fw-bold m-3">Book a FREE Trial</span>
                </button>

            </div>
        </div>
    </div>


        </>
    )
}