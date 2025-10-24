import React from "react";

const Card = ({ data, handelDelete }) => {
  console.log(data);
  return (
    <>
      <div className="col" key={data.id}>
        <div className="card">
          <img src={data?.image} className="card-img-top" alt={data.name} />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p>Price:{data.price}</p>
            <p className="card-text">{data.info}</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => handelDelete(data.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
