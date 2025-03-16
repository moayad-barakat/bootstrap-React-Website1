import { useState } from "react";
import { Link } from "react-router-dom";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";

import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

import testimonial1 from "../assets/testimonial1.jpg";

import testimonial2 from "../assets/testimonial2.jpg";

import testimonial3 from "../assets/testimonial3.jpg";


function Products() {
    return (
        <div className="container-fluid">
            <div className="row header-bg align-items-center header_height">
                <div className="col-md-12 ">
                    <div className="ms-5" data-aos="fade-down">
                        <h1>About Us</h1>
                        <p className="fs-5">Home / Pages / Products</p>
                    </div>
                </div>
            </div>





            {/* Start Products Section */}


            <div className="row mt-5" data-aos="fade-up">

                <div className="col-md-12 ">
                    <h1 className="">Our Products</h1>
                    <p className=""> Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>

            </div>
            <div className="row justify-content-evenly " data-aos="fade-up">

                <div className="col-md-2 mb-3 ">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product1} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-2 mb-3 ">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product2} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="col-md-2 mb-3">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product3} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="col-md-2 mb-3">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product4} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>








            <div className="row justify-content-evenly gap-3" data-aos="fade-up">

                <div className="col-md-2 mb-3">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product5} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-2 mb-3">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product7} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="col-md-2 mb-3">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product8} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="col-md-2 mb-3">
                    <div className="card text-center">



                        <img className="img-fluid products_imgs" src={product4} alt="" />
                        <Link className="products-link">Fresh Tomato</Link>
                        <h4 className="text-success">$19.00  <span className="text-decoration-line-through text-danger">$29.00</span></h4>
                        <div className="card-footer text-center ">

                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <i class="fa-solid fa-eye "></i>
                                    <span className="">View detail</span>
                                </div>
                                <div className="vr "></div>
                                <div>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span>Add to cart</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="row   justify-content-center">
                <div className="col-md-3 ">
                    <Link className="btn btn-success  w-100 mt-3">Browse More Products</Link>
                </div>
            </div>



            {/* End Products Section */}



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



            {/* Start Footer */}


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

export default Products;