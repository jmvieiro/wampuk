import React, { useEffect } from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

const Adults = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header adult={true} />
      <Main />
      <Footer adult={true} />
    </>
  );
};

export default Adults;
