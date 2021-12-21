import "./App.css";
import HomePage from "./pages/home";
import AboutUs from "./pages/aboutUs";
import { Routes, Route, Navigate } from "react-router-dom";
import FeePlan from "./pages/feePlan";
import ContactPage from "./pages/contact";
import FaqPage from "./pages/faqpage";
import TestimonialPage from "./pages/testimonialpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fee-for-quran-course" element={<FeePlan />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
