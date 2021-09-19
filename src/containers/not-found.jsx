import { Button, Container } from "react-bootstrap";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Link } from "react-router-dom";
import React from "react";
import { css } from "@emotion/react";
import logo from "../images/logo_wampuk_sf.png";

const NotFound = () => {
  const override = css`
    padding-right: 100px;
    margin-top: 50px;
  `;

  return (
    <>
      <Container
        fluid
        className="bg-grey-claro"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          flexDirection: "column",
        }}
      >
        {" "}
        <img src={logo} alt="Wampuk" title="Wampuk" style={{ width: 250 }} />
        <h3 className="mt-3 mb-3">¡Ups! Página no encontrada</h3>
        <Link to="/">
          <Button className="btn-morado" to="/">
            VOLVER AL INICIO
          </Button>
        </Link>
        <ClimbingBoxLoader
          color={"#5f76b1"}
          loading={true}
          css={override}
          size={25}
        />
      </Container>
    </>
  );
};

export default NotFound;
