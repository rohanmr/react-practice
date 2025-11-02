import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const naviget = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container my-4">
      <h3 className="mb-4 text-center">🛒 Your Cart</h3>

      {cart.length === 0 ? (
        <div className="text-center py-5 text-muted">
          <h5>Your cart is empty</h5>
          <button
            onClick={() => naviget("/")}
            className="btn  btn-warning mt-2 "
          >
            Go Back to Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="list-group mb-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                    className="me-3 rounded"
                  />
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <p className="mb-0 text-muted">Rs {item.price}</p>
                  </div>
                </div>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center border-top pt-3">
            <h5>Total:</h5>
            <h5>Rs {totalPrice.toFixed(2)}</h5>
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-success">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
