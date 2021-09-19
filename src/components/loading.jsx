import { Container } from "react-bootstrap";
import PacmanLoader from "react-spinners/PacmanLoader";
import React from "react";
import { css } from "@emotion/react";
import logo from "../images/logo_wampuk_sf.png";

const Loading = () => {
  const override = css`
    padding-right: 100px;
    margin-bottom: 40px;
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
        <PacmanLoader
          color={"#5f76b1"}
          loading={true}
          css={override}
          size={25}
        />
        <img
          src={logo}
          alt="Wampuk"
          title="Wampuk"
          style={{ width: 250 }}
        />
      </Container>
    </>
  );
};

export default Loading;
