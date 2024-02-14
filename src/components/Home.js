import React from "react";
import ima from "../assets/wback.jpg";
const Home = () => {
  return (
    <div className="container-fluid bg-secondary d-flex flex-row min-vh-100">
      <div className="col-6-lg d-flex flex-column">
        <h1>Newseason Arrivals</h1>
        <h3>Click out the trendes</h3>
      </div>
      <div>
        <img className="fluid fill-filter" src={ima} />
      </div>
    </div>
  );
};

export default Home;
