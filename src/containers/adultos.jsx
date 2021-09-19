import React, { useEffect } from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Principal from "./principal";

const Adultos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Principal>
      <Header adult={true} />
      <Main adult={true} />
      <Footer />
    </Principal>
  );
};

export default Adultos;
