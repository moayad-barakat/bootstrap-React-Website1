import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
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


function App() {
  
return (
   <Router>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>

      <Route path="/pages" element={<Pages/>}></Route>
      <Route path="/blog" element ={<Blog/>}></Route>
      <Route path="/feature" element= {<Feature/>}></Route>
      <Route path="/testimonial" element={<Testimonial/>}></Route>
      <Route path="/404_page" element={<Page404/>}></Route>




      <Route path="/contact" element={<Contact/>}></Route>
     </Routes>

   </Router>
)

}

export default App;
