import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {
  const movies = [
    {
      id: 1,
      title: "The Boys",
      description: "A dark superhero satire full of chaos and wit.",
      poster: "https://picsum.photos/id/1011/800/500",
    },
    {
      id: 2,
      title: "Breaking Bad",
      description:
        "A chemistry teacher turns to cooking meth in a gripping crime drama.",
      poster: "https://picsum.photos/id/1005/800/500",
    },
    {
      id: 3,
      title: "Stranger Things",
      description:
        "A nostalgic sci-fi mystery with monsters, kids, and the Upside Down.",
      poster: "https://picsum.photos/id/1025/800/500",
    },
    {
      id: 4,
      title: "Better Call Saul",
      description:
        "The transformation of Jimmy McGill into the iconic lawyer Saul Goodman.",
      poster: "https://picsum.photos/id/1018/800/500",
    },
  ];
  const { movieID } = useParams();
  const movie = movies.find((m) => m.id === Number(movieID));

  if (!movie) {
    return (
      <div className="text-center text-warning mt-5">
        <h2>🎬 Movie not found!</h2>
        <Link to="/" className="btn btn-outline-warning mt-3">
          Go Back
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center mt-2">Movies Details</h2>
      <div>
        <div className="container justify-content-center d-flex w-75 mx-auto">
          <div
            className="card bg-secondary text-light shadow-lg p-3 rounded-4"
            style={{ width: "90%", maxWidth: "300px" }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-3 mb-4 mx-auto d-block"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "200px",
                objectFit: "cover",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
            />
            <h1 className="text-center text-md text-warning mb-2">
              {movie.title}
            </h1>
            <p className="text-center">{movie.description}</p>
          </div>
        </div>
      </div>
      <div className="container justify-content-center d-flex gap-2 mt-1">
        <Link to="likes" className="btn btn-outline-warning">
          ❤
        </Link>
        <Link to="comments" className="btn btn-outline-warning">
          💬
        </Link>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
