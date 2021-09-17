import React from "react";

const Footer = () => {
  return (
    <>
      <div className="background-adults py-4 text-center text-black">
        <div className="container">
          <small>
            Wampuk by{" "}
            <a
              className="text-white"
              style={{ textTransform: "none" }}
              href="https://www.coderhouse.com/"
            >
              Coder House
            </a>
            . Coded with <span style={{ color: "#bf0f0f" }}>❤</span>.
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
