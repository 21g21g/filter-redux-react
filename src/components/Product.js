import React, { useState } from "react";
import { MenData, FemaleData, JewleryData } from "../data/Data";
import { useDispatch } from "react-redux";
import { productSliceActions } from "../store/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);

  const handleClicked = ({ id, name, img, description }) => {
    dispatch(
      productSliceActions.addtoCart({
        id,
        name,
        img,
        description,
      })
    );
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="container mt-6">
      <h1>Latest Products</h1>
      <div className="d-flex flex-row mt-4">
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleCategoryChange(null)}
        >
          All
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleCategoryChange("men")}
        >
          Men's cloth
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleCategoryChange("women")}
        >
          Women's cloth
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleCategoryChange("jewelry")}
        >
          Jewelry
        </button>
      </div>

      <div className="d-flex flex-row flex-wrap mt-4">
        {(category === "men" || category === null) &&
          MenData.map((men, index) => (
            <div className="card" key={index}>
              <img
                className="card-img img-fluid flex-fill"
                src={men.img}
                alt={men.name}
              />
              <div className="card-body">
                <h1 className="card-title">{men.name}</h1>
                <p className="card-text">{men.price}</p>
              </div>
              <div className="container d-flex flex-row justify-content-center align-item-center">
                {" "}
                <button
                  className="btn btn-secondary"
                  onClick={() => handleClicked(men)}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}

        {(category === "women" || category === null) &&
          FemaleData.map((fem, index) => (
            <div className="card" key={index}>
              <img
                className="card-img img-fluid flex-fill"
                src={fem.img}
                alt={fem.name}
              />
              <div className="card-body">
                <h1 className="card-title">{fem.name}</h1>
                <p className="card-text">{fem.price}</p>
              </div>
              <div className="container d-flex flex-row justify-content-center align-item-center">
                {" "}
                <button
                  className="btn btn-secondary"
                  onClick={() => handleClicked(fem)}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}

        {(category === "jewelry" || category === null) &&
          JewleryData.map((jew, index) => (
            <div className="card" key={index}>
              <img
                // onClick={() => handleClicked(jew)}
                className="card-img img-fluid flex-fill"
                src={jew.img}
                alt={jew.name}
              />
              <div className="card-body">
                <h1 className="card-title">{jew.name}</h1>
                <p className="card-text">{jew.price}</p>
              </div>
              <div className="container d-flex flex-row justify-content-center align-item-center">
                {" "}
                <button
                  className="btn btn-secondary"
                  onClick={() => handleClicked(jew)}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
