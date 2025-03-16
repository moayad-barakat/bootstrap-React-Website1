import { useState } from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

function Feature (){

    return (
        <div  className="container-fluid">
  {/* Start Header */}
  <div className="row header-bg align-items-center header_height">
                <div className="col-md-12 ">
                    <div className="ms-5" data-aos="fade-down">
                        <h1>Features</h1>
                        <p className="fs-5">Home / Pages / Features</p>
                    </div>
                </div>
            </div>
            {/* End Header */}




   {/* Start Features Section */}

            <div className="row mt-5 justify-content-center" data-aos="fade-up">
                <div className="col-md-2 w-25 ">
                    <div className="empty_div  ms-4"></div>


                </div>
                <h1 className="text-center">Our Features</h1>
                <p className="text-center">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo</p>

            </div>

            <div className="row justify-content-evenly mt-5" data-aos="fade-up">
                <div className="col-md-3 mb-3">
                    <div className="card rounded-5 text-center py-3">
                        <div className="card-body">
                            <img src={icon1} alt="" />
                            <h3>Natural Process</h3>
                            <p className="w-75 ms-5">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            <button className="btn btn-outline-success px-4 rounded-4">Read More</button>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 mb-3">
                    <div className="card rounded-5 text-center py-3">
                        <div className="card-body">
                            <img src={icon2} alt="" />
                            <h3>Natural Process</h3>
                            <p className="w-75 ms-5">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            <button className="btn btn-outline-success px-4 rounded-4">Read More</button>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 mb-3">
                    <div className="card rounded-5 text-center py-3">
                        <div className="card-body">
                            <img src={icon3} alt="" />
                            <h3>Biologically Safe</h3>
                            <p className="w-75 ms-5">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            <button className="btn btn-outline-success px-4 rounded-4">Read More</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* End Features Section */}


        </div>
    )
}

export default Feature;