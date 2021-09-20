import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
import Header from "../components/header";
import { LoginContext } from "../context/LoginContext";
import ModalNewAccount from "../components/modalNewAccount";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const MiCuenta = () => {
  const [showCrearNino, setShowCrearNino] = useState(false);
  const { datosAdulto, autenticadoAdulto, actualizarUsuario } =
    useContext(LoginContext);
  const [nombre, setNombre] = useState(datosAdulto.nombre);
  const [apellido, setApellido] = useState(datosAdulto.apellido);
  const history = useHistory();

  useEffect(() => {
    if (!autenticadoAdulto) history.push("/adultos");
    window.scrollTo(0, 0);
  }, [autenticadoAdulto, history]);

  return (
    <>
      {/* modal */}
      <ModalNewAccount
        adult={false}
        showCrearNino={showCrearNino}
        setShowCrearNino={setShowCrearNino}
      />

      <Header adult={true} />
      <Container
        fluid
        style={{ marginTop: 77 }}
        className={"background-adults text-center p-3 py-2 py-lg-3"}
      >
        <Row>
          <Col>
            <p
              className="fw-bold mb-0 text-uppercase text-white"
              style={{ fontSize: 32 }}
            >
              Mi cuenta
            </p>
          </Col>
        </Row>
      </Container>

      <Container className={"mt-4 ps-5 pe-5"}>
        <Row className="mt-5 text-center">
          <h4>Mis datos</h4>
        </Row>
        <Row>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              await actualizarUsuario({
                nombre: nombre,
                apellido: apellido,
                id: datosAdulto.id,
              });
            }}
          >
            <Row className="mt-3">
              <Col lg={6}>
                <Form.Group controlId="correo">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faUser}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      value={nombre}
                      placeholder="Nombre"
                      onChange={(e) => {
                        setNombre(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="clave">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faUser}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      value={apellido}
                      placeholder="Apellido"
                      onChange={(e) => {
                        setApellido(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={12} className="text-center">
                <Button
                  className="bg-white fw-bold border-0 text-black"
                  type="submit"
                >
                  ACTUALIZAR
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
        <Row className="mt-5">
          <h5>Niñxs</h5>
        </Row>
        <Row>
          <Container
            className={"bg-grey-claro rounded-3 text-center p-3 py-2 py-lg-3"}
          >
            {datosAdulto.hijos && datosAdulto.hijos.length > 0 ? (
              <>
                <Row>
                  {datosAdulto.hijos.map((hijo, index) => {
                    return (
                      <Col className="p-3" key={index} md={6}>
                        {hijo.usuario}
                      </Col>
                    );
                  })}
                </Row>
              </>
            ) : (
              <Row>
                <p className="fw-bold">
                  Todavía no has registrado ningún ninx en Wampuk.
                </p>
                <p>
                  Crea un usuario de ninx para que puedan navegar la Sección
                  Infantil.
                </p>
              </Row>
            )}
          </Container>
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <Button
                  onClick={() => {
                    setShowCrearNino(true);
                  }}
                  className="mt-2 fw-bold border-0 text-black"
                  style={{ backgroundColor: "inherit" }}
                >
                  AGREGAR NIÑX
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="mt-5">
          <h5>Mi suscripción</h5>
        </Row>
        <Row className="mb-5">
          <Container
            className={"bg-grey-claro rounded-3 text-center p-3 py-2 py-lg-3"}
          >
            {datosAdulto.suscripciones &&
            datosAdulto.suscripciones.length > 0 ? (
              <>
                <Row>
                  {datosAdulto.suscripciones.map((sus, index) => {
                    return (
                      <Col className="p-3" key={index} md={6}>
                        {sus.fechaDesde}-{sus.tipo}-{sus.tipoS}-{sus.activa}
                      </Col>
                    );
                  })}
                </Row>
              </>
            ) : (
              <Row>
                <p className="fw-bold">
                  Todavía no tienes una suscripción activa.
                </p>
              </Row>
            )}
          </Container>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MiCuenta;
