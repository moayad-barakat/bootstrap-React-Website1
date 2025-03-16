import { useState } from "react";

import blg1 from "../assets/blog1.jpg";

import blg2 from "../assets/blog2.jpg";
import blg3 from "../assets/blog3.jpg";
import { Link } from "react-router-dom";

function Blog() {
    return (
        <div className="container-fluid">

            {/* Start Header */}
            <div className="row header-bg align-items-center header_height">
                <div className="col-md-12 ">
                    <div className="ms-5" data-aos="fade-down">
                        <h1>Blog Grid</h1>
                        <p className="fs-5">Home / Pages / Blog Grid</p>
                    </div>
                </div>
            </div>
            {/* End Header */}

            <div className="row justify-content-evenly mt-5" data-aos="fade-up">
                <div className="col-md-3">
                    <div className="card">
                               <img className="img-fluid" src={blg1} alt="" />
                               <Link className="text-decoration-none text-dark fs-5 w-75 ms-5">How to cultivate organic fruits and vegetables in own firm</Link>
                               <div className="card-footer">
                               <i class="fa-solid fa-user text-success"></i>
                               <span className="text-success ms-2">Admin</span>


                               <i class="fa-solid fa-basket-shopping text-success ms-4"></i>
                               <span className="ms-2 text-success">01 Jan, 2045</span>

                               </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                               <img className="img-fluid" src={blg2} alt="" />
                               <Link className="text-decoration-none text-dark fs-5 w-75 ms-5">How to cultivate organic fruits and vegetables in own firm</Link>
                               <div className="card-footer">
                               <i class="fa-solid fa-user text-success"></i>
                               <span className="text-success ms-2">Admin</span>


                               <i class="fa-solid fa-basket-shopping text-success ms-4"></i>
                               <span className="ms-2 text-success">01 Jan, 2045</span>

                               </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                               <img className="img-fluid" src={blg3} alt="" />
                               <Link className="text-decoration-none text-dark fs-5 w-75 ms-5">How to cultivate organic fruits and vegetables in own firm</Link>
                               <div className="card-footer">
                               <i class="fa-solid fa-user text-success"></i>
                               <span className="text-success ms-2">Admin</span>


                               <i class="fa-solid fa-basket-shopping text-success ms-4"></i>
                               <span className="ms-2 text-success">01 Jan, 2045</span>

                               </div>
                    </div>
                </div>
            </div>



            
            <div className="row   mt-5 bg-dark text-white " data-aos="fade-up">
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

export default Blog;