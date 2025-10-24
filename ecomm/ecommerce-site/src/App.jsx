import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import TravlesPage from "./pages/TravlesPage";
import Register from "./components/Register";
import Footer from "./components/Footer";
import data from "./Data/TourData";
import { useEffect, useState } from "react";

function App() {
  const [tourData, setTourData] = useState();
  

  useEffect(() => {
    setTourData(data);
  }, [setTourData]);

  const handelDelete = (id) => {
    setTourData((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route
            path="/travles"
            element={
              <TravlesPage data={tourData} handelDelete={handelDelete} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
