import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import React, { useContext } from "react";
import { faChild, faLock } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert2";

const ModalNewAccount = ({
  adult,
  showCrearAdulto = null,
  setShowCrearAdulto = null,
  showCrearNino = null,
  setShowCrearNino = null,
}) => {
  const { crearCuentaAdulto, crearCuentaNino } = useContext(LoginContext);

  return (
    <>
      {adult ? (
        <Modal
          show={showCrearAdulto}
          onHide={() => {
            setShowCrearAdulto(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{ flex: 1, textAlign: "center", color: "white" }}
            >
              Registrarse
            </Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              if (
                e.target.elements.clave.value !== e.target.elements.clave2.value
              ) {
                return Swal.fire({
                  title: "Las contraseñas no coinciden.",
                  icon: "error",
                  confirmButtonText: "ACEPTAR",
                });
              }
              const usuario = {
                correo: e.target.elements.correo.value,
                nombre: e.target.elements.nombre.value,
                apellido: e.target.elements.apellido.value,
              };
              const result = await crearCuentaAdulto(
                e.target.elements.clave.value,
                usuario
              );
              if (result === "success") {
                setShowCrearAdulto(false);
                Swal.fire({
                  title:
                    "¡Has creado tu cuenta Wampuk! Te hemos enviado un mail para validar tu casilla de correo.",
                  confirmButtonText: "ACEPTAR",
                  icon: "success",
                });
              }
            }}
          >
            <Modal.Body>
              <Container>
                <Form.Group controlId="nombre">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faChild}
                        title="Nombre"
                      />
                    </InputGroup.Text>
                    <Form.Control required type="text" placeholder="Nombre" />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="apellido">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faChild}
                        title="Apellido"
                      />
                    </InputGroup.Text>
                    <Form.Control required type="text" placeholder="Apellido" />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="correo">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control type="email" placeholder="Mail" />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="clave">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faLock}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      minLength="6"
                      placeholder="Contraseña"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="clave2">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faLock}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      minLength="6"
                      placeholder="Confirma contraseña"
                    />
                  </InputGroup>
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "center" }}>
              <Button className="btn-morado" type="submit">
                REGISTRARSE
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      ) : (
        <Modal
          show={showCrearNino}
          onHide={() => {
            setShowCrearNino(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{ flex: 1, textAlign: "center", color: "white" }}
            >
              Crear cuenta niñx
            </Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={async (e) => {
              debugger;
              e.preventDefault();
              if (
                e.target.elements.clave.value !== e.target.elements.clave2.value
              ) {
                return Swal.fire({
                  title: "Las contraseñas no coinciden.",
                  confirmButtonText: "ACEPTAR",
                  icon: "error",
                });
              }
              const result = await crearCuentaNino(
                e.target.elements.usuario.value,
                e.target.elements.clave.value
              );
              if (result === "success") setShowCrearNino(false);
            }}
          >
            <Modal.Body>
              <Container>
                <Form.Group controlId="usuario">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faChild}
                        title="Usuario"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Usuario para el niñx"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="clave">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faLock}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      minLength="6"
                      placeholder="Contraseña"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="clave2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faLock}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      minLength="6"
                      placeholder="Confirma contraseña"
                    />
                  </InputGroup>
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "center" }}>
              <Button className="btn-morado" type="submit">
                CREAR
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ModalNewAccount;
