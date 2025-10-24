import React from "react";
import Card from "../components/Card";

const TravlesPage = ({ data, handelDelete }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data?.map((tour, i) => (
            <Card data={tour} handelDelete={handelDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TravlesPage;
