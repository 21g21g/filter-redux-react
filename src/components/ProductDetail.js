import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const item = useSelector((state) => state.product.item);
  return (
    <div className="container d-flex flex-column justify-content-between">
      {item.map((item) => {
        return (
          <div className="container d-flex flex-row">
            <div className="container d-flex flex-column">
              <img className="img-fluid" src={item.img} />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </div>
            <div className=" d-flex flex-row justify-content-center align-item-center  ">
              <button
                className="btn btn-secondary "
                style={{ height: "16px", color: "white" }}
              >
                +
              </button>
              <button
                className="btn btn-secondary  "
                style={{ height: "16px" }}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetail;
