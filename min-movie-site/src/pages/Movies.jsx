import React, { useContext } from "react";
import ProductList from "../components/ProductList";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Movies = () => {
  const { theme } = useContext(ThemeContext);
  const movies = [
    { id: 1, title: "Sholay" },
    { id: 2, title: "Kantara" },
    { id: 3, title: "Tere Naam" },
    { id: 4, title: "Hasina Dilruba" },
  ];
  return (
    <div className={`container-fluid bg-${theme} py-4`}>
      <h1 className="fw-bold text-center mb-4">Movies </h1>

      {/* Movies Grid */}
      <div className="container">
        <div className="row g-4">
          {movies.map((movie, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 bg-warning">
                  <div className="card-body">
                    <h5 className="card-title text-dark">{movie.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Movie subtitle
                    </h6>
                    <p className="card-text text-dark">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Product List Section */}
      <h1 className="fw-bold text-center mt-5">Product List </h1>

      <div className="container mt-5">
        <ProductList />
      </div>
    </div>
  );
};

export default Movies;
