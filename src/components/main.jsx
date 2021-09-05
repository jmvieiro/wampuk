import Card from "./card";
import Carousel from "./carousel";
import ContactForm from "./contactForm";
import React from "react";

const Main = () => {
  return (
    <>
      <header className="masthead">
        <Card
          title={`¿Qué es Wampuk?`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
        />{" "}
        <Card
          title={`Nuestros cursos`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.`}
          action={"Ver cursos"}
          titleCenter={true}
        />
      </header>
      <Carousel />
      <ContactForm />
    </>
  );
};

export default Main;
