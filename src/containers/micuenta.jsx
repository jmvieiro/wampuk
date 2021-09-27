import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ModalNewAccount from "../components/modalNewAccount";
import { WampukContext } from "../context/WampukContext";
import avatar from "../images/avatar.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const MiCuenta = () => {
  const { suscripciones } = useContext(WampukContext);

  const [showCrearNino, setShowCrearNino] = useState(false);
  const { datosAdulto, autenticadoAdulto, actualizarUsuario } =
    useContext(LoginContext);
  const [suscripcion, setSuscripcion] = useState(null);
  const [nombre, setNombre] = useState(datosAdulto.nombre);
  const [apellido, setApellido] = useState(datosAdulto.apellido);
  const history = useHistory();

  useEffect(() => {
    if (!autenticadoAdulto) history.push("/adultos");
    else {
      window.scrollTo(0, 0);
      const sus = datosAdulto.suscripciones.find((s) => s.activa === 1);
      if (sus) {
        let aux = suscripciones.find((a) => a.id === sus.tipo);
        if (aux) {
          aux = { ...aux, ...sus };
          setSuscripcion(aux);
        }
      }
    }
  }, [autenticadoAdulto, history, datosAdulto.suscripciones, suscripciones]);

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

      <Container fluid={"sm"} className={"mt-4"}>
        <Row className="text-center">
          <h2>Mis datos</h2>
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
                <Button
                  className="mt-2 d-block bg-white fw-bold border-0 text-black"
                  type="submit"
                  style={{ textAlign: "left", fontSize: 15 }}
                >
                  EDITAR PERFIL
                </Button>{" "}
                <Button
                  className="bg-white fw-bold border-0 text-black text-left"
                  disabled
                  style={{ textAlign: "left", fontSize: 15 }}
                >
                  CAMBIAR CONTRASEÑA
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
        <Row className="mt-5 text-center">
          <h2>Mis niñxs</h2>
        </Row>
        <Row>
          {datosAdulto.hijos && datosAdulto.hijos.length > 0 ? (
            <>
              {datosAdulto.hijos.map((hijo, index) => {
                return (
                  <Row
                    key={index}
                    className="row bg-cyan-claro p-3 mb-2 rounded-3"
                  >
                    <Col
                      xs={5}
                      className="text-center"
                      style={{
                        alignSelf: "center",
                      }}
                    >
                      <Image
                        src={avatar}
                        title={hijo.usuario}
                        alt={hijo.usuario}
                      />
                    </Col>
                    <Col xs={7}>
                      <p className="fw-bold">{hijo.usuario}</p>
                      <Button
                        disabled
                        onClick={() => {}}
                        className="d-block fw-bold border-0 text-black"
                        style={{
                          textAlign: "left",
                          fontSize: 15,
                          backgroundColor: "inherit",
                        }}
                      >
                        EDITAR PERFIL
                      </Button>{" "}
                      <Button
                        disabled
                        onClick={() => {}}
                        className="d-block fw-bold border-0 text-black"
                        style={{
                          textAlign: "left",
                          fontSize: 15,
                          backgroundColor: "inherit",
                        }}
                      >
                        CAMBIAR CONTRASEÑA
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </>
          ) : (
            <Row>
              <p className="fw-bold">
                Todavía no has registrado ningún ninx en Wampuk.
              </p>
              <p>
                Crea un usuario de niñx para que puedan navegar la Sección
                Infantil.
              </p>
            </Row>
          )}
        </Row>
        <Row>
          <Col lg={12} className="text-center">
            <Button
              onClick={() => {
                setShowCrearNino(true);
              }}
              className="mt-2 fw-bold border-0 text-morado"
              style={{
                textAlign: "left",
                fontSize: 15,
                backgroundColor: "inherit",
              }}
            >
              + AGREGAR NIÑX
            </Button>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <h2>Mi suscripción</h2>
        </Row>
        <Row className="mb-5">
          <Container className={"bg-grey-claro rounded-3 p-3 py-2 py-lg-3"}>
            {suscripcion ? (
              <>
                <Row>
                  <Col className="p-3">
                    <p className="fw-bold">
                      <i>{suscripcion.title}</i>
                    </p>
                    <p className="fw-bold">
                      Fecha desde: {suscripcion.fechaDesde}
                    </p>{" "}
                    <p className="fw-bold">Características: </p>
                    <p>{suscripcion.p1}</p>
                    <p>{suscripcion.p2}</p>
                    <ul>
                      {suscripcion.p3.map((p, index) => {
                        return <li key={index}>{p}</li>;
                      })}
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Button
                      disabled
                      onClick={() => {}}
                      className="d-block fw-bold border-0 text-black"
                      style={{
                        textAlign: "left",
                        fontSize: 15,
                        backgroundColor: "inherit",
                      }}
                    >
                      CAMBIAR SUSCRIPCIÓN
                    </Button>
                    <Button
                      disabled
                      onClick={() => {}}
                      className="d-block fw-bold border-0 text-black"
                      style={{
                        textAlign: "left",
                        fontSize: 15,
                        backgroundColor: "inherit",
                      }}
                    >
                      CAMBIAR MÉTODO DE PAGO
                    </Button>
                    <Button
                      disabled
                      onClick={() => {}}
                      className="d-block fw-bold border-0 text-black"
                      style={{
                        textAlign: "left",
                        fontSize: 15,
                        backgroundColor: "inherit",
                      }}
                    >
                      CANCELAR SUSCRIPCIÓN
                    </Button>
                  </Col>
                </Row>
              </>
            ) : (
              <Row>
                <p className="fw-bold">
                  Todavía no tienes una suscripción activa.
                </p>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/suscripciones"
                >
                  Ver suscripciones
                </Link>
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
