import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {
  const movies = [
    { id: 1, title: "Sholay" },
    { id: 2, title: "Kantara" },
    { id: 3, title: "Tere Naam" },
    { id: 4, title: "Hasina Dilruba" },
  ];
  const { movieID } = useParams();
  return (
    <div>
      <h2 className="text-center my-3">Movies Details</h2>
      <div>
        <div className="container w-75 mx-auto">
          {movieID ? (
            <>
              <h1 className="text-danger text-center">
                {movies[movieID - 1].title}
              </h1>
            </>
          ) : (
            <>"Unknown movie"</>
          )}
          <h6 class="card-subtitle text-center mb-2 text-warning">
            Movie subtitle
          </h6>
          <p class="card-text text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="container justify-content-center d-flex gap-2 mt-2">
        <Link to="likes" className="btn btn-outline-warning">
          ❤
        </Link>
        <Link to="comments" className="btn btn-outline-warning">
          💬
        </Link>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
