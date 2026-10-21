import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./pages/about/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
