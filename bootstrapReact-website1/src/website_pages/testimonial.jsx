import { useState } from "react";
import { Link } from "react-router-dom";
import testimonial1 from "../assets/testimonial1.jpg";

import testimonial2 from "../assets/testimonial2.jpg";

import testimonial3 from "../assets/testimonial3.jpg";

function Testimonial (){
return (
    <div className="container-fluid">
        {/* Start Header */}
<div className="row header-bg align-items-center header_height">
    <div className="col-md-12 ">
        <div className="ms-5" data-aos="fade-down">
       <h1>Testimonial</h1>
       <p className="fs-5">Home / Pages / Testimonial</p>
       </div>
    </div>
</div>

{/* End Header */}
        





          {/* Start Customer Review Section */}
        
                    <div className="row justify-content-evenly gap-4 mt-5" data-aos="fade-up">
                        <div className="col-md-3 ">
                            <div className="card">
                                <div className="card-footer">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sapiente consectetur corrupti dolore ex optio voluptate doloremque dolor quae quisquam.
                                    <div className="d-flex mt-3">
                                        <div>
                                            <img className="rounded-pill" src={testimonial1} alt="" />
                                        </div>
                                        <div className="ms-3">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
        
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-footer">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sapiente consectetur corrupti dolore ex optio voluptate doloremque dolor quae quisquam.
                                    <div className="d-flex mt-3">
                                        <div>
                                            <img className="rounded-pill" src={testimonial2} alt="" />
                                        </div>
                                        <div className="ms-3">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-footer">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sapiente consectetur corrupti dolore ex optio voluptate doloremque dolor quae quisquam.
                                    <div className="d-flex mt-3">
                                        <div>
                                            <img className="rounded-pill" src={testimonial3} alt="" />
                                        </div>
                                        <div className="ms-3">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
        
                    </div>
                    {/* End Customer Review Section */}



                    
            <div className="row   mt-5 bg-dark text-white ">
                <div className="col-md-3">
                    <div>
                        <h1 className="text-success">F<span className="text-danger">oo</span>dy</h1>
                        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>

                        <i class="fa-brands fa-twitter fs-5 m-2"></i>
                        <i class="fa-brands fa-facebook fs-5 m-2 "></i>
                        <i class="fa-brands fa-youtube fs-5  m-2"></i>
                        <i class="fa-brands fa-linkedin fs-5 m-2 "></i>

                    </div>
                </div>


                <div className="col-md-3">
                    <div>
                        <h1 className="ms-3">Address</h1>
                        <ul>
                            <li><i class="fa-solid fa-location-dot"></i> <span>123 Street, New York, USA</span></li>
                            <li><i class="fa-solid fa-phone"></i> <span>+012 345 67890</span></li>
                            <li><i class="fa-solid fa-envelope"></i> <span>info@example.com</span></li>
                        </ul>
                    </div>
                </div>


                <div className="col-md-3">
                    <div>
                        <h1 className="ms-3">Quick Links</h1>
                        <ul>
                            <li>&gt; <Link className="quick-links text-white">About Us</Link></li>
                            <li>   &gt; <Link className="quick-links text-white">Contact Us</Link></li>
                            <li>   &gt; <Link className="quick-links text-white">Our Services</Link></li>
                            <li>   &gt; <Link className="quick-links text-white">Terms & Conditions</Link></li>
                            <li>   &gt; <Link className="quick-links text-white">Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div>
                        <h1>Newsletter</h1>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <form action="">
                            <div className="d-flex position-relative">
                            <input className="form-control w-75" type="email" />
                            <button type="submit" className="btn btn-success position-absolute start-50 ms-4 ">Sign Up</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

    </div>
)

} 
export default Testimonial ;