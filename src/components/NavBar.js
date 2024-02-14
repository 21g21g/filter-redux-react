import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const count = useSelector((state) => state.product.count);
  return (
    <div className="container-fluid bg-white">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-4 py-3">
        <div className="navbar-expand-sm">
          <h1>Geba Collections</h1>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className="d-flex flex-column flex-md-row">
            <Link to="/" className="nav-link mr-md-3">
              Home
            </Link>
            <Link to="/product" className="nav-link mr-md-3">
              Products
            </Link>
            <Link to="/about" className="nav-link mr-md-3">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
          <div className="d-flex mt-3 mt-md-0">
            <div className="mr-md-3">
              <FaArrowAltCircleRight />
              <button className="btn btn-overlay-primary ml-2">Login</button>
            </div>
            <div className="mr-md-3">
              <FaCartPlus />
              <Link to="/productdetail">
                <button className="btn btn-overlay-primary ml-2">
                  Cart{count}
                </button>
              </Link>
            </div>
            <div>
              <FaUserEdit />
              <button className="btn btn-overlay-primary ml-2">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
