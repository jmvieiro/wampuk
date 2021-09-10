import Card from "./card";
import ContactForm from "./contactForm";
import React from "react";
import Section from "./section";
import compass from "../images/compass.png";
import logo_wampuk_sf from "../images/logo_wampuk_sf.png";
import paper from "../images/paper.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Main = ({ adult = false }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={`masthead pb-0`}>
      {adult ? (
        <>
          <div
            className="container text-center"
            style={{
              padding: width < 902 ? 20 : 30,
            }}
          >
            <img
              src={logo_wampuk_sf}
              title="Wampuk"
              alt="Wampuk"
              style={{ width: "80%", maxWidth: 250 }}
              className=""
            />
          </div>{" "}
          <div className={"bg-wampuk text-white"}>
            <Section
              title={`¿Qué es Wampuk?`}
              text={`Wampuk es una plataforma online en español dirigida para niños de 8 a 12 años que quieren aprender por su propia decisión conocimientos accionables que les sirvan en su vida diaria (habilidades blandas). Wampuk utiliza como herramientas principales la gamificación y el contenido audiovisual de calidad accesibles de una manera que provean una metodología de enseñanza comprometedora.`}
              titleCenter={true}
            />
          </div>
          <div className={"bg-cyan-claro"}>
            <Section
              title={`Nuestros cursos`}
              text={`Nuestros cursos se enfocan en desarrollar las habilidades blandas de los niños(as), ten la certeza que tu hijo(a) aprenderá contenido que le servirá para mejorar su vida diaria y contribuir a su desarrollo creativo y emocional. Además nuestros cursos, contienen una mezcla de contenido pregrabado, gamificación y comprobación del aprendizaje. Todos nuestros cursos están pensados con nuestra metodología comprometedora, nuestra idea es aumentar la tasa de cursos terminados.`}
              action={"Ver cursos"}
              titleCenter={true}
            />
          </div>
          <div className={"bg-gray1 text-white"}>
            <Section title={`Nuestros educadores`} className={"text-white"} />
          </div>
          <div className={"bg-morado-claro"}>
            <Section
              title={`Elige tu modelo de suscripción`}
              text={`Nuestros cursos se enfocan en desarrollar las habilidades blandas de los niños(as), ten la certeza que tu hijo(a) aprenderá contenido que le servirá para mejorar su vida diaria y contribuir a su desarrollo creativo y emocional. Además nuestros cursos, contienen una mezcla de contenido pregrabado, gamificación y comprobación del aprendizaje. Todos nuestros cursos están pensados con nuestra metodología comprometedora, nuestra idea es aumentar la tasa de cursos terminados.`}
              action={"Ver suscripciones"}
              titleCenter={true}
            />
          </div>
          <ContactForm />
        </>
      ) : (
        <>
          <div className={"bg-violeta-claro text-center p-5"}>
            <img
              src={logo_wampuk_sf}
              title="Wampuk"
              alt="Wampuk"
              style={{ width: 250 }}
              className=""
            />
            <div
              className="bg-gray1 text-white mt-5"
              style={{
                padding: 22,
                margin: "auto",
                maxWidth: 750,
                width: "90%",
              }}
            >
              <p className="fw-bold mb-0" style={{ fontSize: 40 }}>
                ¡Bienvenido a Wampuk!
              </p>
            </div>
          </div>
          <div
            className={"p-1 pt-4 pb-4"}
            style={{ backgroundColor: "#C4E9E5" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <Card
                    title={`INICIA SESIÓN`}
                    text={`Inicia sesión para acceder a tus cursos y navegar por Wampuk.`}
                    img={paper}
                  />
                </div>
                <div className="col-sm-6">
                  <Card
                    title={`EXPLORAR`}
                    text={`Descrubre diferentes cursos y diviértete aprendiendo.`}
                    img={compass}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
