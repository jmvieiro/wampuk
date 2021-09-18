import React from "react";

const Footer = () => {
  return (
    <>
      <div className="background-adults py-4 text-center text-black">
        <div className="container">
          <small className="fw-bold">
            Wampuk by{" "}
            <a
              style={{
                textTransform: "none",
                color: "#e0ff00",
                backgroundColor: "black",
                paddingLeft: 3,
                paddingRight: 3,
              }}
              href="https://www.coderhouse.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i>CODER HOUSE</i>
            </a>
            {" "}|{" "}Coded with <span style={{ color: "#bf0f0f" }}>❤</span>
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
