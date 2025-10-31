import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Likes = () => {
  const { movieID } = useParams();
  const storage = `likes ${movieID}`;

  const [likes, setLikes] = useState(() => {
    const saveLikes = localStorage.getItem(storage);
    return saveLikes ? parseInt(saveLikes, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(storage, likes);
  });
  return (
    <div>
      <h3> Likes : {likes}</h3>
      <div className="d-flex gap-2">
        <button className="btn btn-warning" onClick={() => setLikes(likes + 1)}>
          👍
        </button>
        <button className="btn btn-warning" onClick={() => setLikes(likes - 1)}>
          👎
        </button>
      </div>
    </div>
  );
};

export default Likes;
