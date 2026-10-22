import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/about/About.jsx";
import CoursesPage from "./pages/courses/CoursesPage.jsx";
import PricingTwo from "./pages/pricing/PricingTwo.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function AppContent() {
  const location = useLocation();
  const isAuthPage = [
    "/login",
    "/log-in",
    "/register",
    "/sign-up",
  ].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course-two" element={<CoursesPage />} />
        <Route path="/pricing-two" element={<PricingTwo />} />
        <Route path="/pricing" element={<PricingTwo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
