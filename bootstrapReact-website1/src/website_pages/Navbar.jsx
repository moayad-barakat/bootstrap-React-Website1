import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar bg-light navbar-expand-lg sticky-top">
            <div className="container-fluid ">

                <Link className="navbar-brand">
                    <h1 className="text-success">F<span className="text-danger">oo</span>dy</h1>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end " id="navbar">


                    <ul className="navbar-nav  ">
                        <li className="nav-item me-3 fs-5"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item me-3 fs-5"><Link to="/about" className="nav-link">About Us</Link></li>
                        <li className="nav-item me-3 fs-5 "><Link to="/products" className="nav-link ">Products</Link>

                        </li>
                        <li className="nav-item fs-5 me-3 dropdown x"><Link to="/pages"
                            role="button"
                            data-bs-auto-close="outside"
                            data-bs-toggle="dropdown"


                            className="nav-link dropdown-toggle ">Pages</Link>



                            <ul className="dropdown-menu ">
                                <li><Link to="/blog" className="dropdown-item ">Blog Grid</Link></li>
                                <li><Link to="/features" className="dropdown-item ">Our Features</Link></li>
                                <li><Link to="/Testimonial" className="dropdown-item">Testimonial</Link></li>
                                <li><Link to="/404Pages" className="dropdown-item ">404 page</Link></li>



                            </ul>

                        </li>
                        <li className="nav-item fs-5 me-5"><Link to="/contact" className="nav-link">Contact Us</Link></li>


                        <div className="icons d-none d-md-block me-5">
                            <i class="fa-solid   fa-magnifying-glass m-3 fs-5"></i>
                            <i class="fa-solid fa-user m-3 fs-5"></i>
                            <i class="fa-solid fa-bag-shopping m-3 fs-5"></i>
                        </div>
                    </ul>
                </div>




            </div>
        </nav>
    )



}

export default Navbar;