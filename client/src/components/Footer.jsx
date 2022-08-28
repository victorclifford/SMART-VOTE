import React from "react";
// import footerlogo from "../assets/svote-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar navbar-light bg-dark d-nav">
        <div className="container-fluid d-containerF">
          <a className="navbar-brand d-footer " href="index.html">
            <div
              className="footer-logo"
              style={{
                border: "hidden",
                height: "55px",
                width: "110px",
              }}
            ></div>
            {/* <img
              src={footerlogo}
              alt=""
              width="70"
              height="60"
              className="d-inline-block align-text-top f-image"
            /> */}
          </a>
        </div>
        <p className="h6">
          2021 &copy; SMARTVOTE, All Right Reserved <br />
          <p className="h6-new"> Privacy Policy | Terms Of Use</p>
        </p>
      </nav>
    </div>
  );
};

export default Footer;
