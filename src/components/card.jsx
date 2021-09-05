import LogoDivider from "./logoDivider";
import React from "react";

const Card = ({
  title,
  text,
  action,
  titleCenter = false,
  divider = false,
}) => {
  return (
    <div
      className={`container d-flex flex-column shadow p-5 mb-4 mt-1 rounded-3 ${
        titleCenter ? "align-items-center" : ""
      }`}
      style={{ width: "80%" }}
    >
      <h1 className={`masthead-heading  ${divider ? "mb-1" : "mb-4"}`}>
        {title}
      </h1>
      {divider && <LogoDivider />}
      <p className="masthead-subheading font-weight-light">{text}</p>
      <p className="masthead-subheading font-weight-light mb-0 text-uppercase">
        {action}
      </p>
    </div>
  );
};

export default Card;
