import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { movieID } = useParams();
  const storageKey = `comments ${movieID}`;

  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="container my-5">
      <div
        className="p-4 mx-auto rounded-4 shadow-lg bg-light"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center fw-bold text-primary mb-4">
          💬 Movie Comments
        </h3>

        {/* Input & Button */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control border-primary"
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="btn btn-primary fw-semibold" onClick={addComment}>
            Post
          </button>
        </div>

        {/* Comments List */}
        {comments.length === 0 ? (
          <p className="text-center text-muted fst-italic">
            No comments yet — be the first!
          </p>
        ) : (
          <ul className="list-group list-group-flush">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="list-group-item bg-light border-0 border-bottom py-2"
              >
                <span className="text-dark">{comment}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comments;
