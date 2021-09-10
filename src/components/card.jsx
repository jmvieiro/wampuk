import React from "react";

const Card = ({ title, text, img, titleCenter = false }) => {
  return (
    <div
      className={`container bg-white shadow p-3 pt-4 pb-4 mb-4 mt-1 rounded-3 ${
        titleCenter ? "align-items-center" : ""
      }`}
      style={{ width: "95%" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-12 text-center mb-4">
            <img
              src={img}
              title="Wampuk"
              alt="Wampuk"
              style={{ width: "90%", maxWidth: 120 }}
              className=""
            />
          </div>
          <div className="col-8 col-sm-12 text-center">
            <h1 className={`masthead-heading mb-3`}>{title}</h1>
            <p className="masthead-subheading">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
