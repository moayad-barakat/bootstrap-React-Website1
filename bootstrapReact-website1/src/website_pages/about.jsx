import { useState } from "react";
import about from "../assets/about.jpg";
import { Link } from "react-router-dom";

function About (){
    return (

        
<div >

    {/* Start Header */}

    <div className="container-fluid">
    <div className="container-fluid">
<div className="row header-bg align-items-center header_height">
    <div className="col-md-12 ">
        <div className="ms-5" data-aos="fade-down">
       <h1>About Us</h1>
       <p className="fs-5">Home / Pages / About</p>
       </div>
    </div>
</div>
</div>
{/* End Header */}


<div className="container">
    {/* Start Section2 */}
    
                <div className="row justify-content-center mt-5" data-aos="fade-up">
                    <div className="col-md-5 mb-5" >
                        <img className="img-fluid " src={about} alt="" />
                    </div>
    
                    <div className="col-md-5 ">
                        <div>
                            <h1>Best Organic Fruits And Vegetables</h1>
                            <p className="mt-3 fs-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
    
                            <ul className="">
                                <li className="mt-3"><i class="fa-solid fa-check text-success"></i> <span className="fs-5">Tempor erat elitr rebum at clita</span></li>
                                <li className="mt-3"><i class="fa-solid fa-check text-success"></i> <span className="fs-5">Aliqu diam amet diam et eos</span></li>
                                <li className="mt-3"><i class="fa-solid fa-check text-success"></i> <span className="fs-5">Aliqu diam amet diam et eos</span></li>
                            </ul>
    
                            <button className="btn btn-success px-4 py-2 rounded-4">Read More</button>
                        </div>
                    </div>
                </div>
    
                {/* End Section2 */}
    
    
                
       
</div>


<div className="container-fluid">
         {/* Start Firm  Section */}

         <div className="row   justify-content-around align-items-center bg-success text-white mt-5" data-aos="fade-up">

<div className="col-md-8">
    <div >
        <h1>Visit Our Firm</h1>
        <p className="mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
    </div>
</div>


<div className="col-md-2">
    <button className="btn btn-primary w-75 px-3 py-2 rounded-4">Visit More</button>
</div>

</div>


{/* End Firm  Section */}
</div>







</div>

    {/* Start Footer */}

<div className="container-fluid">
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
</div>

    )
}

export default About;