import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header_all">
        <div>
          <div className="container">
            <div className="row header_ust">
                <div className="col-6 icons">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <div className="col-6 right">
                  <i class="fa-solid fa-phone"></i>
                  <p>(+1) 234 5678 9101</p>
                  <i class="fa-solid fa-envelope"></i>
                  <p> shop@yourdomain.com</p>
                </div>
            </div>
          </div>

          <div className="container">
            <div className="row headr_alt">
              <div className="col-5">
                <h1>
                  Selling <span>.</span>
                </h1>
              </div>
              <div className="col-7">
                <ul>
                  <li className="home"> <Link to={"/"}>Home</Link> </li>
                  <li><Link to={"/basket"}>Basket</Link></li>
                  <li>About us</li>
                  <li>Special</li>
                  <li>Testimonials</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
