import { Col, Container, Image, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";

import Curso from "../components/curso";
import Footer from "../components/footer";
import Header from "../components/header";
import { LoginContext } from "../context/LoginContext";
import { WampukContext } from "../context/WampukContext";
import avatar from "../images/avatar.png";
import { useHistory } from "react-router";

const MiCofre = () => {
  const { datosNino, autenticadoNino } = useContext(LoginContext);
  const { cursos } = useContext(WampukContext);
  const history = useHistory();

  useEffect(() => {
    if (!autenticadoNino) history.push("/infantil");
    else window.scrollTo(0, 0);
  }, [history, autenticadoNino]);

  return (
    <>
      <Header adult={false} />
      <Container
        fluid
        style={{ marginTop: 77 }}
        className={"background-children text-center p-3 py-2 py-lg-3"}
      >
        <Row>
          <Col>
            <p
              className="fw-bold mb-0 text-uppercase text-white"
              style={{ fontSize: 32 }}
            >
              Mi cofre
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid={"sm"} className={"mt-4"}>
        <Row>
          <Row className="mt-3">
            <Col
              xs={5}
              className="text-center"
              style={{
                alignSelf: "center",
              }}
            >
              <Image src={avatar} title="Avatar" alt="Avatar" />
            </Col>
            <Col xs={7} className="text-left">
              <h2>¡Hola {datosNino.usuario}!</h2>
              <p>
                Continúa con los cursos que empezaste o redescubre los que ya
                has terminado.
              </p>
            </Col>
          </Row>
        </Row>

        <Row className="mt-5 text-center">
          <h2>Mis Cursos</h2>
        </Row>
        <Row className="mb-5">
          <Container className={"bg-grey-claro rounded-3 p-3 py-2 py-lg-3"}>
            <Row>
              <Col>
                {datosNino.cursos &&
                  datosNino.cursos.map((c) => {
                    return (
                      <Curso
                        id={cursos.find((a) => a.id === c.curso).id}
                        title={cursos.find((a) => a.id === c.curso).title}
                        text={
                          cursos.find((a) => a.id === c.curso).descripcionCorta
                        }
                        img={cursos.find((a) => a.id === c.curso).img}
                        link={false}
                      />
                    );
                  })}
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MiCofre;
