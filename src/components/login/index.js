import React from "react";
import "./styles.css"

function Login(){
    return <>
    <div className=" main-container">
    <div className="row AcTMZ mx-auto justify-content-center">
        <div className="wrapper col-md-6 col-lg-5">
            <div className="desc-container">
                <div className="rows d-flex">
                    <div className="desc-img mt-4">
                    <img alt="Customer Support" src="./images/customerSupport.png"></img>
                    </div>
                <div>
                    <p className="header">Get in touch</p>
                    <p className="desc">
                        We’re devoted to our mission of making your kids
                         creators versus consumers of technology. We’re 
                         available 24x7 for you at +912071531199
                    </p>
                </div>

                </div>

            </div>
        </div>

        <div className="wrapper col-xl-4 col-md-6 col-lg-5 mt-5 mb-0">
            <div className="form-container">
                <p className="title">Log In to Your Account</p>
                <form className="jss32">
                    <div class="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email"/>

                    </div>

                    
                <div class="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Password" />
                                    
               </div>
                    <p class="small mb-5 pb-lg-2"><a className="text-gray-50" href="#!">Forgot password?</a></p>
                    <button class="btn btn-primary btn-lg px-5" type="submit">Login</button>
                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" class="text-dark"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" class="text-dark"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" class="text-dark"><i class="fab fa-google fa-lg"></i></a>
                                </div>
                </form>
            </div>
            
            
        </div>

    </div>

    </div>

    


</>
}
export default Login;