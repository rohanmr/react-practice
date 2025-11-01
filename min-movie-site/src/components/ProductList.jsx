import React from "react";
import useCustomAPI from "../hooks/useCustomeAPi";

const ProductList = () => {
  const { products, loading, error } = useCustomAPI(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <div className="spinner-border" role="status"></div>;
  if (error)
    return <div>Erorr While Getting Products......{error.message}</div>;

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products ? (
          <>
            {products.map((p) => (
              <div className="col-md-4 col-sm-6 mb-4" key={p.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={p.image}
                    className="card-img-top object-fit-contain img-fluid"
                    alt={p.title}
                    style={{
                      height: "250px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{p.title}</h5>
                    <p className="card-text text-muted truncate-single-line">
                      {p.description}
                    </p>
                    <button className="btn btn-outline-success btn-sm">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>No Product Found</>
        )}
      </div>
    </>
  );
};

export default ProductList;
