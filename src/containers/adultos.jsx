import React, { useEffect } from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

const Adultos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header adult={true} />
      <Main adult={true} />
      <Footer />
    </>
  );
};

export default Adultos;
