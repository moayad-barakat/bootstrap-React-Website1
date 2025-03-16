import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="container-fluid">
            {/* Start Header */}
            <div className="row header-bg align-items-center header_height">
                <div className="col-md-12">
                    <div className="ms-5" data-aos="fade-down">
                        <h1>Contact Us</h1>
                        <p className="fs-5">Home / Pages / Contact Us</p>
                    </div>
                </div>
            </div>
            {/* End Header */}

            <div className="row justify-content-evenly gap-3"  data-aos="fade-up">
                <div className="text-center">
                    <h1>Contact Us</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum</p>
                    <p>diam justo sed rebum vero dolor duo.</p>
                </div>

                <div className="col-md-4">
                    <div className="card bg-success text-white p-4">
                        <div className="ms-3">
                            <h3>Call Us</h3>
                            <i className="fa-solid fa-phone"></i>
                            <span> +012 345 67890</span>
                        </div>

                        <div className="mt-4 ms-3">
                            <h3>Email Us</h3>
                            <i className="fa-solid fa-envelope"></i>
                            <span> info@example.com</span>
                        </div>

                        <div className="mt-4 ms-3">
                            <h3>Office Address</h3>
                            <i className="fa-solid fa-location-dot"></i>
                            <span> 123 Street, New York, USA</span>
                        </div>

                        <div className="mt-4 ms-3">
                            <h3>Follow Us</h3>
                            <i className="fa-brands fa-twitter fs-5 m-2"></i>
                            <i className="fa-brands fa-facebook fs-5 m-2"></i>
                            <i className="fa-brands fa-youtube fs-5 m-2"></i>
                            <i className="fa-brands fa-linkedin fs-5 m-2"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <form action="">
                        <div className="d-md-flex">
                            <input placeholder="Your Name" className="form-control mb-3 me-md-2" type="text" />
                            <input placeholder="Your Email" className="form-control mb-3" type="email" />
                        </div>

                        <input placeholder="Subject" className="form-control mb-3" type="text" />
                        <textarea rows={5} className="form-control" placeholder="Message"></textarea>
                        <button type="submit" className="btn btn-success mt-3 rounded-4">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="row mt-5"  data-aos="fade-up">
                <div className="col-md-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0767083608!2d-73.64985922962565!3d40.6966726870191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2str!4v1742167119036!5m2!1sar!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>



            {/* Start Footer */}


            <div className="row   mt-5 bg-dark text-white "  data-aos="fade-up">
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
    );
}

export default Contact;
