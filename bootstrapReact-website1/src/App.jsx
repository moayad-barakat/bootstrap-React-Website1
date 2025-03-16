import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./website_pages/Navbar";
import Home from "./website_pages/home";
import About from "./website_pages/about";
import Products from "./website_pages/products";
import Pages from "./website_pages/pages";
import Blog from "./website_pages/blog";
import Feature from "./website_pages/feature";
import Testimonial from "./website_pages/testimonial";
import Page404 from "./website_pages/404_page";
import Contact from "./website_pages/contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} /> 
      </Routes>
    </Router>
  );
}

export default App;
