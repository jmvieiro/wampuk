import React from "react";

const Section = ({
  title,
  text,
  action,
  titleCenter = false,
  divider = false,
}) => {
  return (
    <div className="p-2 p-lg-4">
      <div
        className={`container d-flex flex-column ${
          titleCenter ? "align-items-center" : ""
        }`}
      >
        <h1 className={`masthead-heading ${divider ? "mb-1" : "mb-4"}`}>
          {title}
        </h1>
        <p className="masthead-subheading ">{text}</p>
        {action && (
          <p className="masthead-subheading fw-bold mb-0 text-uppercase text-morado mt-4">
            {action}
          </p>
        )}
      </div>
    </div>
  );
};

export default Section;
