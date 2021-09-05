import { Link } from "react-router-dom";
import React from "react";
import logo_wampuk_blanco from "../images/logo_wampuk_blanco.png";
import logo_wampuk_sf from "../images/logo_wampuk_sf.png";

const Footer = ({ adult = false }) => {
  return (
    <>
      <footer className="footer text-center bg-wampuk">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Wampuk</h4>
              <Link to={"/"} className="navbar-brand">
                <img
                  src={adult ? logo_wampuk_blanco : logo_wampuk_sf}
                  title="Wampuk"
                  alt="Wampuk"
                  className="logo"
                />
              </Link>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">En las redes</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Nosotros</h4>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright py-4 text-center text-white">
        <div class="container">
          <small>
            Wampuk by <a href="https://www.coderhouse.com/">Coder House</a>.
            Coded with ❤.
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
