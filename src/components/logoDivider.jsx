import React from "react";
import logo from "../images/logo_wampuk_sf.png";

const LogoDivider = () => {
  return (
    <>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <img
            className="masthead-avatar mb-0"
            src={logo}
            alt="Wampuk"
            title="Wampuk"
            style={{ width: 150 }}
          />
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
};

export default LogoDivider;
