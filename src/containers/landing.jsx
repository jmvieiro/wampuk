import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import logo_wampuk_blanco from "../images/logo_wampuk_blanco.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Landing = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="row"
        style={{
          width: "102%",
          position: "absolute",
          top: "40%",
          height: "60vh",
          zIndex: -1,
        }}
      >
        <div
          className="col-12"
          style={{
            height: "",
            backgroundColor: "#00A3FF",
            borderTopRightRadius: "80% 100%",
          }}
        ></div>
      </div>
      <div
        className="row"
        style={{
          width: "102%",
          position: "absolute",
          top: "40%",
          height: "60vh",
          zIndex: -2,
        }}
      >
        <div
          className="col-12"
          style={{
            height: "",
            backgroundColor: "#2C5871",
            borderTopRightRadius: "80% 15%",
          }}
        ></div>
      </div>
      <div
        className="row"
        style={{
          zIndex: 99,
        }}
      >
        <div className="col-12 text-center pt-4" style={{ height: "50vh" }}>
          <img
            src={logo_wampuk_blanco}
            title="Sección Adultos"
            alt="Sección Adultos"
            style={{
              borderRadius: "50%",
              maxWidth: 250,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          />
        </div>
      </div>
      <div className="row" style={{ zIndex: 9 }}>
        <div
          className="col-6 bg-wampuk-children text-center"
          style={{ height: "50vh", borderTopRightRadius: "100% 40%" }}
        >
          <Link to={"/children"} style={{ flex: 0.5, margin: 0, padding: 0 }}>
            <p
              className="fw-bold p-2 bg-primary rounded text-white"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: width < 902 ? 150 : 120,
                fontSize: width < 902 ? 15 : 20,
                width: width < 902 ? 170 : 250,
              }}
            >
              SECCIÓN INFANTIL
            </p>
          </Link>
        </div>
        <div
          className="col-6 bg-wampuk text-center"
          style={{ height: "50vh", borderTopLeftRadius: "100% 40%" }}
        >
          <Link to={"/adults"} style={{ flex: 0.5, margin: 0, padding: 0 }}>
            <p
              className="fw-bold p-2 bg-primary rounded text-white"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: width < 902 ? 150 : 120,
                fontSize: width < 902 ? 15 : 20,
                width: width < 902 ? 170 : 250,
              }}
            >
              SECCIÓN ADULTOS
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
