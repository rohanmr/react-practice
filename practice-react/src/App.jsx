import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectList from "./pages/ProjectList";
import AboutUs from "./pages/AboutUs";
import ContactFrom from "./pages/ContactForm";

import SkillPage from "./pages/SkillPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactFrom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
