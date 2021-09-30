import { Button, Col, Container, Image, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import ContactForm from "./contactForm";
import Footer from "./footer";
import Header from "./header";
import { LoginContext } from "../context/LoginContext";
import ModalNewCurso from "./modalNewCurso";
import { WampukContext } from "../context/WampukContext";
import avatar from "../images/avatar.png";
import { useParams } from "react-router-dom";

const DetalleCurso = () => {
  const { id } = useParams();
  const { cursos } = useContext(WampukContext);
  const { datosAdulto, autenticadoAdulto } = useContext(LoginContext);
  const [curso, setCurso] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const clases = ["Clase 1", "Clase 2", "Clase 3", "Clase 4"];
  useEffect(() => {
    const aux = cursos.find((c) => c.id === id);
    if (aux) setCurso(aux);
  }, [id, cursos, autenticadoAdulto, datosAdulto]);
  return (
    <>
      <Header adult={true} />
      {curso && (
        <Container className="bg-grey-claro" fluid style={{ marginTop: 77 }}>
          <Container
            className="bg-white pt-5 pe-5 ps-5"
            style={{ maxWidth: 900 }}
          >
            <Row className="text-center">
              <Col
                id="cursoTitle"
                style={{ fontSize: 30, textTransform: "uppercase" }}
                dangerouslySetInnerHTML={{ __html: curso.title }}
              ></Col>
            </Row>
            <Row>
              <Col>
                <Image src={curso.img} style={{ width: "100%", padding: 50 }} />
              </Col>
            </Row>
            <Row>
              <Col
                dangerouslySetInnerHTML={{ __html: curso.descripcion }}
              ></Col>
            </Row>
            <Row>
              <Col>
                <span style={{ fontWeight: "800" }}>Dificultad:</span>
                <div
                  dangerouslySetInnerHTML={{ __html: curso.dificultad }}
                ></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <span style={{ fontWeight: "800" }}>
                  Tiempo a dedicar por semana:
                </span>
                <div dangerouslySetInnerHTML={{ __html: curso.tiempo }}></div>
              </Col>
            </Row>

            <div id="pensum">
              <Row style={{ backgroundColor: "#F5F5F5" }}>
                <Col xs={3}></Col>
                <Col xs={3}>
                  <span style={{ fontWeight: "800" }}>Introducción</span>
                </Col>
                <Col xs={3}>
                  <span style={{ fontWeight: "800" }}>Actividades</span>
                </Col>
                <Col xs={3}>
                  <span style={{ fontWeight: "800" }}>Materiales</span>
                </Col>
              </Row>

              {clases.map((c, index) => {
                return (
                  <Row>
                    <Col xs={3}>
                      <span style={{ fontWeight: "800" }}>{c}</span>
                    </Col>{" "}
                    <Col xs={3}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            curso.introduccion[index] !== ""
                              ? curso.introduccion[index]
                              : "-",
                        }}
                      ></div>
                    </Col>{" "}
                    <Col xs={3}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            curso.actividades[index] !== ""
                              ? curso.actividades[index]
                              : "-",
                        }}
                      ></div>
                    </Col>{" "}
                    <Col xs={3}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            curso.materiales[index] !== ""
                              ? curso.materiales[index]
                              : "-",
                        }}
                      ></div>
                    </Col>
                  </Row>
                );
              })}
            </div>

            <Row className="bg-wampuk mt-4 mb-4 p-5 text-white">
              <Col>
                <span style={{ fontWeight: "800", fontSize: 22 }}>
                  EDUCADOR
                </span>
                <div
                  style={{ marginTop: 20, fontSize: 22 }}
                  dangerouslySetInnerHTML={{ __html: curso.docentes }}
                ></div>
              </Col>
              <Col className="text-center" style={{ alignSelf: "center" }}>
                <Image src={avatar} title="Avatar" alt="Avatar" />
              </Col>
            </Row>

            <Row className="text-center pb-5 pt-4">
              <Col>
                {autenticadoAdulto && datosAdulto.suscripciones.length > 0 ? (
                  <Button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className="mt-2 fw-bold border-0 text-morado"
                    style={{
                      textAlign: "left",
                      fontSize: 15,
                      backgroundColor: "inherit",
                    }}
                  >
                    + Inscribir al niñx
                  </Button>
                ) : (
                  <span style={{ fontWeight: "800" }}>
                    Suscríbete para acceder a este curso y más cursos
                  </span>
                )}
              </Col>
            </Row>
          </Container>
        </Container>
      )}

      <ModalNewCurso
        showModal={showModal}
        setShowModal={setShowModal}
        curso={curso}
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default DetalleCurso;
