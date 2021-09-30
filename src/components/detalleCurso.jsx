import { Button, Col, Container, Image, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import ContactForm from "./contactForm";
import Footer from "./footer";
import Header from "./header";
import { LoginContext } from "../context/LoginContext";
import ModalNewCurso from "./modalNewCurso";
import { WampukContext } from "../context/WampukContext";
import { useParams } from "react-router-dom";

const DetalleCurso = ({}) => {
  const { id } = useParams();
  const { cursos } = useContext(WampukContext);
  const { datosAdulto, autenticadoAdulto } = useContext(LoginContext);
  const [curso, setCurso] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const aux = cursos.find((c) => c.id === id);
    if (aux) setCurso(aux);
  }, [id, cursos, autenticadoAdulto, datosAdulto]);
  return (
    <>
      <Header adult={true} />
      {curso && (
        <Container style={{ paddingTop: 100 }}>
          <Row>
            <Col dangerouslySetInnerHTML={{ __html: curso.title }}></Col>
          </Row>
          <Row>
            <Col>
              <Image src={curso.img} />
            </Col>
          </Row>
          <Row>
            <Col dangerouslySetInnerHTML={{ __html: curso.descripcion }}></Col>
          </Row>
          <Row>
            <Col>
              <span style={{ fontWeight: "800" }}>Dificultad:</span>
              <div dangerouslySetInnerHTML={{ __html: curso.dificultad }}></div>
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
          <Row>
            <Col>
              <span style={{ fontWeight: "800" }}>Educador:</span>
              <div dangerouslySetInnerHTML={{ __html: curso.docentes }}></div>
            </Col>
          </Row>

          <Row>
            <Col>
              <span style={{ fontWeight: "800" }}>Introducción:</span>
            </Col>
          </Row>
          {curso.introduccion.map((c, index) => {
            return (
              <Row>
                <Col>
                  <span style={{ fontWeight: "800" }}>Clase {index + 1}</span>
                  <div
                    dangerouslySetInnerHTML={{ __html: c !== "" ? c : "-" }}
                  ></div>
                </Col>
              </Row>
            );
          })}

          <Row>
            <Col>
              <span style={{ fontWeight: "800" }}>Actividades:</span>
            </Col>
          </Row>
          {curso.actividades.map((c, index) => {
            return (
              <Row>
                <Col>
                  <span style={{ fontWeight: "800" }}>Clase {index + 1}</span>
                  <div
                    dangerouslySetInnerHTML={{ __html: c !== "" ? c : "-" }}
                  ></div>
                </Col>
              </Row>
            );
          })}

          <Row>
            <Col>
              <span style={{ fontWeight: "800" }}>Materiales:</span>
            </Col>
          </Row>
          {curso.materiales.map((c, index) => {
            return (
              <Row>
                <Col>
                  <span style={{ fontWeight: "800" }}>Clase {index + 1}</span>
                  <div
                    dangerouslySetInnerHTML={{ __html: c !== "" ? c : "-" }}
                  ></div>
                </Col>
              </Row>
            );
          })}

          <Row>
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
      )}

      <ModalNewCurso showModal={showModal} setShowModal={setShowModal} curso={curso}/>
      <ContactForm />
      <Footer />
    </>
  );
};

export default DetalleCurso;
